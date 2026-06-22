export default function CreatorCard({ lesson }) {
  return (
    <div className="card bg-base-200 p-6 mt-6">
      <div className="flex gap-5 items-center">
        {
          lesson?.creatorPhoto &&
            <img src={lesson.creatorPhoto} className="w-20 h-20 rounded-full" />
        }

        <div>
          <h2 className="text-xl font-bold">{lesson.creatorName}</h2>

          <p>{lesson.creatorEmail}</p>
        </div>
      </div>
    </div>
  );
}
