"use client";
import React from "react";

export const NavigationButton = ({ children, condition, href }: { children: React.ReactNode; condition: boolean; href: string; }) => {
  return (
    <li className={`page-item ${condition ? "disabled pointer-events-none" : ""}`}>
      <a
        className={`${condition ? "text-gray-400" : "bg-gray-200 text-gray-700 hover:text-gray-800"} page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 focus:shadow-none`}
        href={href}
        aria-disabled={condition}
      >
        {children}
      </a>
    </li>
  );
};
