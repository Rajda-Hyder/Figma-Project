"use client"
import Image from "next/image";
import Link from "next/link";
import svg from "../../../public/assets/icons/star-half-icon.png";
import fb from "../../../public/assets/icons/fb.png";
import link from "../../../public/assets/icons/link.png";
import twit from "../../../public/assets/icons/twit.png";
import rh from "../../../public/assets/icons/redheart.png";
import arrow from "../../../public/assets/icons/arrow.png";
import line from "../../../public/assets/icons/Line5.png";
import React from "react"; // Import React to use React.use()
import { useCart } from "@/app/contexts/cartContext";
import RelatedProducts from "./[homesection]/relatedProduct";

interface Product {
  _id:string;
  id: string;
  name: string;
  imagePath: string;
  price: number;
  category: string;
  description:string;
}


export default function ProductDetailClient({ product }: { product: Product}) {
  console.log("product data:", product)
  const { dispatch } = useCart(); // Use the cart context

  // Add to Cart Function
  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        _id:product.id,
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        imagePath: product.imagePath,
         },
    });
  };

  // Render product details
  return (
    <div className="mt-1">
      {/* Breadcrumb Section */}
      <div className="p-8 ml-4 sm:ml-10 md:ml-24">
        <ul className="flex font-poppins font-normal gap-2 sm:gap-4 text-[#9F9F9F]">
          <li><Link href="/">Home</Link></li>
          <li className="font-bold">
            <Image src={arrow} alt="arrow" />
          </li>
          <li><Link href="/shop">Shop</Link></li>
          <li className="text-black">
            <Image src={arrow} alt="arrow" />
          </li>
          <li>
            <Image src={line} alt="line" />
          </li>
          <li className="text-black">Product Detail</li>
        </ul>
      </div>

      
        <div  className="space-y-10">
          {/* Product Main Section */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-20 px-4 sm:px-10 md:px-24">
            {/* Image Grid Section */}
            <div className="space-y-4">
            <div className="flex flex-col md:flex-row gap-6">
  {/* Thumbnail Column */}
  <ul className="flex flex-row md:flex-col gap-14 justify-center">
    <li>
      <Image
        src={product.imagePath}
        alt={product.name}
        width={100}
        height={100}
        className="object-contain w-auto h-auto"
      />
    </li>
    <li>
      <Image
        src={product.imagePath}
        alt={product.name}
        width={100}
        height={100}
        className="object-contain w-auto h-auto"
      />
    </li>
    <li>
      <Image
        src={product.imagePath}
        alt={product.name}
        width={100}
        height={100}
        className="object-contain w-auto h-auto"
      />
    </li>
    <li>
      <Image
        src={product.imagePath}
        alt={product.name}
        width={100}
        height={100}
        className="object-contain w-auto h-auto"
      />
    </li>
  </ul>

  {/* Main Image */}
  <Image
    src={product.imagePath}
    alt={product.name}
    width={500}
    height={500}
    className="object-contain w-[500] max-w-lg mx-auto"
  />
</div>
</div>
            {/* Product Information Section */}
            <div className="font-poppins font-normal space-y-6 w-full md:w-1/2">
              {/* Product Name */}
              <h1 className="text-gray-900 text-3xl">{product.name}</h1>

              {/* Product Price */}
              <h3 className="text-xl font-medium">$ {product.price}</h3>

              {/* Rating */}
              <div className="flex items-center space-x-2">
                {[...Array(4)].map((_, index) => (
                  <svg
                    key={index}
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5 text-[#FFDA5B]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
                <Image src={svg} alt="Rating Icon" width={20} height={20} />
                <span className="text-[#9F9F9F]">5 Customer Reviews</span>
              </div>

              {/* Product Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {product.description}
              </p>

              {/* Size Options */}
              <div className="space-y-2">
                <h4 className="font-medium text-[#9F9F9F]">Size</h4>
                <div className="flex space-x-2">
                  {["L", "XL","XS"].map((size) => (
                    <button
                      key={size}
                      className="w-[30px] h-[30px] border rounded-md text-gray-600 hover:bg-[#FBEBB5] transition duration-300 ease-in-out"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Options */}
              <div className="space-y-2">
                <h4 className="font-medium">Color:</h4>
                <div className="flex space-x-3">
                  <button className="w-6 h-6 bg-[#816DFA] border rounded-full"></button>
                  <button className="w-6 h-6 bg-black border rounded-full"></button>
                  <button className="w-6 h-6 bg-[#CDBA7B] border rounded-full"></button>
                </div>
              </div>

              
        {/* Add to Cart Button */}
       <Link href="/cart">         <button
          onClick={addToCart} // Add to cart when button is clicked
          className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
        >
          Add to Cart
        </button>
</Link>
           </div>
          </div>

          {/* Product Meta Section */}
          <div className="px-4 sm:px-10 md:px-24 space-y-4">
              {/* Line above the section */}
  <div className="border-t border-gray-300 w-1/2 ml-auto mb-16"></div> {/* Horizontal line */}
  
  {/* Meta content aligned to the right */}

            <div className="flex justify-end mr-64 space-x-6 mb-4">
              <ul className="space-y-2 text-[#9F9F9F]">
                <li>SKU</li>
                <li>Category</li>
                <li>Tags</li>
                <li>Share</li>
              </ul>
              <ul className="space-y-2 text-[#9F9F9F]">
                <li>:</li>
                <li>:</li>
                <li>:</li>
                <li>:</li>
              </ul>
              <ul className="space-y-2">
                <li>SS001</li>
                <li>Sofas</li>
                <li>Sofa, Chair, Home, Shop</li>
                <li className="flex space-x-3">
                  <Image src={fb} alt="Facebook" width={20} height={20} />
                  <Image src={link} alt="LinkedIn" width={20} height={20} />
                  <Image src={twit} alt="Twitter" width={20} height={20} />
                  <div className="ml-8">
                  <Image src={rh} alt="Red Heart" width={25} height={32}/>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        
          <div className="flex justify-center">
                  {/* Related Products Component */}
      <RelatedProducts currentCategory={product.category} currentProductId={product.id} />

          </div>

          {/* View More Button */}
          <div className="flex justify-center py-10">
            <Link href="/shop">
              <button className="font-poppins font-semibold text-base underline">
                View More
              </button>
            </Link>
          </div>
        </div>
    </div>
  
  );
}