export default function ManageLessonsFilters({filter, setFilter}) {
  console.log(filter, 'man')
  return (
    <div className="card bg-base-100 border border-base-300">
      <div className="card-body">
        <div className="flex gap-4 flex-col md:flex-row md:justify-start md:items-center ">
            <select 
              value={filter.category}
              onChange={(e) =>
                setFilter((prev) => ({
                  ...prev,
                  category: e.target.value,
                }))
              }
              className="px-4 py-2 h-10 rounded-lg bg-slate-800 "
            >
              <option value="">All Lessons</option>
              <option value="Personal Growth">Personal Growth</option>
              <option value="Career">Career</option>
              <option value="Relationships">Relationships</option>
              <option value="Mindset">Mindset</option>
              <option value="Mistakes Learned">Mistakes Learned</option> 
            </select> 

            <select 
              value={filter.sort}
              onChange={(e) =>
                setFilter((prev) => ({
                  ...prev,
                  sort: e.target.value,
                }))
              }
              className="px-4 py-2 h-10 rounded-lg bg-slate-800 "
            >
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
              <option value="views">Most Viewed</option>
              <option value="likes">Most Liked</option>
              <option value="comments">Most Commented</option>
            </select>
          </div>
      </div>
    </div>
  );
}