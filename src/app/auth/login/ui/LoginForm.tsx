"use client";

import React from "react";
import ReactDOM from "react-dom";
import Link from "next/link";
import { authenticate } from "@/actions";
import { IoInformationOutline } from "react-icons/io5";
import clsx from "clsx";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const [state, dispatch] = ReactDOM.useFormState(authenticate, undefined);
  const router = useRouter();

  React.useEffect(() => {
    if (state === "[success]") {
      router.replace("/");
    }
  }, [state]);

  return (
    <form action={dispatch} className="flex flex-col space-y-2">
      <label htmlFor="email">Email</label>
      <input
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        type="email"
        name="email"
      />

      <label htmlFor="password">Password</label>
      <input
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        type="password"
        name="password"
      />

      <div
        className="flex h-8 items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
      >
        {state === "[invalid-credentials]" && (
          <div className="flex">
            <IoInformationOutline className="h-5 w-5 text-red-500" />
            <p className="text-sm text-red-500">{state}</p>
          </div>
        )}
      </div>

      <LoginButton />

      {/* divisor line */}
      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">Or</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link
        href="/auth/new-account"
        className="btn-secondary text-center">
        Create new account
      </Link>
    </form>
  );
};

function LoginButton() {
  const { pending } = ReactDOM.useFormStatus();

  return (
    <button
      className={clsx({
        "btn-primary": !pending,
        "bg-gray-600 text-white py-2 px-4 rounded transition-all": pending
      })}
      disabled={pending}
      type="submit"
    >
      Login
    </button>
  );
}