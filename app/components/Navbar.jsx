import React from "react";

function Navbar() {
  return (
    <nav class="bg-white border-gray-200">
      <div class=" flex flex-wrap items-center justify-between  p-4 mx-6 xl:mx-[120px]">
        <a href="/" class="flex items-center">
          <img src="/images/NavLogoDark.png" class="h-20" alt="Logo" />
        </a>
        <div
          class="items-center justify-between flex md:order-1"
          id="navbar-user"
        >
          <ul class="flex flex-col items-center text-gray-700 text-[22px] p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 ">
            <li>
              <a
                href="/"
                class="hidden lg:block hover:text-gray-300 py-2 pl-3 pr-4 "
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                class="hidden lg:block hover:text-gray-300 py-2 pl-3 pr-4"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                class="hidden lg:block hover:text-gray-300 py-2 pl-3 pr-4"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                class="hidden lg:block hover:text-gray-300 py-2 pl-3 pr-4"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                class="hidden lg:block hover:text-gray-300 py-2 pl-3 pr-4"
              >
                Contact
              </a>
            </li>
            <li className="flex items-center gap-2">
              <img
                src="/images/profileBlogicon.png"
                className="h-[63px]"
                alt=""
              />
              <p>Lina</p>
              <img src="/images/navArrow.png" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
