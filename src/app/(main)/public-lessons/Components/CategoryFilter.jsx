const categories = [
  "All Lessons",
  "Work & Career",
  "Health",
  "Relationships",
  "Technology",
  "Finance",
];

export default function CategoryFilter({filter, setFilter}) { 
  return (
    <div className="flex gap-3 overflow-x-auto py-4 md:py-6 "> 
        <button 
          onClick={() =>
            setFilter((prev) => ({
              ...prev,
              category: "",
            }))
          }
          className={`px-5 py-2 rounded-full whitespace-nowrap ${filter.category === '' ? 'bg-blue-600' : 'bg-slate-800'}`}
          > 
          All Lessons
          </button> 
        <button 
          onClick={() =>
            setFilter((prev) => ({
              ...prev,
              category: "Personal Growth",
            }))
          }
          className={`px-5 py-2 rounded-full whitespace-nowrap ${filter.category === 'Personal Growth' ? 'bg-blue-600' : 'bg-slate-800'}`}
          > 
          Personal Growth
          </button> 
        <button 
          onClick={() =>
            setFilter((prev) => ({
              ...prev,
              category: "Career",
            }))
          }
          className={`px-5 py-2 rounded-full whitespace-nowrap ${filter.category === 'Career' ? 'bg-blue-600' : 'bg-slate-800'}`}
          > 
          Career
          </button> 
        <button 
          onClick={() =>
            setFilter((prev) => ({
              ...prev,
              category: "Relationships",
            }))
          }
          className={`px-5 py-2 rounded-full whitespace-nowrap ${filter.category === 'Relationships' ? 'bg-blue-600' : 'bg-slate-800'}`}
          > 
          Relationships
          </button> 
        <button 
          onClick={() =>
            setFilter((prev) => ({
              ...prev,
              category: "Mindset",
            }))
          }
          className={`px-5 py-2 rounded-full whitespace-nowrap ${filter.category === 'Mindset' ? 'bg-blue-600' : 'bg-slate-800'}`}
          > 
          Mindset
          </button> 
        <button 
          onClick={() =>
            setFilter((prev) => ({
              ...prev,
              category: "Mistakes Learned",
            }))
          }
          className={`px-5 py-2 rounded-full whitespace-nowrap ${filter.category === 'Mistakes Learned' ? 'bg-blue-600' : 'bg-slate-800'}`}
          > 
          Mistakes Learned
          </button> 
    </div>
  );
}