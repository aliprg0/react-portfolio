import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: "home",
        },
        {
            id: 2,
            link: "about",
        },
        {
            id: 3,
            link: "portfolio",
        },
        {
            id: 4,
            link: "technologies",
        },
        {
            id: 5,
            link: "contact",
        },
    ];

    return (
        <div className="z-10 flex justify-between items-center w-full h-20 text-white fixed bg-black p-4">
            <div className="min-w-[10rem]"> 
                <h1 className="text-5xl font-mono lg:pl-0 ">Ali Kiani</h1>
            </div>
            <ul className="hidden md:flex  lg:pr-60">
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-150"
                    >
                        <Link to={link} smooth duration={600}>{link}</Link>
                    </li>
                ))}
            </ul>
            <div
                onClick={() => setNav( !nav )}
                className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (

            <ul
                className="flex flex-col justify-center items-center absolute 
            top-0 left-0 w-full h-screen bg-gradient-to-b from black to bg-gray-800
            text-gray-300"
            >
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className="px-4 cursor-pointer py-6 text-4xl hover:scale-125 duration-150 capitalize"
                    >
                        <Link
                        onClick={() => setNav(!nav)}
                        to={link} smooth duration={600}>{link}</Link>
                    </li>
                ))}
            </ul>
            )}
        </div>
    );
};

export default NavBar
