"use client";

import { login, registerUser } from "@/actions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  fullName: string;
  email: string;
  password: string;
}

export function RegisterForm() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = React.useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setErrorMessage("");
    const response = await registerUser(data.fullName, data.email, data.password);

    if (!response.ok) {
      setErrorMessage(response.message);
      return;
    }

    const loginResponse = await login(data.email.toLowerCase(), data.password);

    if (loginResponse.ok) {
      window.location.replace("/");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-4"
    >
      <div className="flex flex-col space-y-2">
        <label htmlFor="full_name">Full name</label>
        <input
          className="px-5 py-2 border bg-gray-200 rounded"
          type="text"
          {...register("fullName", { required: true })}
        />
        {errors.fullName && <span className="text-red-500">This field is required</span>}
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="email">Email</label>
        <input
          className="px-5 py-2 border bg-gray-200 rounded"
          type="email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <span className="text-red-500">This field is required</span>}
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="password">Password</label>
        <input
          className="px-5 py-2 border bg-gray-200 rounded"
          type="password"
          {...register("password", { required: true })}
        />
        {errors.password && <span className="text-red-500">This field is required</span>}
      </div>

      {errorMessage && <span className="text-red-500">An error ocurred</span>}
      <button
        className="btn-primary"
      >
        Create Account
      </button>

      {/* divisor l ine */}
      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">Or</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link
        href="/auth/login"
        className="btn-secondary text-center">
        Login
      </Link>
    </form>
  );
};