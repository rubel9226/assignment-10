import { api } from "@/lib/baseAPI";
import { likeLesson } from "@/lib/LikeLesson";
import Image from "next/image";
import Link from "next/link";
import {
  BiHeart,
  BiMessage,
  BiShow,
  BiCrown,
} from "react-icons/bi";
import { FaHeart } from "react-icons/fa";

export default function LessonCard({ user, lesson, token, allLessons, setAllLessons }) {

  const handleLike =async (id) => {
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
        const { likesCount, isLiked } = res?.data?.payload;

        setAllLessons((prev) =>
          prev.map((lesson) =>
            lesson._id === id
              ? {
                  ...lesson,
                  likesCount,
                  likes: isLiked
                    ? [...(lesson.likes || []), user.id]
                    : lesson.likes?.filter(
                        (likeId) => likeId !== user.id
                      ),
                }
              : lesson
          )
        );
        console.log(allLessons);
    } catch (error) {
      console.log(error); 
    }
  }

  const lessonImage = lesson?.image || 'image';
  const userImage = lesson?.creatorPhoto || 'image';


  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-indigo-500/40 transition-all duration-300 flex flex-col h-full">

      {/* Cover */}
      {lessonImage.startsWith("http") && (
        <Link
          href={`/dashboard/lessons-details/${lesson._id}`}
          className="relative block h-52 overflow-hidden"
        >
          <Image
            src={lesson.image}
            alt={lesson.title || "lesson image"}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />

          {lesson.accessLevel === "Premium" && (
            <div className="absolute top-3 right-3 bg-amber-500 text-black px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
              <BiCrown />
              Premium
            </div>
          )}
        </Link>
      )}

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">

        <Link
          href={`/dashboard/lessons-details/${lesson._id}`}
          className="flex flex-col flex-1"
        >
          {/* Category */}
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs bg-indigo-500/20 text-indigo-400 px-3 py-1 rounded-full">
              {lesson.category}
            </span>

            <span className="text-xs text-slate-400">
              {lesson.emotionalTone}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold line-clamp-2 min-h-[56px]">
            {lesson.title}
          </h3>

          {/* Description */}
          <p className="text-slate-400 text-sm line-clamp-3 mt-3 min-h-[60px]">
            {lesson.description}
          </p>

          {/* Creator */}
          <div className="flex items-center gap-3 mt-5">

            {userImage.startsWith("http") && (
              <Image
                src={lesson.creatorPhoto}
                alt={lesson.creatorName}
                width={40}
                height={40}
                className="rounded-full"
              />
            )}

            <div>
              <p className="text-sm font-medium capitalize">
                {lesson.creatorName}
              </p>

              <p className="text-xs text-slate-500">
                {new Date(lesson.createdAt).toLocaleDateString()}
              </p>
            </div>

          </div>
        </Link>

        {/* Bottom Stats */}
        <div className="mt-auto border-t border-slate-700 pt-4 flex justify-between items-center text-slate-400">

          <button
            onClick={() => handleLike(lesson._id)}
            className="flex items-center gap-2 hover:text-red-500 transition"
          >
            {lesson.likes?.includes(user?.id) ? (
              <FaHeart className="fill-red-500" />
            ) : (
              <BiHeart />
            )}
            <span>{lesson.likesCount}</span>
          </button>

          <div className="flex items-center gap-2">
            <BiMessage />
            <span>{lesson.commentsCount}</span>
          </div>

          <div className="flex items-center gap-2">
            <BiShow />
            <span>{lesson.viewsCount}</span>
          </div>

        </div>

      </div>
    </div>
  );
}