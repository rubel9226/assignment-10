export default function ContributorCard({
  user,
}) {
  return (
    <div className="flex justify-between items-center border-b pb-4">
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-full bg-indigo-700 text-xl uppercase flex items-center justify-center font-bold">
          {
            user?.creatorImage 
            ? 
            <img 
              src={user?.creatorImage}
              alt=""
              className="rounded-full"
            />
            :
            user?.creatorName[0]
          }
        </div>

        <div>
          <h3 className="font-semibold">
            {user?.creatorName}
          </h3>

          <p className="text-sm text-gray-500">
            Contributor
          </p>
        </div>
      </div>

      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
        {user?.totalLessons} Lessons
      </span>
    </div>
  );
}