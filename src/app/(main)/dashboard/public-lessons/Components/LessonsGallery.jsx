'use client';

import Pagination from "@/Components/layout/Pagination";
import CategoryFilter from "./CategoryFilter";
import FilterBar from "./FilterBar";
import LessonCard from "./LessonCard";
import PremiumLessonCard from "./PremiumLessonCard";
import SearchSection from "./SearchSection";
import { useEffect, useState } from "react";
import { api } from "@/lib/baseAPI";
import { useUser } from "@/Components/layout/AuthContext";

const lessons = [
  {
    id: 1,
    category: "Health",
    title: "The 1% Recovery Rule",
    author: "S. Chen",
    likes: "2.4k",
  },
  {
    id: 2,
    premium: true,
  },
  {
    id: 3,
    category: "Relationships",
    title: "The Unsaid Contract",
    author: "Marcus R.",
    likes: "1.8k",
  },
  {
    id: 4,
    category: "Work",
    title: "Post-AI Soft Skills",
    author: "Jordan D.",
    likes: "942",
  },
];

export default function LessonsGallery() {
    const [allLessons, setAllLessons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState({})
    const [currentPage, setCurrentPage] = useState(1);
    const [filter, setFilter] = useState({
        sort: "latest",
        accessLevel: "",
        emotionalTone: "",
        category: "",
    });
    const {user, token} = useUser();
    console.log(user);


    const handleGetAllLessons = async (page = 1) => {
        try {
            console.log(token)
            setLoading(true);
            const res = await api.get(`/lessons/all-lessons?page=${page}&limit=12&sort=${filter.sort}&accessLevel=${filter.accessLevel}&emotionalTone=${filter.emotionalTone}&category=${filter.category}`, {
                headers: {
                    Authorization: `${token}`, 
                }
            });
            console.log(res);
            setAllLessons(res?.data?.payload?.lessons);
            setPagination(res?.data?.payload?.pagination);
        } catch (error) {
            console.log(error);
            console.log(error?.response?.data);
        } finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        handleGetAllLessons(currentPage);
    }, [currentPage, filter]);

    console.log(filter, 'all lesssons');
    

    return (
        <main className="container mx-auto px-4 py-8">
            <SearchSection />

            <CategoryFilter filter={filter} setFilter={setFilter} />

            <FilterBar filter={filter} setFilter={setFilter} />
            {
                loading 
                ? 
                <div  className='flex justify-center items-center min-h-[40vh]'>
                    <span className="loading loading-spinner loading-xl"></span>
                </div>
                : (allLessons.length === 0) ? (
                <div className="col-span-full flex flex-col items-center justify-center py-20 min-h-[40vh]">
                    <h3 className="text-2xl font-semibold text-gray-300">
                        No Lessons Found
                    </h3>

                    <p className="text-gray-500 mt-2">
                        Try changing your filters or search criteria.
                    </p>
                </div>
                )
                :
                <section className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8 items-center">
                    {(Array.isArray(allLessons) ? allLessons : []).map((lesson) =>
                    user?.isPremium ?  (
                        <LessonCard key={lesson.id} user={user} lesson={lesson} token={token} allLessons={allLessons} setAllLessons={setAllLessons} /> 
                    ) :
                    lesson.accessLevel === 'Premium' ? (
                        <PremiumLessonCard />
                    ) : (
                        <LessonCard user={user} lesson={lesson} token={token} allLessons={allLessons} setAllLessons={setAllLessons} />
                    )
                    )}
                </section> 
            }

            {
                allLessons > 12 &&
                <Pagination
                    pagination={pagination}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            }
        </main>
    );
}