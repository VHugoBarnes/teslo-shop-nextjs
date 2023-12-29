"use client";

import { logout } from "@/actions";
import { useUiStore } from "@/store";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { IoCloseOutline, IoLogInOutline, IoLogOutOutline, IoPeopleOutline, IoPersonOutline, IoSearchOutline, IoShirtOutline, IoTicketOutline } from "react-icons/io5";

export function Sidebar() {
  const isSideMenuOpen = useUiStore(state => state.isSideMenuOpen);
  const closeSideMenu = useUiStore(state => state.closeSideMenu);

  const { data: session } = useSession();
  const isAuthenticated = !!session?.user;

  return (
    <div>
      {/* Background */}
      {
        isSideMenuOpen && (
          <div
            className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"
          />
        )
      }

      {/* Blur */}
      {
        isSideMenuOpen && (
          <div
            onClick={closeSideMenu}
            className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
          />
        )
      }

      {/* Sidemenu */}
      <nav className={
        clsx(
          "fixed p-5 right-0 top-0 w-9/12 md:w-6/12 lg:w-3/12 h-screen bg-white z-20 shadow-2xl transform transition-all duration-200",
          {
            "translate-x-full": !isSideMenuOpen
          }
        )
      }>
        <IoCloseOutline
          size={50}
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => {
            closeSideMenu();
          }}
        />

        {/* Input Search */}
        <div className="relative mt-14">
          <IoSearchOutline
            size={20}
            className="absolute top-2 left-2"
          />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Menu */}
        {
          isAuthenticated && (
            <>
              <Link
                href="/profile"
                onClick={() => closeSideMenu()}
                className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all space-x-3"
              >
                <IoPersonOutline size={30} />
                <span className="text-xl">Profile</span>
              </Link>

              <Link
                href="/"
                className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all space-x-3"
              >
                <IoTicketOutline size={30} />
                <span className="text-xl">Orders</span>
              </Link>
            </>
          )
        }

        {
          !isAuthenticated && (
            <Link
              href="/auth/login"
              onClick={() => closeSideMenu()}
              className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all space-x-3"
            >
              <IoLogInOutline size={30} />
              <span className="text-xl">Login</span>
            </Link>
          )
        }

        {
          isAuthenticated && (
            <button
              className="w-full flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all space-x-3"
              onClick={() => { logout(); }}
            >
              <IoLogOutOutline size={30} />
              <span className="text-xl">Logout</span>
            </button>
          )
        }

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 my-10" />

        {
          session?.user.role === "admin" && (
            <>
              <Link
                href="/"
                className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all space-x-3"
              >
                <IoShirtOutline size={30} />
                <span className="text-xl">Products</span>
              </Link>

              <Link
                href="/"
                className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all space-x-3"
              >
                <IoTicketOutline size={30} />
                <span className="text-xl">Orders</span>
              </Link>

              <Link
                href="/"
                className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all space-x-3"
              >
                <IoPeopleOutline size={30} />
                <span className="text-xl">Users</span>
              </Link>
            </>
          )
        }
      </nav>
    </div>
  );
};