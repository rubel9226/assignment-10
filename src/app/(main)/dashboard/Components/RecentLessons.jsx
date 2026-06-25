"use client";

export default function lessons({lessons=[]}) {

  return (
    <div className="bg-base-100 rounded-2xl shadow p-6">
      <h2 className="text-2xl font-bold mb-5">
        Recently Added Lessons
      </h2>

      <div className="space-y-4">
        {(Array.isArray(lessons) ? lessons : []).map((lesson) => (
          <div
            key={lesson._id}
            className="border rounded-xl p-4"
          >
            <h3 className="font-semibold">
              {lesson.title}
            </h3>

            <p className="text-sm opacity-70">
              {lesson.category}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}