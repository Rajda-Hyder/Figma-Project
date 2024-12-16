"use client"; // For Next.js client-side rendering
import { useState } from "react";

export default function CounterButton() {
  const [count,setCount] = useState(1); // Initial count starts at 1
  const baseAmount = 250000; // Base amount
  const [amount,setAmount] = useState(baseAmount); // Initial amount

  const handleButtonClick = () => {
    const newCount = count + 1; // Increment count
    setCount(newCount); // Update count
    setAmount(newCount * baseAmount); // Update amount based on count
  };

  return (
    <div className="flex justify-center items-center gap-16">
      {/* Combined Button */}
      <button
        onClick={handleButtonClick}
        className="w-[32px] h-[32px] outline outline-[#9F9F9F] outline-1 text-black rounded-sm flex items-center justify-center hover:bg-[#FBEBB5] transition duration-300 ease-in-out"
      >
        {count} {/* Display the current count */}
      </button>

      <button
        onClick={handleButtonClick}
        className="text-black rounded-sm flex items-center justify-center hover:bg-[#FBEBB5] transition duration-300 ease-in-out"
      >Rs.
        {amount.toLocaleString()} {/* Display the updated amount */}
      </button>
    </div>
  );
}
