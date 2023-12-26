import React from "react";

export function Subtitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="antialiased text-xl font-semibold">
      {children}
    </h3>
  );
};