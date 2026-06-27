"use client";

import Link from "next/link";
import { BiHomeAlt, BiSearchAlt } from "react-icons/bi";

export default function NotFound() {
  return (
    <>
    
        <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-6">
            <div className="max-w-3xl w-full text-center">
                
                <h1 className="text-[120px] md:text-[180px] font-black leading-none bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    404
                </h1>
                
                <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
                    Page Not Found!
                </h2>

                <p className="text-slate-400 mt-5 max-w-xl mx-auto text-lg leading-8">
                    The page you're looking for doesn't exist or may have been moved.
                    Let's get you back to discovering meaningful life lessons.
                </p>
                
                <div className="mt-12 flex justify-center">
                    <div className="relative">

                        <div className="w-56 h-56 rounded-full bg-indigo-600/20 blur-3xl absolute inset-0"></div>

                        <div className="relative w-44 h-44 rounded-full border-4 border-indigo-500 flex items-center justify-center bg-slate-900 shadow-2xl">
                            <BiSearchAlt className="text-7xl text-indigo-400" />
                        </div>

                    </div>
                </div>
                
                <div className="mt-14 flex flex-wrap justify-center gap-5">
                    <Link
                        href="/"
                        className="btn btn-primary rounded-full px-8"
                    >
                        <BiHomeAlt size={22} />
                        Back Home
                    </Link> 
                    <Link
                        href="/dashboard/public-lessons"
                        className="btn btn-outline rounded-full px-8"
                    >
                        Browse Lessons
                    </Link> 
                </div>
                
                <p className="mt-16 text-slate-500 text-sm">
                    Error Code • 404 • Digital Life Lessons
                </p> 
            </div>
        </section>
    </>
  );
}