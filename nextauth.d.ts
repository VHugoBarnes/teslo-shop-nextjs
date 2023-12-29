import NextAuth, { DefaultSession } from "next-auth";

// Here we just extend the user session type to add fields from the user model
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      emailVerified?: Date;
      role: "admin" | "user";
      image?: string;
    } & DefaultSession["user"]
  }
}