"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

interface Props {
  totalPages: number;
  currentPage: number;
};

export function Pagination({ totalPages, currentPage }: Props) {
  const path = usePathname();

  return (
    <div className="flex justify-center">
      <nav aria-label="Page navigation example">
        <ul className="flex list-style-none items-center">
          <li className="page-item disabled"><a
            className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 text-gray-500 pointer-events-none focus:shadow-none"
            href="#" aria-disabled="true"><IoChevronBackOutline size={20} /></a>
          </li>

          {
            Array(totalPages).fill(0).map((_, i) => (
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
            ))
          }

          <li className="page-item"><a
            className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
            href="#"><IoChevronForwardOutline size={20} /></a>
          </li>
        </ul>
      </nav>
    </div>
  );
};