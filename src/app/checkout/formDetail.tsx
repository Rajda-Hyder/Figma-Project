// components/FormDetails.tsx
"use client"
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import ProductSummary from './productSummary';
import Image from "next/image";
import dot from "../../../public/assets/checkout/Ellipse1.png";
import Link from 'next/link';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  companyName?: string;
  country: string;
  streetAddress: string;
  city: string;
  province: string;
  ZIPcode: string;
  AdditionalInformation:string,
  paymentOption: string;
};

export default function FormDetails() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data:any) => {
    console.log("Form Submitted Successfully:", data);
    alert("🎉 Your order has been placed successfully!");
    reset(); // Reset the form after successful submission
  };


  return (
    <section className='gap-2 font-Poppins col-span-6 ml-10 flex-col'>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-wrap mt-12 ml-10 lg:flex-nowrap">
          <div className='-mr-36 flex'>
            <div className=''>
              <div className='font-semibold text-[36px]'>
                Billing details
              </div>
              <br />
              <div className='flex flex-row'>
                <div className='flex flex-col'>
                  <label>First Name</label>
                  <br />
                  <input type="text"
                    placeholder="First name"
                    {...register("firstName", { required: "First name is required" })}

                    className='border border-black py-3 pl-2 w-3/4 max-w-sm rounded-md focus:ring-2 focus:border-black' />
               {errors.firstName && (
                    <p className="text-red-500 text-sm">{errors.firstName.message}</p>
                  )}

                </div>

                <div className='flex flex-col'>
                  <label>Last Name</label>
                  <br />
                  <input type="text"
                    placeholder="Last name"
                    {...register("lastName", { required: "Last name is required" })}
           className='border border-black py-3 pl-2 w-3/4 max-w-sm rounded-md focus:ring-2 focus:border-black' />
           {errors.lastName && (
                    <p className="text-red-500 text-sm">{errors.lastName.message}</p>
                  )}

                </div>
              </div>
              <br />
              <br />
              <label>Company Name (Optional)</label>
              <br />
              <br />
              <input type="tel"
                placeholder="Company Name (Optional)"
                               {...register("companyName")}
                className='border border-black p-4 w-full max-w-sm rounded-md focus:ring-2 focus:border-black' />
              <br />
              <br />
              <label>Country / Region</label>
              <br />
              <br />
              <select {...register("country", { required: "Country is required" })}
                className='border border-black p-4 w-full max-w-sm rounded-md focus:ring-2 focus:border-black'>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Pakistan">Pakistan</option>
                <option value="India">India</option>
              </select>
              {errors.country && (
                <p className="text-red-500 text-sm">{errors.country.message}</p>
              )}
              <br />
              <br />
              <label>Street Address</label>
              <br />
              <br />
              <input type="text"
                placeholder="Street address"
                {...register("streetAddress", { required: "Street address is required" })}
                className='border border-black p-4 w-full max-w-sm rounded-md focus:ring-2 focus:border-black' />
                            {errors.streetAddress && (
                <p className="text-red-500 text-sm">{errors.streetAddress.message}</p>
              )}

              <br />
              <br />
              <label>Town / City</label>
              <br />
              <br />
              <input type="text"
                placeholder="Town / City"
                {...register("city", {})}
                className='border border-black p-4 w-full max-w-sm rounded-md focus:ring-2 focus:border-black' />
              <br />
              <br />
              <label>Province</label>
              <br />
              <br />
              <select {...register("province")}
                className='border border-black p-4 w-full max-w-sm rounded-md focus:ring-2 focus:border-black'>
                <option value="Western Province">Western Province</option>
                <option value="Eastern Province">Eastern Province</option>
                <option value="Southern Province">Southern Province</option>
              </select>
              <br />
              <br />
              <label>ZIP code</label>
              <br />
              <br />
              <input type="tel"
                placeholder="ZIP code"
                {...register("ZIPcode", { maxLength: 12 })}
                className='border border-black p-4 w-full max-w-sm rounded-md focus:ring-2 focus:border-black' />
              <br />
              <br />
              <label>Phone</label>
              <br />
              <br />
              <input type="tel"
                placeholder="Phone"
                {...register("phone", { required: "Phone number is required", maxLength: 12 })}
               className='border border-black p-4 w-full max-w-sm rounded-md focus:ring-2 focus:border-black' />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}

              <br />
              <br />
              <label>Email</label>
              <br />
              <br />
              <input type="text"
                placeholder="Email"
                {...register("email", {required: "Email is required", pattern: {value: /^\S+@\S+$/i,
                    message: "Invalid email format",  },})}
             className='border border-black p-4 w-full max-w-sm rounded-md focus:ring-2 focus:border-black' />
             {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              <br />
              <br />
              <input type="tel"
                placeholder="Additional information"
                {...register("AdditionalInformation", { required: false })}
                className='border border-black p-4 w-full max-w-sm rounded-md focus:ring-2 focus:border-black' />
            </div>
            {/* Right side: Product Summary */}
            <div>
              <ProductSummary />
              <br />
              <br />
              {/*  Order payment method*/}
              <div className="mt-6 ml-52">
                <ul className="border-t flex flex-col lg:flex-row mt-4 gap-4 lg:gap-2 lg:-ml-40">
                  <li><Image src={dot} alt="dot" className="mt-2 lg:mt-5" /></li>
                  <li className="mt-1 lg:mt-4">Direct Bank Transfer</li>
                </ul>
                <p className="font-light text-justify text-[#9F9F9F] lg:-ml-40 mt-2">Make your payment directly into our bank account. Please use<br />
                  your Order ID as the payment reference. Your order will not be<br />
                  shipped until the funds have cleared in our account.</p>
                <div className="flex flex-col space-y-4 lg:-ml-40">

                  {/* Option 1: Direct Bank Transfer */}
                  
                  <div className="flex flex-col gap-4 mt-4 font-poppins font-light text-[#9F9F9F]">
                <label>
                  <input
                    type="radio"
                    value="Direct Bank Transfer"
                    {...register("paymentOption", { required: "Select a payment option" })}
                    className="mr-2"
                  />
                  Direct Bank Transfer
                </label>
                <label>
                  <input
                    type="radio"
                    value="Cash On Delivery"
                    {...register("paymentOption", { required: "Select a payment option" })}
                    className="mr-2"
                  />
                  Cash On Delivery
                </label>
              </div>
              {errors.paymentOption && (
                <p className="text-red-500 text-sm">{errors.paymentOption.message}</p>
              )}                  <p className="font-light text-[#000000] mt-2">Your personal data will be used to support your experience<br />
                    throughout this website, to manage access to your account, and<br />
                    for other purposes described in our<span className='font-semibold'><Link href="/shop"> privacy policy</Link></span>.</p>
                </div>
              </div>
              <br />
              <br />
              {/* Place Order Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="my-6 py-3 mt-10 !w-[318px] sm:w-auto text-black font-normal rounded-2xl hover:bg-blue-400 outline-[1px] outline outline-black"
                >
                  Place order
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}