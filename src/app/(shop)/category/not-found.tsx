import Link from "next/link";
import React from "react";

export default function NotFoundCategory() {
  return (
    <div>
      <h1>Not found</h1>
      <Link href="/">Go Back</Link>
    </div>
  );
};