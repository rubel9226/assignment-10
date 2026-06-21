import { api } from "@/lib/baseAPI";
import { likeLesson } from "@/lib/LikeLesson";
import Image from "next/image";
import {
  BiHeart,
  BiMessage,
  BiShow,
  BiCrown,
} from "react-icons/bi";

export default function LessonCard({ lesson, token, allLessons, setAllLessons }) {

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
        console.log(res?.data);
        console.log(allLessons);
    } catch (error) {
      console.log(error);
      console.log(error?.response?.data?.message);
    }
  }

  const lessonImage = lesson?.image || 'image';
  const userImage = lesson?.creatorPhoto || 'image';

  
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-indigo-500/40 transition-all">

      {/* Cover */}
      { lessonImage.startsWith("http") &&
        <div className="relative">
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
        </div>
      }

      {/* Content */}
      <div className="p-5"> 

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
        <div className="flex items-center gap-3 mb-4">
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
            <p className="text-sm font-medium">
              {lesson.creatorName}
              
            </p>

            <p className="text-xs text-slate-500">
              {new Date(
                lesson.createdAt
              ).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="border-t border-slate-700 pt-4 flex items-center justify-between text-slate-400">

          <div onClick={() => handleLike(lesson._id)} className="flex items-center gap-1">
            <BiHeart />
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