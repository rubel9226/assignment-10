"use client";


import { useUser } from "@/Components/layout/AuthContext";
import { api } from "@/lib/baseAPI";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiHeart, BiBookmark, BiFlag } from "react-icons/bi";
import { FaHeartBroken } from "react-icons/fa";
import { GoBookmarkSlashFill } from "react-icons/go";

export default function LessonActions({ lesson }) {
  const [loading, setLoading] = useState(false);
  const [loadingSave, setLoadingSave] = useState(false);
  const router = useRouter();
  const {user, token} = useUser();

  const liked = lesson.likes?.includes(user?.id)
  const saved = lesson.favorites?.includes(user?.id)

  const handleLike =async () => {
    setLoading(true);
    const id = lesson._id;
    console.log({id, token})
    try {
      const res = await api.put(
            `/lessons/like-lesson/${id}`,
            {},
            {
              headers: {
                Authorization: token,
              },
            }
        );
        console.log(res?.data?.payload);
        router.refresh();

    } catch (error) {
      console.log(error);
      console.log(error?.response?.data?.message);
    } finally {
      setLoading(false)
    }
  }
  
  
  
  const handleSaveLesson =async () => {
    setLoadingSave(true);
    const id = lesson._id;
    console.log({id, token})
    try {
      const res = await api.put(
            `/lessons/save-unsave/${id}`,
            {},
            {
              headers: {
                Authorization: token,
              },
            }
        );
        console.log(res?.data?.payload);
        router.refresh();

    } catch (error) {
      console.log(error);
      console.log(error?.response?.data?.message);
    } finally {
      setLoadingSave(false)
    }
  }


  const handleOpenReportModal = () => {
    document
      .getElementById("report_lesson_modal")
      ?.showModal();
  };


  return (
    <div className="flex gap-4 mt-8">
      <button 
        disabled={loading}
        onClick={handleLike} 
        className="btn btn-error gap-2"
      >
        
        {loading ? 'Please Wait...' : liked ? <><FaHeartBroken /> Unlike</> : <><BiHeart /> Like</>}
      </button>

      <button 
        disabled={loadingSave}
        onClick={handleSaveLesson} 
        className="btn btn-primary gap-1"
      >
        {loadingSave ? 'Please Wait...' : saved ? <><GoBookmarkSlashFill size={17} /> UnSave</> : <><BiBookmark size={17} /> Save</>}
      </button>

      <button 
        onClick={handleOpenReportModal} 
        className="btn btn-warning"
      >
        <BiFlag />
        Report
      </button>
    </div>
  );
}
