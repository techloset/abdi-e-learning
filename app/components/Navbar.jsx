"use client";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import Link from "next/link";

function Navbar() {
  return (
    <nav class="bg-white border-gray-200">
      <div class=" flex flex-wrap items-center justify-between  p-4 mx-6 xl:mx-[120px]">
        <Link href="/" class="flex items-center">
          <img src="/images/NavLogoDark.png" class="h-20" alt="Logo" />
        </Link>
        <div
          class="items-center justify-between flex md:order-1"
          id="navbar-user"
        >
          <ul class="flex flex-col items-center text-gray-700 text-[22px] p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 ">
            <li>
              <Link
                href="/"
                class="hidden lg:block hover:text-gray-300 py-2 pl-3 pr-4 "
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/course"
                class="hidden lg:block hover:text-gray-300 py-2 pl-3 pr-4"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                href="#"
                class="hidden lg:block hover:text-gray-300 py-2 pl-3 pr-4"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                class="hidden lg:block hover:text-gray-300 py-2 pl-3 pr-4"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="#"
                class="hidden lg:block hover:text-gray-300 py-2 pl-3 pr-4"
              >
                About Us
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <img
                src="/images/profileBlogicon.png"
                className="h-[63px]"
                alt=""
              />
              <Dropdown>
                <DropdownTrigger>
                  <Button className="flex gap-1">
                    Lina
                    <img src="/images/navArrow.png" alt="" />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Static Actions"
                  className="bg-teal-400 bg-opacity-60 rounded-2xl mt-5 text-xl font-semibold text-gray-600 shadow-2xl p-4"
                >
                  <DropdownItem className="my-1" key="home">
                    <Link href="/home">Home</Link>
                  </DropdownItem>
                  <DropdownItem className="my-1" key="blog">
                    <Link href="/blog">Blog</Link>
                  </DropdownItem>
                  <DropdownItem className="my-1" key="blogDetail">
                    <Link href="/blog/detail">Blog Detail</Link>
                  </DropdownItem>
                  <DropdownItem className="my-1" key="course">
                    <Link href="/course">Course</Link>
                  </DropdownItem>
                  <DropdownItem className="my-1" key="courseDetail">
                    <Link href="/course/detail">Course Detail</Link>
                  </DropdownItem>
                  <DropdownItem className="my-1" key="checkout">
                    <Link href="/checkout">Checkout</Link>
                  </DropdownItem>
                  <DropdownItem className="my-1" key="litterature">
                    <Link href="/litterature">Litterature</Link>
                  </DropdownItem>
                  <DropdownItem className="my-1" key="meeting">
                    <Link href="/meeting">Meeting</Link>
                  </DropdownItem>
                  <DropdownItem className="my-1" key="memmership">
                    <Link href="/memmership">Membership</Link>
                  </DropdownItem>
                  <DropdownItem className="my-1" key="search">
                    <Link href="/search">Search</Link>
                  </DropdownItem>
                  <DropdownItem
                    className="my-1 p-3 bg-white rounded-xl flex justify-center "
                    key="login"
                  >
                    <Link href="/auth/login">Login</Link>
                  </DropdownItem>
                  <DropdownItem
                    className="my-1 p-3 bg-teal-500 rounded-xl flex justify-center text-white"
                    key="register"
                  >
                    <Link href="/auth/register">Register</Link>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
