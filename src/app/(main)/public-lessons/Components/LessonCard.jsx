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
      console.log(error?.response?.data?.message);
    }
  }

  const lessonImage = lesson?.image || 'image';
  const userImage = lesson?.creatorPhoto || 'image';


  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-indigo-500/40 transition-all ">

      {/* Cover */}
      { lessonImage.startsWith("http") &&
        <Link href={`/lessons-details/${lesson._id}`} className="relative cursor-pointer">
          <div className='h-52'>
            {
              lessonImage.startsWith("http") && 
                <Image 
                  src={lesson?.image}
                  alt={lesson?.title ||  'lesson image'}
                  fill    
                  className="object-cover"
                /> 
            }

          </div>



          {lesson.accessLevel && lesson.accessLevel === "Premium" && (
            <div className="absolute top-3 right-3 bg-amber-500 text-black px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
              <BiCrown />
              Premium  
            </div>
          )}
        </Link>
      }

      {/* Content */}
      <div className="p-5 pb-0"> 

        <Link href={`/lessons-details/${lesson._id}`} className=' cursor-pointer'>
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs bg-indigo-500/20 text-indigo-400 px-3 py-1 rounded-full">
              {lesson.category} 
            </span>

            <span className="text-xs text-slate-400">
              {lesson.emotionalTone}
            </span>
          </div>

          <h3 className="text-xl font-semibold mb-2 line-clamp-2">
            {lesson.title}
          </h3>

          <p className="text-slate-400 text-sm line-clamp-3 mb-4">
            {lesson.description}
          </p>

          {/* Creator */}
          <div className='flex items-center justify-between mb-4'>
            <div className="flex items-center gap-3">
          {
            userImage.startsWith("http") && 
            <Image
              src={ lesson?.creatorPhoto }
              alt={lesson.creatorName}
              width={36}
              height={36}
              className="rounded-full"
            />
          }

          <div>
            <p className="text-sm font-medium capitalize">
              {lesson.creatorName}
              
            </p>

            <p className="text-xs text-slate-500">
              {new Date(
                lesson.createdAt
              ).toLocaleDateString()}
            </p>
          </div>
            </div>
              
          </div>

        </Link>

        {/* Stats */}
        <div className="border-t border-slate-700 pt- flex items-center justify-between text-slate-400">

          <div onClick={() => handleLike(lesson._id)} className="flex items-center gap-1 px-5 pb-5 
          pt-4">
            {
              lesson.likes?.includes(user?.id) ? 
              <FaHeart className="fill-red-500" /> : 
                <BiHeart />
            }
            {lesson.likesCount}
          </div>

          <div className="flex items-center gap-1">
            <BiMessage />
            {lesson.commentsCount}
          </div>

          <div className="flex items-center gap-1">
            <BiShow />
            {lesson.viewsCount} 
          </div>

        </div>

      </div>
    </div>
  );
}