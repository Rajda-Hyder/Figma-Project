export default function Foot (){
    return (
        <div>
              {/* Footer */}
      <section className="text-gray-600 font-poppins bg-[#FAF4F4]">
  <div className="container px-5 py-12 mx-auto">
    <div className="flex flex-col md:flex-row items-start justify-center gap-8">
      {/* Free Delivery */}
      <div className="flex flex-col text-center md:text-left">
        <h2 className="text-[28px] md:text-[32px] leading-[48px] font-medium text-black">
          Free Delivery
        </h2>
        <p className="text-base leading-relaxed mt-2 font-normal text-[16px] md:text-[20px]">
          For all orders over $50, consectetur<br /> adipiscing elit.
        </p>
      </div>

      {/* 90 Days Return */}
      <div className="flex flex-col text-center md:text-left">
        <h2 className="text-[28px] md:text-[32px] leading-[48px] font-medium text-black">
          90 Days Return
        </h2>
        <p className="text-base leading-relaxed mt-2 font-normal text-[16px] md:text-[20px]">
          If goods have problems, consectetur<br /> adipiscing elit.
        </p>
      </div>

      {/* Secure Payment */}
      <div className="flex flex-col text-center md:text-left">
        <h2 className="text-[28px] md:text-[32px] leading-[48px] font-medium text-black">
          Secure Payment
        </h2>
        <p className="text-base leading-relaxed mt-2 font-normal text-[16px] md:text-[20px]">
          100% secure payment, consectetur<br /> adipiscing elit.
        </p>
      </div>
    </div>
  </div>
</section>
    
        </div>
    )
}