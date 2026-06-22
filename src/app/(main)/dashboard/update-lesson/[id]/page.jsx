import UpdateLessonForm from "../Components/UpdateLessonForm";

export default async function UpdateLessonPage({ params }) {

  const { id } = await params;

  return (
    <div className="max-w-5xl mx-auto p-5">

      <h1 className="text-4xl font-bold mb-8">
        Update Lesson
      </h1>

      <UpdateLessonForm lessonId={id} />

    </div>
  );
}