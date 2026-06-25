export default function ManageLessonsFilters() {
  return (
    <div className="card bg-base-100 border border-base-300">
      <div className="card-body">
        <div className="grid gap-4 md:grid-cols-3">
          <select className="select select-bordered w-full">
            <option>All Categories</option>
            <option>Programming</option>
            <option>Business</option>
            <option>Life Skills</option>
            <option>Health</option>
          </select>

          <select className="select select-bordered w-full">
            <option>All Visibility</option>
            <option>Public</option>
            <option>Private</option>
          </select>

          <select className="select select-bordered w-full">
            <option>All Content</option>
            <option>Flagged</option>
            <option>Reviewed</option>
            <option>Pending Review</option>
          </select>
        </div>
      </div>
    </div>
  );
}