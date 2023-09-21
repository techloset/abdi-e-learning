import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav class="px-4 lg:px-[121px]">
      <div class="flex items-center text-gray-900 justify-between">
        <a href="/" class="flex items-center pt-2 lg:pt-[30px]">
          <img src="/images/homeLogo.png" class="h-20" alt="Logo" />
        </a>
        <div className="flex items-center pt-2 lg:pt-[30px]">
          <ul class="hidden gap-10 xl:gap-20 lg:flex items-end text-[22px] not-italic font-normal text-white">
            <li class="block">
              <Link class="flex items-center hover:text-gray-300" href="/">
                Home
              </Link>
            </li>
            <li class="block">
              <a class="flex items-center hover:text-gray-300" href="/course">
                Courses
              </a>
            </li>
            <li class="block">
              <a class="flex items-center hover:text-gray-300" href="#">
                Careers
              </a>
            </li>
            <li class="block">
              <Link class="flex items-center hover:text-gray-300" href="/blog">
                Blog
              </Link>
            </li>
            <li class="block">
              <a class="flex items-center hover:text-gray-300" href="#">
                About Us
              </a>
            </li>
          </ul>
          <button className="ms-20 w-40 h-[60px] bg-white rounded-[80px] shadow-md hover:bg-slate-300 text-gray-700 text-xl not-italic font-medium hidden 2xl:block">
            <Link href="/auth/login">Login</Link>
          </button>
          <button className="ms-[26px] w-40 h-[60px] bg-[#FFFFFF4D] rounded-[80px] shadow-md hover:bg-light-teal text-white text-xl not-italic font-medium hidden 2xl:block">
            <Link href="/auth/register">Sign Up</Link>
          </button>
        </div>

        {/* hamburger */}
        <button
          class="middle none relative ml-auto w-10 rounded-lg text-center  text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
          data-collapse-target="navbar"
        >
          <span class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
            <img src="/images/hamburger.png" className="w-12" alt="" />
          </span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
