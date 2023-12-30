"use server";
import { prisma } from "@/lib/prisma";

export const getCountries = async () => {
  try {
    const countries = await prisma.country.findMany({ orderBy: { name: "asc" } });

    return {
      ok: true,
      data: {
        countries
      },
      message: "[success]"
    };
  } catch (error) {
    console.error(error);
    return {
      ok: false,
      data: {
        countries: []
      },
      message: "[server-error]"
    };
  }
};