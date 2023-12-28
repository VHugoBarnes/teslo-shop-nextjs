"use client";

import Link from "next/link";
import React from "react";

interface Props {
  isActive: boolean;
  href?: string;
  children: React.ReactNode;
  onClick?: Function
}

export const NavigationItem = ({ isActive, href, children, onClick }: Props) => {
  return (
    <li className={`page-item ${isActive ? "active" : ""}`}>
      {
        href && (
          <Link
            className={`${isActive ? "text-white bg-blue-500 hover:bg-blue-600" : "text-gray-800 hover:text-gray-800 hover:bg-gray-200"} page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 focus:shadow-none`}
            href={href}
          >
            {children}
          </Link>
        )
      }
      {
        onClick && (
          <span
            onClick={() => onClick()}
            className={`${isActive ? "text-white bg-blue-500 hover:bg-blue-600" : "text-gray-800 hover:text-gray-800 hover:bg-gray-200"} page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 focus:shadow-none cursor-pointer`}
          >
            {children}
          </span>
        )
      }
    </li>
  );
};
