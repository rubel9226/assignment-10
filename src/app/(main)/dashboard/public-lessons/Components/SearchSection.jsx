import { BiSearch } from "react-icons/bi";

export default function SearchSection({setSearch}) {
  return (
    <section className="space-y-5">
      <div className="flex flex-col lg:flex-row justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold">
            Public Lessons Gallery
          </h1>

          <p className="text-slate-400">
            Discover shared wisdom from the community.
          </p>
        </div>

        <div className="relative w-full lg:w-96">
          <BiSearch className="absolute left-4 top-1/2 -translate-y-1/2" />

          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search lessons..."
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-800"
          />
        </div>
      </div>
    </section>
  );
}