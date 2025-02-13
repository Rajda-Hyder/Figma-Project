import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalResults: number;
  resultsPerPage: number;
  paginate: (pageNumber: number) => void;
}

export default function Pagination({ currentPage, totalResults, resultsPerPage, paginate }: PaginationProps) {
  const pageNumbers = [];

  // Calculate total pages
  const totalPages = Math.ceil(totalResults / resultsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex flex-row justify-center py-28 gap-[38px]">
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={`w-[60px] h-[60px] ${
            currentPage === number ? "bg-[#FBEBB5]" : "bg-[#FFF9E5]"
          } text-black rounded-sm flex items-center justify-center hover:bg-[#FBEBB5] transition duration-300 ease-in-out`}
        >
          {number}
        </button>
        
      ))}
      <div><Link href="#">
        <button className="w-[98px] h-[60px] bg-[#FFF9E5] text-black rounded-lg flex items-center justify-center hover:bg-[#FBEBB5] transition duration-300 ease-in-out">
          Next
        </button>
      </Link>
</div>
    </div>
  );
}
