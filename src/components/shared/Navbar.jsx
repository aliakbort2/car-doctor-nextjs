"use client";

import Link from "next/link";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { IoCartOutline, IoSearch } from "react-icons/io5";
import navLogo from "../../../public/assets/icons/nav_logo.svg";
import toast from "react-hot-toast";

const Navbar = () => {
  const session = useSession();

  const handleLogout = () => {
    signOut();
    toast.success("Logout Successfully.");
  };

  const links = (
    <>
      <li>
        <Link
          href="/"
          className="bg-inherit hover:bg-inherit hover:text-primary font-bold"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/service"
          className="bg-inherit hover:bg-inherit hover:text-primary font-bold"
        >
          Service
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className="bg-inherit hover:bg-inherit hover:text-primary font-bold"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          href="/blog"
          className="bg-inherit hover:bg-inherit hover:text-primary font-bold"
        >
          Blog
        </Link>
      </li>
      <li>
        <Link
          href="/bookings"
          className="bg-inherit hover:bg-inherit hover:text-primary font-bold"
        >
          My Bookings
        </Link>
      </li>
      <li>
        {!session.data ? (
          <Link
            href="/login"
            className="bg-inherit hover:bg-inherit hover:text-primary font-bold"
          >
            Login
          </Link>
        ) : (
          <button
            onClick={handleLogout}
            className="bg-inherit hover:bg-inherit hover:text-primary font-bold"
          >
            logout
          </button>
        )}
      </li>
    </>
  );

  return (
    <>
      <div className="navbar p-0 font-inter py-1 max-w-screen-xl mx-auto px-1.5 sm:px-2 md:px-2.5">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="cursor-pointer lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 font-bold"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 py-5 border"
            >
              {links}
            </ul>
          </div>
          <Link
            href={"/"}
            className="text-xl md:text-3xl font-extrabold ml-auto lg:ml-0"
          >
            <Image
              className="w-2/3 md:w-20"
              src={navLogo}
              alt="image"
              height={100}
              width={100}
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex custom_nav_style">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end flex items-center space-x-3">
          <IoSearch className="text-xl" />
          <IoCartOutline className="text-xl" />

          <Link
            href={""}
            className="capitalize text-primary border border-primary py-2 px-4 rounded font-semibold hover:bg-primary hover:text-white cursor-pointer hover:ease-in hover:duration-300"
          >
            Appointment
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;

/*

 className={({ isActive, isPending }) =>
            isActive
              ? "bg-inherit hover:bg-inherit text-primary font-bold"
              : isPending
              ? "pending"
              : "bg-inherit hover:bg-inherit"
          }

*/
