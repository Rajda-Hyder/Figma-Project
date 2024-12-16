"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import shop from "../../../public/assets/shopimages/shop1pic.png";
import logo from "../../../public/assets/checkout/checkoutlogo.png";
import small from "../../../public/assets/shopimages/shopSlogo.png";
import line from "../../../public/assets/checkout/ckoutline.png";
import dot from "../../../public/assets/checkout/Ellipse1.png";
import Foot from "../foot/page";



export default function Checkout() {
    // Separate states for each dropdown
    const [showCountryOptions, setShowCountryOptions] = useState(false);
    const [showProvinceOptions, setShowProvinceOptions] = useState(false);

    const [selectedCountry, setSelectedCountry] = useState("Sri Lanka");
    const [selectedProvince, setSelectedProvince] = useState("Western Province");

    // Toggles for each dropdown
    const toggleCountryOptions = () => {
        setShowCountryOptions((prev) => !prev);
        setShowProvinceOptions(false); // Ensure other dropdown is closed
    };

    const toggleProvinceOptions = () => {
        setShowProvinceOptions((prev) => !prev);
        setShowCountryOptions(false); // Ensure other dropdown is closed
    };

    // Handlers for selecting options
    const handleCountrySelect = (country: string) => {
        setSelectedCountry(country);
        setShowCountryOptions(false); // Close dropdown after selection
    };

    const handleProvinceSelect = (province: string) => {
        setSelectedProvince(province);
        setShowProvinceOptions(false); // Close dropdown after selection
    };

    return (
        <div>
            {/* checkout Header */}
            <div className="relative bg-white w-full pt-10">
                <Image src={shop} alt="shop" className="h-[316px] w-full" />
                <ul className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <li>
                        <Image src={logo} alt="logo" />
                    </li>
                    <li className="flex font-poppins pb-20 ml-14">
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

            <section className="text-black body-font relative font-poppins">
                <div className="container px-5 py-24 mx-auto">
                    {/* Wrapper for Left and Right sides */}
                    <div className="flex flex-wrap lg:flex-nowrap">
                        {/* Left side: Billing Details */}
                        <div className="flex flex-col lg:w-2/3 w-full">
                            <div className="flex flex-col w-full mb-12">
                                <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-4 ml-32 text-start text-black">
                                    Billing details
                                </h1>
                            </div>

                            <div className="md:w-2/3 lg:w-3/4 mx-auto">
                                <div className="flex flex-wrap gap-11">
                                    <div className="flex flex-wrap gap-11">
                                        {/* First Name */}
                                        <div className="p-2 w-1/3">
                                            <div className="relative">
                                                <label
                                                    htmlFor="first-name"
                                                    className="leading-7 text-medium text-black"
                                                >
                                                    First Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="first-name"
                                                    name="first-name"
                                                    className="w-full bg-opacity-50 rounded border border-[#9F9F9F] focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                />
                                            </div>
                                        </div>

                                        {/* Last Name */}
                                        <div className="p-2 w-1/3">
                                            <div className="relative">
                                                <label
                                                    htmlFor="last-name"
                                                    className="leading-7 text-medium text-black"
                                                >
                                                    Last Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="last-name"
                                                    name="last-name"
                                                    className="w-full bg-opacity-50 rounded border border-[#9F9F9F] focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                />
                                            </div>
                                        </div>

                                        {/* Company Name */}
                                        <div className="p-2 w-full">
                                            <div className="relative">
                                                <label
                                                    htmlFor="company-name"
                                                    className="leading-7 text-medium text-black"
                                                >
                                                    Company Name (Optional)
                                                </label>
                                                <textarea
                                                    id="company-name"
                                                    name="company-name"
                                                    className="w-3/4 bg-opacity-50 rounded border border-[#9F9F9F] focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                                    defaultValue={""}
                                                />
                                            </div>
                                        </div>

                                        {/* Country / Region */}
                                        <div className="p-2 w-full">
                                            <label
                                                htmlFor="country"
                                                className="leading-7 text-medium text-black"
                                            >
                                                Country / Region
                                            </label>
                                            <div className="relative">
                                                {/* Dropdown Button */}
                                                <button
                                                    onClick={toggleCountryOptions}
                                                    className="absolute top-1/2 right-1/3 transform -translate-x-1/2 -translate-y-1/2"
                                                    aria-label="Toggle Country Dropdown"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className={`h-5 w-5 text-black transform ${showCountryOptions ? "rotate-180" : ""
                                                            }`}
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M19 9l-7 7-7-7"
                                                        />
                                                    </svg>
                                                </button>

                                                {/* Display Selected Country */}
                                                <input
                                                    type="text"
                                                    value={selectedCountry}
                                                    readOnly
                                                    placeholder="Select a country"
                                                    className="w-3/4 h-14 bg-opacity-50 rounded border border-[#9F9F9F] focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                                />

                                                {/* Country Dropdown Options */}
                                                {showCountryOptions && (
                                                    <ul className="absolute top-14 left-0 bg-white border rounded-lg shadow-md w-full z-10">
                                                        {["Pakistan", "Sri Lanka", "India"].map((country) => (
                                                            <li
                                                                key={country}
                                                                onClick={() => handleCountrySelect(country)}
                                                                className="p-2 hover:bg-blue-100 cursor-pointer text-gray-700"
                                                            >
                                                                {country}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        </div>


                                        {/* Street Address */}
                                        <div className="p-2 w-3/4">
                                            <div className="relative">
                                                <label
                                                    htmlFor="street-address"
                                                    className="leading-7 text-medium text-black"
                                                >
                                                    Street address
                                                </label>
                                                <textarea
                                                    id="street-address"
                                                    name="street-address"
                                                    className="w-full bg-opacity-50 rounded border border-[#9F9F9F] focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                                />
                                            </div>
                                        </div>

                                        {/* Town / City */}
                                        <div className="p-2 w-3/4">
                                            <div className="relative">
                                                <label
                                                    htmlFor="Town / City"
                                                    className="leading-7 text-medium text-black"
                                                >
                                                    Town / City
                                                </label>
                                                <textarea
                                                    id="Town / City"
                                                    name="Town / City"
                                                    className="w-full bg-opacity-50 rounded border border-[#9F9F9F] focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                                />
                                            </div>
                                        </div>
                                        {/* Province */}
                                        <div className="p-2 w-full">
                                            <label
                                                htmlFor="province"
                                                className="leading-7 text-medium text-black"
                                            >
                                                Province
                                            </label>
                                            <div className="relative">
                                                {/* Dropdown Button */}
                                                <button
                                                    onClick={toggleProvinceOptions}
                                                    className="absolute top-1/2 right-1/3 transform -translate-x-1/2 -translate-y-1/2"
                                                    aria-label="Toggle Province Dropdown"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className={`h-5 w-5 text-black transform ${showProvinceOptions ? "rotate-180" : ""
                                                            }`}
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M19 9l-7 7-7-7"
                                                        />
                                                    </svg>
                                                </button>

                                                {/* Display Selected Province */}
                                                <input
                                                    type="text"
                                                    value={selectedProvince}
                                                    readOnly
                                                    placeholder="Select a province"
                                                    className="w-3/4 h-14 bg-opacity-50 rounded border border-[#9F9F9F] focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                                />

                                                {/* Province Dropdown Options */}
                                                {showProvinceOptions && (
                                                    <ul className="absolute top-14 left-0 bg-white border rounded-lg shadow-md w-full z-10">
                                                        {[
                                                            "Western Province",
                                                            "Eastern Province",
                                                            "Southern Province",
                                                        ].map((province) => (
                                                            <li
                                                                key={province}
                                                                onClick={() => handleProvinceSelect(province)}
                                                                className="p-2 hover:bg-blue-100 cursor-pointer text-gray-700"
                                                            >
                                                                {province}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        </div>

                                        {/* ZIP Code */}
                                        <div className="p-2 w-3/4">
                                            <div className="relative">
                                                <label htmlFor="zip" className="leading-7 text-medium text-black">
                                                    ZIP code
                                                </label>
                                                <input
                                                    id="zip"
                                                    name="zip"
                                                    className="w-full bg-opacity-50 rounded border border-[#9F9F9F] focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-5 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                                />
                                            </div>
                                        </div>

                                        {/* Phone */}
                                        <div className="p-2 w-3/4">
                                            <div className="relative">
                                                <label
                                                    htmlFor="phone"
                                                    className="leading-7 text-medium text-black"
                                                >
                                                    Phone
                                                </label>
                                                <input
                                                    id="phone"
                                                    name="phone"
                                                    className="w-full bg-opacity-50 rounded border border-[#9F9F9F] focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-5 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                                />
                                            </div>
                                        </div>

                                        {/* Email */}
                                        <div className="p-2 w-3/4">
                                            <div className="relative">
                                                <label
                                                    htmlFor="email"
                                                    className="leading-7 text-medium text-black"
                                                >
                                                    Email address
                                                </label>
                                                <input
                                                    id="email"
                                                    name="email"
                                                    className="w-full py-5 bg-opacity-50 rounded border border-[#9F9F9F] focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                                />
                                            </div>
                                        </div>

                                        {/* Additional Information */}
                                        <div className="p-2 w-full mb-14">
                                            <div className="relative">
                                                <textarea
                                                    id="additional-info"
                                                    name="additional-info"
                                                    className="w-3/4 bg-opacity-50 rounded border border-[#9F9F9F] focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                                    placeholder="Additional information"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Right side: Product Summary */}
                        <div className="lg:w-1/3 w-full lg:pl-8 mt-12 lg:mt-0">
                            <div className="flex mt-8 gap-40 -ml-40 ">
                                <ul>
                                    <li className="font-medium text-[24px] leading-[36px]">
                                        Product
                                    </li>
                                    <li className="font-normal text-[16px] leading-[24px] my-8">
                                        Asgaard sofa  x 1
                                    </li>
                                    <li className="font-normal text-[16px] leading-[24px]">
                                        Subtotal
                                    </li>
                                    <li className="font-normal text-[16px] leading-[24px] my-8">
                                        Total
                                    </li>
                                </ul>
                                <ul>
                                    <li className="font-medium text-[24px] leading-[36px]">
                                        Subtotal
                                    </li>
                                    <li className="font-normal text-[16px] leading-[24px] my-8">
                                        Rs. 250,000.00
                                    </li>
                                    <li className="font-normal text-[16px] leading-[24px]">
                                        Rs. 250,000.00
                                    </li>
                                    <li className="font-bold text-[24px] leading-[36px] text-[#B88E2F] my-8">
                                        Rs. 250,000.00
                                    </li>
                                </ul>
                            </div>
                            <div className="font-poppins">
                                <Image src={line} alt="line" className="-ml-40" />
                            </div>
                            <div>
                                <ul className="flex mt-4 gap-2 -ml-40">
                                    <li><Image src={dot} alt="dot" className="mt-1" /></li>
                                    <li className="">Direct Bank Transfer</li>
                                </ul>
                                <p className="font-light text-justify text-[#9F9F9F] -ml-40 mt-2">Make your payment directly into our bank account. Please use<br />
                                    your Order ID as the payment reference. Your order will not be<br />
                                    shipped until the funds have cleared in our account.</p>
                                <div className="flex flex-col space-y-4 -ml-40">
                                    {/* Option 1 */}
                                    <label className="flex items-center space-x-3 font-poppins font-medium mt-6">
                                        <input
                                            type="radio"
                                            name="option"
                                            value="option1"
                                            className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                                        />
                                        <span className="text-[#9F9F9F]">Direct Bank Transfer</span>
                                    </label>

                                    {/* Option 2  */}
                                    <label className="flex items-center space-x-3 my-4">
                                        <input
                                            type="radio"
                                            name="option"
                                            value="option2"
                                            className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                                        />
                                        <span className="text-[#9F9F9F]">Cash On Delivery</span>
                                    </label>
                                </div>
                                <div className="-ml-40 mt-6">
                                    Your personal data will be used to support your experience<br />
                                    throughout this website, to manage access to your account, and <br />
                                    for other purposes described in our<strong><Link href= "/contact"> privacy policy</Link></strong>.
                                </div>
                                <div>
                               
                                   <button
                                        type="submit"
                                        className=" my-6 py-3 -ml-20 mt-10 !w-[318px] sm:w-auto text-black font-normal rounded-2xl hover:bg-blue-400 outline-[1px] outline outline-black">
                                        Place order
                                    </button>
                                

                                </div>
                                </div>
                               
                        </div>
                        
                    </div>
                    <Foot />
                </div>
            </section>
        </div>
    );
}