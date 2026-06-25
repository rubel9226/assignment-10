export default function FilterBar({filter, setFilter}) {
  return (
    <div className="flex flex-wrap justify-between gap-4 border-t border-slate-700 pt-5">
      <div className="flex gap-2 overflow-x-auto py-2 md:py-4 ">
        <button 
          onClick={() =>
            setFilter((prev) => ({
              ...prev,
              emotionalTone: "",
            }))
          }
          className={`px-4 py-2 rounded-lg cursor-pointer whitespace-nowrap ${filter.emotionalTone === '' ? 'bg-blue-600' : ' bg-slate-800'}`}>
          All Lessons
        </button>

        <button 
          onClick={() =>
            setFilter((prev) => ({
              ...prev,
              emotionalTone: "Motivational",
            }))
          }
          className={`px-4 py-2 rounded-lg cursor-pointer whitespace-nowrap ${filter.emotionalTone === 'Motivational' ? 'bg-blue-600' : ' bg-slate-800'}`}>
          Motivational
        </button>

        <button
          onClick={() =>
            setFilter((prev) => ({
              ...prev,
              emotionalTone: "Sad",
            }))
          }
          className={`px-4 py-2 rounded-lg cursor-pointer whitespace-nowrap ${filter.emotionalTone === 'Sad' ? 'bg-blue-600' : ' bg-slate-800'}`}>
          sad
        </button>

        <button 
          onClick={() =>
            setFilter((prev) => ({
              ...prev,
              emotionalTone: "Realization",
            }))
          }
          className={`px-4 py-2 rounded-lg cursor-pointer whitespace-nowrap ${filter.emotionalTone === 'Realization' ? 'bg-blue-600' : ' bg-slate-800'}`}>
          Realization
        </button>
        
        <button 
          onClick={() =>
            setFilter((prev) => ({
              ...prev,
              emotionalTone: "Gratitude",
            }))
          }
          className={`px-4 py-2 rounded-lg cursor-pointer whitespace-nowrap ${filter.emotionalTone === 'Gratitude' ? 'bg-blue-600' : ' bg-slate-800'}`}>
          Gratitude
        </button>
      </div>

      <div className=" py-2 md:py-4 ">
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
  );
}