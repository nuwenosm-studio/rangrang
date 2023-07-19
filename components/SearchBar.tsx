"use client"

import { BiSearch, BiMenu } from "react-icons/bi";

const SearchBar = () => {
   const handleSearch = () => {

   };

   return (
      <form
         onSubmit={handleSearch}
         className="flex items-center rounded-md bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white w-80 h-16 p-4 gap-2"
      >
         <BiSearch size={32} />
         <input
            type="text"
            placeholder="Discover new coffee ..."
            className="w-full focus:outline-none bg-transparent truncate italic"
         />
         <div className="w-14 h-16 flex-center rounded-r-md cursor-pointer font-bold">
            <BiMenu size={32} />
         </div>
      </form>
   )
}

export default SearchBar