"use server";

import { signIn } from "@/auth.config";
import { AuthError } from "next-auth";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn("credentials", {
      redirect: false,
      ...Object.fromEntries(formData)
    });

    return "[success]";
  } catch (error) {
    console.log(error);
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "[invalid-credentials]";
        default:
          return "[server-error]";
      }
    }
    throw error;
  }
}