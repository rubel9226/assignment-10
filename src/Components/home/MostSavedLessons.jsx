const lessons = [
  {
    title: "The Power of Reflection",
    saves: 1200,
  },
  {
    title: "Learning Through Failure",
    saves: 1100,
  },
  {
    title: "Consistency Beats Talent",
    saves: 950,
  },
];

export default function MostSavedLessons() {
  return (
    <section className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-4">

        <div className="mb-12">
          <h2 className="text-4xl font-bold">
            Most Saved Lessons
          </h2>

          <p className="text-slate-400 mt-4">
            Community favorites loved by readers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {lessons.map((lesson) => (
            <div
              key={lesson.title}
              className="bg-slate-900 border border-white/10 rounded-3xl p-6"
            >
              <h3 className="text-xl font-semibold">
                {lesson.title}
              </h3>

              <p className="text-indigo-400 mt-4">
                🔖 {lesson.saves} Saves
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}