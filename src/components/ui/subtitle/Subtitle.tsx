import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
};

export function Subtitle({ children, className }: Props) {
  return (
    <h3 className={`antialiased text-xl font-semibold ${className}`}>
      {children}
    </h3>
  );
};