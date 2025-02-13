"use client"
import { useCart } from "../contexts/cartContext";

export default function ProductSummary(){
    const { state } = useCart();
    const { cart } = state;

    // Total and Subtotal Calculation
    const subtotal = cart.reduce(
        (total, item) => total + item.price * item.quantity, 0
    );
    const total = subtotal; // Adjust if taxes or additional fees are added


    return(
   <div>
        {/* Right side: Product Summary */}

                            <div className="flex flex-col w-full ml-56 lg:w-1/3 lg:pl-8 mt-12 lg:mt-0">
                    <div className="lg:w-1/3 w-full lg:pl-8 mt-12 lg:mt-0">
                        {/* Product Summary */}
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-40">

                            {/* Left Column: Product Names and Info */}

                            <ul className="lg:-ml-40">
                                <li className="font-medium text-[24px] leading-[36px]">Product</li>
                                {cart.map((item) => (
                                    <li
                                        key={item.id}
                                        className="font-normal text-[16px] leading-[24px] mt-8 mb-16"
                                    >
                                        {item.name} x {item.quantity}
                                    </li>
                                ))}
                                <li className="font-normal text-[16px] leading-[24px] mt-8 mb-16">Subtotal</li>
                                <li className="font-normal text-[16px] leading-[24px] mt-8 mb-16">Total</li>
                            </ul>

                            {/* Right Column: Prices */}
                            <ul>
                                <li className="font-medium text-[24px] leading-[36px]">Subtotal</li>
                                {cart.map((item) => (
                                    <li
                                        key={item.id}
                                        className="font-normal text-[16px] leading-[24px] mt-8 mb-16"
                                    >
                                        $ {(item.price * item.quantity).toLocaleString()} {/* Price x Quantity */}
                                    </li>
                                ))}
                                <li className="font-normal text-[16px] leading-[24px] mt-8 mb-16">
                                    $ {subtotal.toLocaleString()} {/* Subtotal */}
                                </li>
                                <li className="font-bold text-[24px] leading-[36px] text-[#B88E2F] mt-8 mb-16">
                                    $ {subtotal.toLocaleString()} {/* Total */}
                                </li>
                            </ul>
                        </div>
                    </div>
                    </div>
        </div>
    )
}