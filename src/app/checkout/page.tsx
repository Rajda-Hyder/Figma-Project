"use client";

import Foot from "../foot/page";
import FormDetails from "./formDetail";
import CheckoutHeader from "./checkoutHeader";

export default function Checkout() {

    return (
        <div>
            {/* checkout Header */}
            <CheckoutHeader />
            {/*  Main Wrapper (Left & Right Sections) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 mt-12 flex flex-col lg:flex-row gap-12">
                {/* Left side: Billing Details */}
                <FormDetails />
            </div>
            
                <div>
                <Foot />
                </div>
                </div>
            )}
