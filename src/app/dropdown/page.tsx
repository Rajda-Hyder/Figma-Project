"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import cart1 from "../../../public/assets/cart/ant-design.png";
import lock from "../../../public/assets/cart/lock.png";
import cross from "../../../public/assets/cart/cross.png";
import { useCart } from "../contexts/cartContext"; // Import Cart Context

export default function CartDropdown() {
  const [isOpen, setIsOpen] = useState(false); // State for dropdown visibility
  const { state, dispatch } = useCart(); // Access Cart State and Dispatch
  const { cart } = state; // Extract cart items

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Remove item from cart
  const removeFromCart = (id: string) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  // Calculate total price
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="relative inline-block text-left font-poppins">
      {/* Cart Icon Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-center rounded-lg transition duration-300"
      >
        <Image src={cart1} alt="Cart" width={30} height={30} className="w-[28px] h-[28px]" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-96 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <div className="p-4">
            <ul className="flex justify-between items-center border-b pb-2">
              <li className="font-semibold text-[24px] text-black">Shopping Cart</li>
              <li>
                <Image src={lock} alt="lock" />
              </li>
            </ul>

            {/* Check if cart is empty */}
            {cart.length === 0 ? (
              <p className="text-center text-gray-500 py-4">Your cart is empty.</p>
            ) : (
              <>
                {/* Cart Items */}
                <div className="max-h-60 overflow-y-auto">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-4">
                        <Image
                          src={item.imagePath}
                          alt={item.name}
                          width={50}
                          height={50}
                          className="rounded bg-[#FBEBB5] w-[105px] h-[105px]"
                        />
                        <div>
                          <p className="font-normal text-black">{item.name}</p>
                          <ul className="flex gap-2 pt-3">
                            <li className="flex text-sm text-black font-light">{item.quantity}</li>
                            <li className="flex text-sm text-black font-light">x</li>
                            <li className="text-[#B88E2F]">Rs. {item.price.toLocaleString()}</li>
                            <li className="cursor-pointer ml-6">
                              <Image
                                src={cross}
                                alt="remove"
                                onClick={() => removeFromCart(item.id)}
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Total Price */}
                <div className="flex justify-between items-center mt-4 pt-2 border-t">
                  <p className="text-black text-sm">Subtotal</p>
                  <p className="text-[#B88E2F] font-semibold">
                    Rs. {subtotal.toLocaleString()}
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex justify-between items-center mt-4">
                  <Link href="/cart">
                    <button className="px-6 mt-4 w-full border border-black text-black py-2 rounded-full hover:bg-blue-300 transition duration-300 ml-6">
                      View Cart
                    </button>
                  </Link>

                  <Link href="/checkout">
                    <button className="px-6 mt-4 w-full border border-black text-black py-2 rounded-full hover:bg-blue-300 transition duration-300 mr-6">
                      Checkout
                    </button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
