import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export default function Pagination({
  pagination,
  currentPage,
  setCurrentPage,
}) {
  if (!pagination) return null;

  const totalPages = pagination.totalPages;

  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }

    pages.push(1);

    let startPage = Math.max(currentPage - 1, 2);
    let endPage = Math.min(currentPage + 1, totalPages - 1);

    if (currentPage <= 3) {
      startPage = 2;
      endPage = 4;
    }

    if (currentPage >= totalPages - 2) {
      startPage = totalPages - 3;
      endPage = totalPages - 1;
    }

    if (startPage > 2) {
      pages.push("...");
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages - 1) {
      pages.push("...");
    }

    pages.push(totalPages);

    return pages;
  };

  const pages = getPageNumbers();

  return (
    <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">

      {/* Previous */}
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((prev) => prev - 1)}
        className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <BiChevronLeft size={20} />
      </button>

      {/* Pages */}
      {pages.map((page, index) =>
        page === "..." ? (
          <span
            key={`dots-${index}`}
            className="px-2 text-slate-400"
          >
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-10 h-10 rounded-lg transition-all ${
              currentPage === page
                ? "bg-indigo-500 text-white"
                : "bg-slate-800 hover:bg-slate-700"
            }`}
          >
            {page}
          </button>
        )
      )}

      {/* Next */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage((prev) => prev + 1)}
        className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <BiChevronRight size={20} />
      </button>
    </div>
  );
}