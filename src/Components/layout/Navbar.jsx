"use client";

// import { Menu, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BiMenu, BiSearch } from "react-icons/bi";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-slate-950/70">
      <div className="container mx-auto h-16 px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <BiMenu className="text-indigo-400 md:hidden" />
          <Link href='/' className="text-xl md:text-2xl font-bold text-indigo-300">
            Digital Life Lessons
          </Link>
        </div>

        <nav className="hidden md:flex gap-6">
          <a href="#">Dashboard</a>
          <a href="#">My Lessons</a>
          <a href="#">Favorites</a>
        </nav>

        <div className="flex items-center gap-3">
          <BiSearch size={20} />

          <Image
            src="https://res.cloudinary.com/ddryxwdtj/image/upload/v1781801399/0c93d9eb63e70df9dabb5d2aaa80e031_nrprmd.png"
            alt="profile"
            width={36}
            height={36}
            className="rounded-full bg-blue-500 border border-indigo-800"
            unoptimized
          />
        </div>
      </div>
    </header>
  );
}