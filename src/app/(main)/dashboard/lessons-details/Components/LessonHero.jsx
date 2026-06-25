"use client";

export default function LessonHero({ lesson }) {
  return (
    <div className="card bg-base-200 overflow-hidden ">
      {lesson.image && (
        <img src={lesson.image} className="w-full h-[400px] object-cover" />
      )}

      <div className="p-6">
        <div className="flex gap-2">
          <div className="badge badge-primary">{lesson.category}</div>

          <div className="badge badge-secondary">{lesson.emotionalTone}</div>
        </div>

        <h1 className="text-4xl font-bold mt-4">{lesson.title}</h1>

        <p className="mt-4 opacity-70">{lesson.description}</p>
      </div>
    </div>
  );
}
