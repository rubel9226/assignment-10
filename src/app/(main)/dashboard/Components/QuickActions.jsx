import Link from "next/link";
import {
  BiPlusCircle,
  BiBookContent,
  BiBookmark,
} from "react-icons/bi";

export default function QuickActions() {
  return (
    <div className="bg-base-100 rounded-2xl shadow p-6">
      <h2 className="text-2xl font-bold mb-5">
        Quick Actions
      </h2>

      <div className="grid md:grid-cols-3 gap-4">
        <Link
          href="/add-lessons"
          className="btn btn-primary h-20"
        >
          <BiPlusCircle size={24} />
          Add Lesson
        </Link>

        <Link
          href="/my-lessons"
          className="btn btn-outline h-20"
        >
          <BiBookContent size={24} />
          My Lessons
        </Link>

        <Link
          href="/dashboard/my-favorites"
          className="btn btn-outline h-20"
        >
          <BiBookmark size={24} />
          Favorites
        </Link>
      </div>
    </div>
  );
}