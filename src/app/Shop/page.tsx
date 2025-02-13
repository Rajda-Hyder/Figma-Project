"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Foot from "../foot/page";
import { client } from "@/sanity/lib/client";
import Pagination from "../component/pagination";
import FilterBar from "../component/filterBar";

// Define the Product Type
interface Product {
  _id:string;
  id: string;
  name: string;
  imagePath: string;
  price: number;
  description: string;
  discountPercentage: number;
  isFeaturedProduct: boolean;
  stockLevel: number;
  category: string;
}

export default function Shop() {
  // States for Products and Sorting
  const [products, setProducts] = useState<Product[]>([]); // Original Products
  const [sortedProducts, setSortedProducts] = useState<Product[]>([]); // Sorted Products
  const [short, setShort] = useState("default"); // Sorting option
  const [results, setResults] = useState(0); // Total Results
  const [show, setShow] = useState(8); // Items to show per page
  const [currentPage, setCurrentPage] = useState(1); // Current page number

  // Fetch Products from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await client.fetch<Product[]>(
          `*[_type == "product"]`
        );
        setProducts(fetchedProducts); // Set Original Products
        setSortedProducts(fetchedProducts); // Set Initial Sorted Products
        setResults(fetchedProducts.length); // Set Total Results
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Handle Sorting Logic
  const handleSort = (option: string) => {
    setShort(option); // Update Selected Sort Option
    let sortedArray = [...products]; // Copy Original Products

    if (option === "price") {
      sortedArray.sort((a, b) => a.price - b.price); // Sort by Price
    } else if (option === "stock") {
      sortedArray.sort((a, b) => a.stockLevel - b.stockLevel); // Sort by Stock
    } else if (option === "category") {
      sortedArray.sort((a, b) =>
        a.category.localeCompare(b.category) // Sort Alphabetically by Category
      );
    } else {
      sortedArray = [...products]; // Default Order
    }

    setSortedProducts(sortedArray); // Update Sorted Products
  };

  // Pagination Logic
  const indexOfLastProduct = currentPage * show;
  const indexOfFirstProduct = indexOfLastProduct - show;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      {/* Shop Header */}
      <div className="relative bg-white w-full">
        <Image
          src="/assets/shopimages/shop1pic.png"
          alt="shop"
          width={300}
          height={300}
          className="w-full h-[316px]"
        />
        <ul className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <li>
            <Image
              src="/assets/shopimages/shoplogo.png"
              alt="logo"
              width={100}
              height={100}
              className="-mt-20"
            />
          </li>
          <li className="flex font-poppins pb-20">
            <Link href="/">
              <span className="font-medium text-[16px] leading-[24px]">
                Home
              </span>
            </Link>
            <Image
              src="/assets/shopimages/shopSlogo.png"
              alt="small"
              width={50}
              height={50}
              className="w-[14px] h-[8px] m-2"
            />
            <Link href="/Shop">
              <span className="font-light text-[16px] leading-[24px]">Shop</span>
            </Link>
          </li>
        </ul>

        {/* FilterBar Component */}
        <FilterBar
          short={short}
          setShort={setShort}
          handleSort={handleSort}
          results={results}
          show={show}
          setShow={setShow}
        />
      </div>

      {/* Shop Items */}
      <div>
        <section className="text-black font-poppins">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {currentProducts.map((product) => (
                <div
                  key={product.id}
                  className="lg:w-1/4 md:w-1/2 p-4 w-full"
                >
                  <Link
                    href={`/Shop/${product.id}`}
                    className="block relative h-48 rounded overflow-hidden"
                  >
                    <Image
                      src={product.imagePath}
                      alt={product.name}
                      width={400}
                      height={400}
                      className="object-contain object-center w-full h-full block"
                    />
                  </Link>
                  <div className="mt-4">
                    <h2 className="text-black title-font text-xl font-medium font-poppins">
                      {product.name}
                    </h2>
                    <p className="mt-1 font-medium text-[16px]">
                      Category: {product.category}
                    </p>
                    <p className="mt-1 font-semibold text-[24px]">
                      $ {product.price}{" "}
                      <span className="font-normal text-[16px]">
                        | Discount {product.discountPercentage}%
                      </span>
                    </p>

                    <p className="mt-1 font-normal text-[16px]">
                      Available Stock: {product.stockLevel}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Pagination Component */}
      <Pagination 
  currentPage={currentPage} 
  totalResults={results} 
  resultsPerPage={show} 
  paginate={paginate} 
/>

      {/* Footer */}
      <Foot />
    </div>
  );
}
