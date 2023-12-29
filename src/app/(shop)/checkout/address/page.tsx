import { Subtitle, Title } from "@/components";
import Link from "next/link";
import React from "react";

export default function AddressPage() {
  return (
    <div className="flex flex-col sm:justify-center sm:items-center mb-72 px-2 sm:px-10">

      <div className="w-full md:w-9/12 flex flex-col justify-center text-left space-y-6">

        <Title>Address</Title>
        <Subtitle>Delivery address</Subtitle>

        <div className="grid grid-cols-1 gap-2 sm:gap-5 sm:grid-cols-2">
          <div className="flex flex-col mb-2">
            <span>First name</span>
            <input
              type="text"
              className="p-2 border rounded-md bg-gray-200"
            />
          </div>

          <div className="flex flex-col mb-2">
            <span>Last name</span>
            <input
              type="text"
              className="p-2 border rounded-md bg-gray-200"
            />
          </div>

          <div className="flex flex-col mb-2">
            <span>Address</span>
            <input
              type="text"
              className="p-2 border rounded-md bg-gray-200"
            />
          </div>

          <div className="flex flex-col mb-2">
            <span>Address #2 (Optional)</span>
            <input
              type="text"
              className="p-2 border rounded-md bg-gray-200"
            />
          </div>

          <div className="flex flex-col mb-2">
            <span>Postal Code</span>
            <input
              type="text"
              className="p-2 border rounded-md bg-gray-200"
            />
          </div>

          <div className="flex flex-col mb-2">
            <span>City</span>
            <input
              type="text"
              className="p-2 border rounded-md bg-gray-200"
            />
          </div>

          <div className="flex flex-col mb-2">
            <span>Country</span>
            <select
              className="p-2 border rounded-md bg-gray-200"
            >
              <option value="">[ Select ]</option>
              <option value="MX">Mexico</option>
            </select>
          </div>

          <div className="flex flex-col mb-2">
            <span>Phone number</span>
            <input
              type="text"
              className="p-2 border rounded-md bg-gray-200"
            />
          </div>

          <div className="flex flex-col mb-2 sm:mt-10">
            <Link
              href='/checkout'
              className="btn-primary flex w-full sm:w-1/2 justify-center ">
              Next
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
};