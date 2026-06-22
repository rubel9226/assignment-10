'use client';

import { useUser } from "@/Components/layout/AuthContext";
import { api } from "@/lib/baseAPI";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiHeart, BiBookmark, BiShow } from "react-icons/bi";
import { FaBookmark, FaHeart } from "react-icons/fa";

export default function LessonStats({ lesson }) {
  const {user} = useUser();

  return (
    <div className="grid grid-cols-3 gap-4 mt-6">
      <div className="stat bg-base-200 rounded">
        {
          lesson.likes?.includes(user?.id) ? 
          <FaHeart size={25} className="fill-red-500" /> : 
          <BiHeart size={25} />
        }

        <span className='ml-2'>
            {lesson.likesCount}
        </span>        
      </div>

        <div className="stat bg-base-200 rounded"> 
          {
            lesson.favorites?.includes(user?.id) ? 
            <FaBookmark size={25} /> : 
            <BiBookmark size={25} />
          }
          <span className='ml-2'>
            {lesson.favoritesCount}
          </span>  
        </div>

        <div className="stat bg-base-200 rounded">
          <BiShow size={25} />
         <span className='ml-2'>
          {lesson.viewsCount}
         </span>
      </div>
    </div>
  );
}
