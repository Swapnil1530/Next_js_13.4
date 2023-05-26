import React from 'react';
import Link from "next/link";
import About from "./About/page";
import Contact from "./Contact/page";


const Header = () => {
    return (
<header className="text-gray-600 body-font bg-blue-600 ">
  <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

      <span className="ml-3 text-xl">Navbar</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
     <Link href="/"> <p className=" bg-white mr-5 rounded p-1 hover:bg-blue-700 hover:text-gray-900 text-black-800">Home</p></Link>
     <Link href="/About"> <p className=" bg-white mr-5 rounded p-1 hover:bg-blue-700 hover:text-gray-900 text-blue-800">About</p></Link>
     <Link href="/Contact"> <p className=" bg-white mr-5 rounded p-1 hover:bg-blue-700 hover:text-gray-900 text-blue-800">Contact</p></Link>
     <Link href="/Data"> <p className=" bg-white mr-5 rounded p-1 hover:bg-blue-700 hover:text-gray-900 text-blue-800">Data</p></Link>
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>

    );
};

export default Header;
