import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const navMenu = (
    <React.Fragment>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/services"}>Services</Link>
      </li>
      <li>
        <Link href={"/blogs"}>Blogs</Link>
      </li>
    </React.Fragment>
  );

  return (
    <header className="bg-base-100 shadow-sm">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navMenu}
            </ul>
          </div>
          <Link href={"/"}>
            <Image
              src="/assets/logo.png"
              alt="Car Doctor Logo"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navMenu}</ul>
        </div>
        <div className="navbar-end">
          <Link href={"/"} className="btn bg-red-400 text-black rounded-md">
            Button
          </Link>
        </div>
      </div>
    </header>
  );
}
