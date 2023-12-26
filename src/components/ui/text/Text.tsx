import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
};

export function Text({ children, className }: Props) {
  return (
    <p className={`antialiased ${className}`}>
      {children}
    </p>
  );
};