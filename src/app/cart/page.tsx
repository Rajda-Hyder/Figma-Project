"use client";

import Link from "next/link";
import Image from "next/image";
import shop from "../../../public/assets/shopimages/shop1pic.png";
import logo from "../../../public/assets/cart/cartlogo.png";
import small from "../../../public/assets/shopimages/shopSlogo.png";
import del from "../../../public/assets/cart/ant-design_delete-filled.png";
import Foot from "../foot/page";
import { useCart } from "../contexts/cartContext";

// Product Interface
interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imagePath: string;
}

export default function CartPage() {
  const { state, dispatch } = useCart();
  const { cart } = state;

  const handleRemove = (id: string) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  // Calculate Subtotal
  const calculateSubtotal = (price: number, quantity: number) => {
    return price * quantity;
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return <p>Your cart is empty!</p>;
  }

  if (cart.length === 0) {
    return (
      <div className="text-center py-16">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty!</h1>
        <Link href="/Shop">
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
            Continue Shopping
          </button>
        </Link>
      </div>
    );
  }

  
  return (
    <div className="w-full">
      {/* Shop Header */}
      <div className="relative bg-white w-full">
        <Image src={shop} alt="shop" className="h-[316px] w-full object-cover" />
        <ul className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <li>
            <Image src={logo} alt="logo" />
          </li>
          <li className="flex font-poppins pb-10 justify-center items-center">
            <Link href="/">
              <span className="font-medium text-[16px] leading-[24px]">Home</span>
            </Link>
            <Image src={small} alt="small" className="w-[14px] h-[8px] m-2" />
            <Link href="/Shop">
              <span className="font-light text-[16px] leading-[24px]">Shop</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Cart Body */}
      <div className="flex flex-col lg:flex-row gap-10 mt-10 mx-4 lg:mx-16">
        {/* Cart Items */}

        <div className="flex flex-col w-full lg:w-3/4">
          {/* Header Row */}
          <ul className="flex bg-[#FFF9E5] py-4 px-6 font-poppins font-medium text-[16px] leading-[24px] justify-between text-center">
            <li>Product</li>
            <li>Price</li>
            <li>Quantity</li>
            <li>Subtotal</li>
          </ul>

          {/* Cart Items */}
          {cart.map((item:Product) => (
            <ul
              key={item.id}
              className="flex flex-wrap items-center justify-between text-[#9F9F9F] px-6 py-4"
            >
              <li>
                <Image
                  src={item.imagePath}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="bg-[#FBEBB5] w-[80px] h-[80px] object-cover"
                />
              </li>
              <li className="mt-4 lg:mt-0 text-center lg:text-left">{item.name}</li>
              <li className="mt-4 lg:mt-0">$ {item.price}</li>
              <li className="mt-4 lg:mt-0">
                <input
                  type="number"
                  value={item.quantity}
                  min={1}
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value))
                  }
                  className="w-16 text-center"
                />
              </li>
              <li className="mt-4 lg:mt-0">
                $ {calculateSubtotal(item.price, item.quantity)}
              </li>
              <li className="mt-4 lg:mt-0">
                <Image
                  src={del}
                  alt="delete"
                  className="cursor-pointer"
                  onClick={() => handleRemove(item.id)}
                />
              </li>
            </ul>
          ))}
        </div>

        {/* Cart Totals */}
        <div className="w-full lg:w-1/4 bg-[#FFF9E5] rounded-lg p-8 text-center font-poppins">
          <h1 className="font-semibold text-[32px] leading-[48px] mb-6">Cart Totals</h1>
          <ul className="flex flex-col text-[16px] font-medium gap-4">
            <li className="flex justify-between">
              <span>Total</span>
              <span className="text-[#B88E2F] font-semibold text-[20px] leading-[30px]">
                $ {totalPrice}
              </span>
            </li>
          </ul>
          <Link href="/checkout">
            <button className="mt-8 border border-black px-6 py-3 rounded-xl font-normal text-[20px] hover:bg-gray-200 transition">
              Check Out
            </button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <Foot />
    </div>
  );
}
