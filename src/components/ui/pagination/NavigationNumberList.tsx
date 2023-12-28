"use client";

import React from "react";
import { NavigationItem } from "./NavigationItem";
import { useRouter, useSearchParams } from "next/navigation";
interface Props {
  totalPages: number;
  currentPage: number;
  path: string;
}

const MAX_AMOUNT_TO_DISPLAY = 5;
const getNewSet = ({ listOfPages, currentSet }: { listOfPages: number[], currentSet: number }) => {
  const x = listOfPages.slice(currentSet * MAX_AMOUNT_TO_DISPLAY, (currentSet * MAX_AMOUNT_TO_DISPLAY) + MAX_AMOUNT_TO_DISPLAY);
  return x;
};

export const NavigationNumberList = ({ totalPages, currentPage, path }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const pages = Array(totalPages).fill(0).map((_, i) => (i + 1));
  const MAX_SETS = Math.ceil(totalPages / MAX_AMOUNT_TO_DISPLAY);
  let currentSetNumber = Math.ceil(currentPage / MAX_AMOUNT_TO_DISPLAY) - 1;
  const pageSetToDisplay = getNewSet({ listOfPages: pages, currentSet: currentSetNumber });

  const createQueryString = (name: string, value: string): string => {
    const params = new URLSearchParams(searchParams);
    params.set(name, value);

    return params.toString();
  };

  const changeCurrentSet = (newPage: number) => {
    router.push(`${path}?${createQueryString("page", newPage.toString())}`);
  };

  return (
    <>
      {
        currentSetNumber > 0 && (
          <NavigationItem
            isActive={false}
            onClick={() => {
              changeCurrentSet(pageSetToDisplay[0] - 1);
            }}
          >
            ...
          </NavigationItem>
        )
      }

      {
        pageSetToDisplay.map((i) => (
          <NavigationItem
            key={i}
            isActive={i === currentPage}
            href={`${path}?${createQueryString("page", i.toString())}`}
          >
            {i}
          </NavigationItem>
        ))
      }

      {
        MAX_SETS > (currentSetNumber + 1) && (
          <NavigationItem
            isActive={false}
            onClick={() => {
              changeCurrentSet(pageSetToDisplay[pageSetToDisplay.length - 1] + 1);
            }}
          >
            ...
          </NavigationItem>
        )
      }
    </>
  );
};
