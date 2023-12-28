"use client";

import React from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { NavigationButton } from "./NavigationButton";
import { NavigationNumberList } from "./NavigationNumberList";
import { usePathname } from "next/navigation";

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
          <NavigationButton condition={currentPage === 1} href={`${path}?page=${currentPage - 1}`}>
            <IoChevronBackOutline size={20} />
          </NavigationButton>

          <NavigationNumberList currentPage={currentPage} totalPages={totalPages} path={path} />

          <NavigationButton condition={currentPage === totalPages} href={`${path}?page=${currentPage + 1}`}>
            <IoChevronForwardOutline size={20} />
          </NavigationButton>
        </ul>
      </nav>
    </div>
  );
};