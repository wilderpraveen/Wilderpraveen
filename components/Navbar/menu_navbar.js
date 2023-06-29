import React from "react";
import Link from "next/link";
// components


import BikeDropdown from "@components/Dropdowns/bikes";

export default function Navbar(props) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav className="mt-16 tab_list w-full flex flex-wrap items-center  px-2 py-3 navbar-expand-lg  navbar-dark bg-white shadow">


                <ul className="flex ">
                    <li>
                        <img className="pl-6 w-8 h-8"
                            src="/img/bth.png"
                            alt="..."
                        />
                    </li>
                    <li className=" justify-center">
                        <BikeDropdown />
                    </li>

                </ul>


            </nav>
        </>
    );
}