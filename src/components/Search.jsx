import React, { useState } from "react";

const Search = () => {
  const [searh, setSearch] = useState("");
  return (
    <form method="post" className="w-[300px] md:w-[500px] relative text-white ">
      <div className="relative">
        <input
          type="search"
          spellCheck={true}
          placeholder="Search...."
          className="w-full rounded-full p-4 bg-slate-600 ring-1 ring-inset ring-black placeholder:text-black"
          onChange={(e) => setSearch(e.target.value)}
          value={searh}
        />
        <button
          className="relative text-center mt-2 w-full md:searchbtn p-3 rounded-full bg-gradient-to-r from-orange-400  to-orange-600 text-base "
          value={searh}
        >
          Start Promotion
        </button>
      </div>
    </form>
  );
};

export default Search;
