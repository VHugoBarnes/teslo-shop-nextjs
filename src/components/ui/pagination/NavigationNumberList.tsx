"use client";

import React from "react";

export const NavigationNumberList = ({ totalPages, currentPage, path }: { totalPages: number; currentPage: number; path: string }) => {
  return (
    <>
      {Array(totalPages).fill(0).map((_, i) => (
        <li
          className={`page-item ${i + 1 === currentPage ? "active" : ""}`}
          key={i}
        >
          <a
            className={`${i + 1 === currentPage ? "text-white bg-blue-500 hover:bg-blue-600" : "text-gray-800 hover:text-gray-800 hover:bg-gray-200"} page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 focus:shadow-none`}
            href={`${path}?page=${i + 1}`}
          >
            {i + 1}
          </a>
        </li>
      ))}
    </>
  );
};
