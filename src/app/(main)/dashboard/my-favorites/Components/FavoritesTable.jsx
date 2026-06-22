import FavoriteRow from "./FavoriteRow";

export default function FavoritesTable({
  lessons,
  reload,
}) {
  return (
    <>
      {/* Desktop Table */}
      <div className="hidden lg:block bg-base-100 rounded-2xl shadow overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Lesson</th>
              <th>Category</th>
              <th>Tone</th>
              <th>Favorites</th>
              <th>Created</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {lessons.map((lesson) => (
              <FavoriteRow
                key={lesson._id}
                lesson={lesson}
                reload={reload}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden space-y-4">
        {lessons.map((lesson) => (
          <div
            key={lesson._id}
            className="bg-base-100 rounded-2xl shadow p-4"
          >
            <div className="flex gap-3">
              <img
                src={lesson.image}
                alt={lesson.title}
                className="w-20 h-20 rounded-xl object-cover"
              />

              <div className="flex-1">
                <h3 className="font-bold line-clamp-2">
                  {lesson.title}
                </h3>

                <p className="text-sm opacity-70">
                  {lesson.category}
                </p>

                <p className="text-sm opacity-70">
                  {lesson.emotionalTone}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-4 text-sm">
              <div>
                <span className="font-semibold">
                  Favorites:
                </span>{" "}
                {lesson.favoritesCount}
              </div>

              <div>
                <span className="font-semibold">
                  Created:
                </span>{" "}
                {new Date(
                  lesson.createdAt
                ).toLocaleDateString()}
              </div>
            </div>

            <div className="block">
                <div className="flex gap-2 mt-4">
                <a
                    href={`/lessons-details/${lesson._id}`}
                    className="btn btn-primary btn-sm flex-1"
                >
                    Details
                </a>

                <button
                    className="btn btn-error btn-sm flex-1"
                >
                    Remove
                </button>
                </div>
            </div>

          </div>
        ))}
      </div>
    </>
  );
}