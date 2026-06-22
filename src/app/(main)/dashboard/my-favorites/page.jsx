"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/baseAPI";
import FavoritesFilters from "./components/FavoritesFilters";
import { useUser } from "@/Components/layout/AuthContext";
import FavoritesCardTable from "./Components/FavoritesCardTable";

export default function MyFavoritesPage() {
  const [lessons, setLessons] = useState([]);
  const [category, setCategory] = useState("");
  const [tone, setTone] = useState("");

  const {token} = useUser();

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      const res = await api.get(`/users/favorite-lessons?category=${category}&tone=${tone}`, {
        headers: {
            Authorization: token,
        }
      });

      setLessons(res.data?.payload);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredLessons = lessons.filter(
    (lesson) => {
      const categoryMatch =
        !category ||
        lesson.category === category;

      const toneMatch =
        !tone ||
        lesson.emotionalTone === tone;

      return categoryMatch && toneMatch;
    }
  );

  return (
    <div className="space-y-6 container mx-auto mt-4 min-h-[50vh]">
      <FavoritesFilters
        category={category}
        setCategory={setCategory}
        tone={tone}
        setTone={setTone}
      />

      <FavoritesCardTable
        lessons={filteredLessons}
        reload={loadFavorites}
      />
    </div>
  );
}