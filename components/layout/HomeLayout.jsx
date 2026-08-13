import React from "react";

export default function HomeLayout({ children }) {
  return (
    <main className="w-full overflow-hidden">
      {children}
    </main>
  );
}