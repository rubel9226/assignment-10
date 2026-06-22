import Link from "next/link";

export default function EmptyLessons() {
  return (
    <div className="text-center p-10">
      <h2 className="text-2xl font-bold">No lessons found</h2>

      <Link href="/dashboard/add-lesson" className="btn btn-primary mt-5">
        Create Lesson
      </Link>
    </div>
  );
}
