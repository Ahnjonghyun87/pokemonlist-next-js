import React from "react";

interface PaginationProps {
  totalPages: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  page,
  setPage,
}) => {
  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
        className="bg-cyan-500 text-white px-4 py-2 m-1 rounded hover:bg-cyan-600 disabled:bg-gray-300"
      >
        prev
      </button>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index + 1}
          onClick={() => setPage(index + 1)}
          className={`px-4 py-2 m-1 rounded border ${
            page === index + 1
              ? "bg-cyan-700 text-white font-bold"
              : "bg-cyan-500 text-white"
          } hover:bg-cyan-600`}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={page === totalPages}
        className="bg-cyan-500 text-white px-4 py-2 m-1 rounded hover:bg-cyan-600 disabled:bg-gray-300"
      >
        next
      </button>
    </div>
  );
};

export default Pagination;
