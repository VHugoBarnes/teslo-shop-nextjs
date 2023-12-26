import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: {
    id: string
  }
};

export default function CategoryPage({ params }: Props) {
  const { id } = params;

  if (!["men", "women"].includes(id)) {
    notFound();
  }

  return (
    <div>
      <h1>Category Page {id}</h1>
    </div>
  );
};