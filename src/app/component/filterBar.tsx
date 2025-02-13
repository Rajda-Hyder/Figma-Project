"use client";
import Image from "next/image";
import React from "react";
import icon from "../../../public/assets/shopimages/system-uicons_filtering.png";
import icon1 from "../../../public/assets/shopimages/ci_grid-big-round.png";
import icon2 from "../../../public/assets/shopimages/bi_view-list.png";
import icon3 from "../../../public/assets/shopimages/Line 5.png";

// Define Props Interface
interface FilterBarProps {
  short: string; // Currently selected sorting option
  setShort: (value: string) => void; // Function to update sorting option
  handleSort: (option: string) => void; // Function to handle sorting logic
  results: number; // Total number of results
  show: number; // Items to show per page
  setShow: (value: number) => void; // Function to update items to show per page
}

const FilterBar: React.FC<FilterBarProps> = ({
  short,
  setShort,
  handleSort,
  results,
  show,
  setShow,
}) => {
  return (
    <div className="filter-bar flex flex-wrap justify-between items-center p-4 md:p-6 bg-[#FAF4F4] mt-10 rounded-lg shadow-md">
      {/* Filter Button */}
      <button className="flex items-center gap-2 p-2 bg-white rounded-md shadow-sm hover:shadow-md transition-all">
        <Image src={icon} alt="Filter icon" className="w-6 h-6" />
        <span className="text-lg font-medium">Filter</span>
      </button>
      
      <div className="flex items-center gap-4">
        <Image src={icon1} alt="Grid View" className="w-6 h-6 cursor-pointer" />
        <Image src={icon2} alt="List View" className="w-6 h-6 cursor-pointer" />
        <Image src={icon3} alt="Divider" className="w-6 h-6" />
      </div>
      
      {/* Showing Results */}
      <div className="text-sm md:text-base font-medium">
        Showing 1-{show} of {results} results
      </div>

      {/* Show Dropdown */}
      <div className="flex items-center space-x-2">
        <span className="text-sm md:text-base">Show</span>
        <input
          type="number"
          value={show}
          onChange={(e) => setShow(Number(e.target.value))}
          className="border rounded-md w-16 text-center p-1 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Sort Dropdown */}
      <div className="flex items-center space-x-2">
        <span className="text-sm md:text-base">Sort by</span>
        <select
          value={short}
          onChange={(e) => {
            setShort(e.target.value);
            handleSort(e.target.value);
          }}
          className="border rounded-md p-1 text-sm md:text-base bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="default">Default</option>
          <option value="price">Price (Low to High)</option>
          <option value="stock">Stock (Low to High)</option>
          <option value="category">Category (A-Z)</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;

