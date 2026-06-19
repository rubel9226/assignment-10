const lessons = [
  {
    title:
      "The Stoic Executive: Finding Calm in Chaos",
    category: "Leadership",
  },
];

export default function FeaturedLessons() {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="grid md:grid-cols-3 gap-6">
        {lessons.map((lesson) => (
          <LessonCard
            key={lesson.title}
            lesson={lesson}
          />
        ))}
      </div>
    </section>
  );
}