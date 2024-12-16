"use client";
import React, { useState } from "react";
import Image from "next/image";
import cart from "../../../public/assets/cart/ant-design_shopping-cart-outlined.png"; // Replace with your cart image path
import lock from "../../../public/assets/cart/lock.png";
import cross from "../../../public/assets/cart/cross.png";
import Link from "next/link";

export default function CartDropdown() {
    const [isOpen, setIsOpen] = useState(false); // State for dropdown visibility

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left font-poppins">
            {/* Cart Icon Button */}
            <button
                onClick={toggleDropdown}
                className="flex items-center justify-center rounded-lg transition duration-300"
            >
                <Image src={cart} alt="Cart" width={30} height={30} className="w-[28px] h-[28px]" />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-96 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <div className="p-4">
                        <ul className="flex gap-10">
                            <li className="font-semibold text-[24px] text-black border-b pb-2 pr-28">Shopping Cart</li>
                            <li><Image src={lock} alt="lock" className="" /></li>
                        </ul>

                        {/* Example Cart Items */}
                        <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center gap-4 mb-40">
                                <Image
                                    src="/assets/cart/cartSofa.png" // Replace with a product image
                                    alt="Product"
                                    width={50}
                                    height={50}
                                    className="rounded bg-[#FBEBB5] w-[105px] h-[105px] mr-4"
                                />
                                <div>
                                    <p className="font-normal text-black">Asgaard Sofa</p>
                                    <ul className="flex gap-2 pt-3">
                                        <li className="flex text-sm text-black font-light">1</li>
                                        <li className="flex text-sm text-black font-light">x</li>
                                        <li className="text-[#B88E2F]">Rs. 250,000.00</li>
                                        <li className=""><Image src={cross} alt="cross" className="ml-6" /></li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                        {/* Total Price */}
                        <div className="flex justify-between items-center mt-4 pt-2">
                            <p className="text-black text-sm">Subtotal</p>
                            <p className="text-[#B88E2F] font-semibold">Rs. 250,000.00</p>
                        </div>

                        {/*Button */}
                        <div className="flex justify-between items-center mt-4 border-t pt-2">
                            <Link href="/cart">
                                <button className="px-6 mt-4 w-full border border-black text-black py-2 rounded-full hover:bg-blue-300 transition duration-300 ml-6">
                                    View Cart
                                </button></Link>

                            <Link href="/checkout">
                                <button className="px-6 mt-4 w-full border border-black text-black py-2 rounded-full hover:bg-blue-300 transition duration-300 mr-6">
                                    Checkout
                                </button></Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
