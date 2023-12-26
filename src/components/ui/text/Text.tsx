import React from "react";

export function Text({ children }: { children: React.ReactNode }) {
  return (
    <p className="antialiased">
      {children}
    </p>
  );
};