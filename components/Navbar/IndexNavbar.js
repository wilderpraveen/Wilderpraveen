import React from "react";
import Link from "next/link";
// components

import IndexDropdown from "components/Dropdowns/IndexDropdown.js";
import BikeDropdown from "@components/Dropdowns/bikes";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-2 navbar-expand-sm bg-lightBlue-200 mb-3">
        <div className="container px-2 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/img/brand/bth_logo.ico">
              <a
                className="text-blueGray-600 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                href="/img/brand/bth_logo.ico"
              >
                Wilder Praveen
              </a>
            </Link>

            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-emerald-100 lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <a
                className="hover:text-blueGray-500 text-blueGray-700 px-1  lg:py-1 flex items-center text-xs uppercase font-bold"

              >
                <i className="fas fa-phone"></i>
              </a>
              <a
                className="text-blueGray-600 text-lg font-bold leading-relaxed inline-block mr-4 py-3 whitespace-nowrap uppercase"

              >
                +91 87440 14924
              </a>
              <li className="flex items-center">
                <input type="text" className="px-10 py-1 h-8 border border-solid  border-blueGray-300 rounded-full text-sm leading-snug text-blueGray-400 bg-white shadow-none outline-none focus:outline-none w-full font-normal rounded-l-none flex-2 border placeholder-blueGray-300" placeholder="Search Item" />
                <button className="text-blueGray-500 background-transparent font-bold uppercase px-2 py-2 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                <i className="fas fa-search"></i>
              </button>
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-600 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-lg uppercase font-bold"
                  href="https://www.facebook.com/profile.php?id=100083620980159"
                  target="_blank"
                >
                  <i className="text-lightBlue-600 fab fa-facebook text-2xl leading-2xl" />
                  <span className="lg:hidden inline-block ml-2">Share</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.instagram.com/bikethehills/"
                  target="_blank"
                >
                  <i class="text-red-500 fa-brands fa-instagram text-2xl leading-2xl"></i>
                  <span className="lg:hidden inline-block ml-2">instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav className="tab_list z-50 w-full flex flex-wrap items-center justify-content-center px-2 py-3 navbar-expand-lg  navbar-dark bg-white shadow">
        <div className="container px-3 mx-auto flex flex-wrap align-content-center items-center justify-content-center">
          <div className="w-full relative flex justify-content-center lg:w-auto lg:static lg:block lg:justify-start">

            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-primary block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-blue lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-50">
              <li className="flex items-center">
                <BikeDropdown />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}