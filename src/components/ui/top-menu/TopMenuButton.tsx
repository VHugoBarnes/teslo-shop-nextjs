"use client";

import { useUiStore } from "@/store";
import React from "react";

export function TopMenuButton() {
  const openSideMenu = useUiStore(state => state.openSideMenu);

  return (
    <button
      onClick={() => {
        openSideMenu();
      }}
      className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
    >
      Menu
    </button>
  );
};