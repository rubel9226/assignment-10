import Image from "next/image";
import Link from "next/link";

// const lessons = [
//   {
//     id: 1,
//     title: "The Stoic Executive",
//     category: "Leadership",
//     image: "/images/lesson-1.jpg",
//     author: "Marcus Aurelius Jr.",
//   },
//   {
//     id: 2,
//     title: "Digital Minimalism",
//     category: "Efficiency",
//     image: "/images/lesson-2.jpg",
//     author: "Sarah Chen",
//   },
//   {
//     id: 3,
//     title: "Human Agency in the AI Age",
//     category: "AI Ethics",
//     image: "/images/lesson-3.jpg",
//     author: "David Miller",
//   },
// ];

export default function FeaturedLessons({lessons}) {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="mb-12">
        <h2 className="text-4xl font-bold">
          Curated Insights
        </h2>

        <p className="text-slate-400 mt-3">
          Hand-picked life lessons from our community.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {lessons.map((lesson) => (
          <div
            key={lesson._id}
            className="bg-slate-900 border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-2 transition"
          >
            <div className="relative h-56">
              <Image
                src={lesson?.image}
                alt={lesson?.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <span className="text-indigo-400 text-sm">
                {lesson?.category}
              </span>

              <h3 className="text-xl font-semibold mt-3">
                {lesson?.title?.slice(0, 30)}...
              </h3>

              <p className="text-slate-400 mt-3">
                {lesson?.description?.slice(0, 60)}...
              </p>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm text-slate-500">
                  {lesson?.creatorName}
                </span>

                <Link href={`/dashboard/lessons-details/${lesson?._id}`} className="text-indigo-400 whitespace-nowrap cursor-pointer">
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}