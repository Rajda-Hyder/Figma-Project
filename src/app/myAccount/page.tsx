import Image from "next/image";
import Link from "next/link";
import shop from "../../../public/assets/shopimages/shop1pic.png";
import logo from "../../../public/assets/account/accountlogo.png";
import small from "../../../public/assets/shopimages/shopSlogo.png";
import Foot from "../foot/page";

export default function MyAccount() {
  return (
    <div>
      {/* Header Section */}
      <div className="relative bg-white w-full">
        <Image
          src={shop}
          alt="Shop Background"
          className="w-full h-[200px] sm:h-[316px] object-cover"
        />
        <ul className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <li>
            <Image src={logo} alt="Account Logo" className="w-[80px] sm:w-[100px] md:w-[180px] lg:w-[280]" />
          </li>
          <li className="flex justify-center font-poppins text-[14px] sm:text-[16px] items-center mt-4">
            <Link href="/">
              <span className="font-medium">Home</span>
            </Link>
            <Image src={small} alt="Breadcrumb Icon" className="w-[14px] h-[8px] mx-2" />
            <Link href="/MyAccount">
              <span className="font-light">My Account</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Form Section */}
      <div className="bg-white py-10 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="max-w-[1240px] mx-auto bg-white rounded-lg p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Log In Section */}
            <div className="flex flex-col">
              <h2 className="text-[24px] sm:text-[28px] lg:text-[36px] font-semibold mb-8">
                Log In
              </h2>
              <form className="flex flex-col space-y-12">
                {/* Username or Email */}
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-black mb-2">
                    Username or email address
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="w-[423px] h-[75px] border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your username or email"
                    aria-label="Enter your username or email"
                  />
                </div>

                {/* Password */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-black mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-[423px] h-[75px] border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your password"
                    aria-label="Enter your password"
                  />
                </div>

                {/* Remember Me */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember-me"
                    className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                    aria-label="Remember me"
                  />
                  <label htmlFor="remember-me" className="ml-2 text-sm text-black">
                    Remember me
                  </label>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  {/* Log In Button */}
                  <button
                    type="submit"
                    className="w-auto sm:w-auto text-black font-semibold rounded-md hover:bg-blue-400 px-16 py-4 outline outline-black"
                  >
                    Log In
                  </button>

                  {/* Forgot Password */}
                  <a href="#" className="text-sm hover:underline pt-5">
                    Lost Your Password?
                  </a>
                </div>
              </form>
            </div>

            {/* Register Section */}
            <div className="flex flex-col">
              <h2 className="text-[24px] sm:text-[28px] lg:text-[36px] font-semibold mb-8">
                Register
              </h2>
              <form className="flex flex-col space-y-10">
                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-[423px] h-[75px] border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email address"
                    aria-label="Enter your email address"
                  />
                </div>

                {/* Instructions */}
                <p className="text-[16px] text-black w-[453px] h-[48px]">
                  A link to set a new password will be sent to your email address.
                </p>

                <p className="text-[16px] text-black w-[453px] h-[96px] text-justify">
                  Your personal data will be used to support your experience throughout this
                  website, to manage access to your account, and for other purposes described in
                  our<span>
                    <Link href="#" className="font-bold hover:underline">
                      privacy policy
                    </Link></span> </p>

                {/* Register Button */}
                <button
                  type="submit"
                  className="w-auto sm:w-auto text-black font-semibold rounded-md hover:bg-blue-400 py-4 outline outline-black mr-96"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
  <Foot />
      </div>
  );
}
