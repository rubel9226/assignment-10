import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">

        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 p-16 text-center">

          <h2 className="text-5xl font-bold">
            Ready To Share Your Wisdom?
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-white/80">
            Join thousands of people documenting
            lessons learned from real life experiences.
          </p>

          <Link href={'/dashboard/add-lessons'} className="mt-8 px-10 py-4 bg-white text-black rounded-xl font-semibold">
            Start Writing Today
          </Link>

        </div>

      </div>
    </section>
  );
}