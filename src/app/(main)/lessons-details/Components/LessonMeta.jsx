export default function LessonMeta({ lesson }) {
  return (
    <div className="grid md:grid-cols-3 gap-4 mt-6">
      <div className="card bg-base-200 p-5">
        <p>Created</p>

        <h3 className="font-bold">
          {new Date(lesson.createdAt).toLocaleDateString()}
        </h3>
      </div>

      <div className="card bg-base-200 p-5">
        <p>Updated</p>

        <h3 className="font-bold">
          {new Date(lesson.updatedAt).toLocaleDateString()}
        </h3>
      </div>

      <div className="card bg-base-200 p-5">
        <p>Visibility</p>

        <h3 className="font-bold">{lesson.visibility}</h3>
      </div>
    </div>
  );
}
