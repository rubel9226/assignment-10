"use client";

import { useUser } from "@/Components/layout/AuthContext";
import { api } from "@/lib/baseAPI";
import { useEffect, useState } from "react";
import { BiBook, BiHeart, BiBookmark, BiTrendingUp, } from "react-icons/bi";

export default function DashboardStats() {
  const [stats, setStats] = useState({});
  const { token} = useUser();


  const handleGetStats = async () => {
    try {
      const res = await api.get('/users/stats', {
        headers: {
          Authorization: token,
        }
      });
      setStats(res?.data?.payload);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(stats);

  useEffect(() => {
    handleGetStats();
  }, [])

  const cards = [
    {
      title: "Lessons",
      value: stats.totalLessons,
      icon: <BiBook size={28} />,
    },
    {
      title: "Favorites",
      value: stats.totalFavorites,
      icon: <BiBookmark size={28} />,
    },
    {
      title: "Likes",
      value: stats.totalLikes,
      icon: <BiHeart size={28} />,
    },
    {
      title: "Public",
      value: stats.publicLessons,
      icon: <BiTrendingUp size={28} />,
    },
  ];

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-base-100 p-6 rounded-2xl shadow"
        >
          <div className="flex justify-between items-center">
            <div>
              <p>{card.title}</p>
              <h2 className="text-3xl font-bold">
                {card.value}
              </h2>
            </div>

            {card.icon}
          </div>
        </div>
      ))}
    </div>
  );
}