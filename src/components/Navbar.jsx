import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <div className="absolute top-0 w-full z-10 text-white">
      <div className="w-[95%] mx-auto flex items-center justify-between py-4">
        <div className="flex-[1]">
          <Link className="text-3xl font-semibold" href="/">
            Shah.
          </Link>
        </div>
        <div className="flex-[1] flex items-center justify-end gap-6">
          <Link className="uppercase text-sm" href="/about">
            about
          </Link>
          <Link className="uppercase text-sm" href="/contact">
            contact
          </Link>
        </div>
      </div>
    </div>
  );
};
