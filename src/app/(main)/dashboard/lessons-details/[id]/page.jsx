import CommentSection from "../Components/CommentSection";
import CreatorCard from "../Components/CreatorCard";
import LessonActions from "../Components/LessonActions";
import LessonHero from "../Components/LessonHero";
import LessonMeta from "../Components/LessonMeta";
import LessonStats from "../Components/LessonStats";
import ReportLessonModal from "../Components/ReportLessonModal";


async function getLesson(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/lessons/single-lesson/${id}`, {
    cache: "no-store",
  });

  return res.json();
}

export default async function LessonDetails({ params }) {
  const query = await params;
  const data = await getLesson(query.id);
  const lesson = data.payload;   

  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-6 p-5">
      <div className="flex-1">
        <LessonHero lesson={lesson} />

        <LessonMeta lesson={lesson} />
      </div>

      <div className="flex-1">

        <CreatorCard lesson={lesson} />

        <LessonStats lesson={lesson} />

        <LessonActions lesson={lesson} />

        <div className="mt-10">
          <CommentSection lessonId={lesson._id} />
        </div>
      </div>

      <ReportLessonModal
        lesson={lesson} 
      />
    </div>
  );
}
