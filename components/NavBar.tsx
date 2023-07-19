import Link from "next/link";
import Image from "next/image";

import { BiShoppingBag } from "react-icons/bi";


import SearchBar from "./SearchBar";



const NavBar = () => {
   return (
      <header className="w-full">
         <nav className="w-full flex items-center justify-between">
            {/* ----- Website Logo ----- */}
            <Link href="/">
               <Image 
                  src="/rang-logo.svg"
                  alt="logo image"
                  width={60}
                  height={80}
                  className="object-contain"
               />
            </Link>

            {/* ----- Search Bar ----- */}
            <SearchBar />

            {/* Menu Drop Down (Mobile Device) */}
            <div>
               <BiShoppingBag size={30} />
            </div>

            {/* Menu (Large Screen) */}
         </nav>
      </header>
   )
}

export default NavBar