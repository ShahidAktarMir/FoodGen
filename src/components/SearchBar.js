import { useState } from "react";

const SearchBar = ({ keyword, onChange }) => {
  return (
    <>
      <div className="flex justify-center mt-10 mb-10">
        <div>
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-100 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              value={keyword}
              type="search"
              id="default-search"
              onChange={(e) => onChange(e.target.value)}
              class="block w-96 p-4 pl-10 text-sm border border-gray-300 rounded-lg bg-gray-50   dark:placeholder-gray-400 dark:text-gray-800  "
              placeholder="Search by names"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
