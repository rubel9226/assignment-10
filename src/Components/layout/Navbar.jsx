"use client";

import { signOut, useSession } from "@/lib/auth-client";
// import { Menu, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BiMenu, BiSearch } from "react-icons/bi";
import { useUser } from "./AuthContext";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const {user} = useUser();
  const pathname = usePathname();
 
  const handleLogout = async () => {
    try {
      await signOut({
        fetchOptions: {
          onSuccess: () => {
            window.location.href = "/";
          },
        },
      });
    } catch (error) {
      console.log(error)
    }
  }
   
  return (
    <header className="max-lg:collapse sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-slate-950/70">
      <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
  <div className="collapse-content lg:hidden z-1">
    <ul className="menu w-full space-y-1"> 
      
      <li className=''>
        <Link href="/" className={` ${pathname === '/' ? "text-indigo-400 border-b-2 border-indigo-400" : "hover:text-indigo-300" }`}>Home</Link>
      </li>
      <li>
        <Link href="/add-lessons"  className={` ${pathname === '/add-lessons' ? "text-indigo-400 border-b-2 border-indigo-400" : "hover:text-indigo-300" }`}>Add Lessons</Link>
      </li>
      <li>
        <Link href="/my-lessons"  className={` ${pathname === '/my-lessons' ? "text-indigo-400 border-b-2 border-indigo-400" : "hover:text-indigo-300" }`}>My Lessons</Link>
      </li>
      <li>
        <Link href="/public-lessons"  className={` ${pathname === '/public-lessons' ? "text-indigo-400 border-b-2 border-indigo-400" : "hover:text-indigo-300" }`}>Public Lessons</Link>
      </li> 
        {user && !user?.isPremium && (
          <li>
            <Link
              href="/pricing"
              className={` ${pathname === '/pricing' ? "text-indigo-400 border-b-2 border-indigo-400" : "hover:text-indigo-300" }`}
            >
              Upgrade
            </Link> 
          </li>
        )}    
    </ul>
  </div>      



      <div className="container mx-auto h-16 px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          
          <div className="text-indigo-400 lg:hidden">
              <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden p-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
          </div> 

          <Link href='/' className="text-xl md:text-2xl font-bold text-indigo-300">
            Digital Life Lessons
          </Link>
        </div>

        <nav className="hidden lg:flex gap-6">
          <Link href="/" className={` ${pathname === '/' ? "text-indigo-400 border-b-2 border-indigo-400" : "hover:text-indigo-300" }`}>Home</Link>
          <Link href="/add-lessons"  className={` ${pathname === '/add-lessons' ? "text-indigo-400 border-b-2 border-indigo-400" : "hover:text-indigo-300" }`}>Add Lessons</Link>
          <Link href="/my-lessons"  className={` ${pathname === '/my-lessons' ? "text-indigo-400 border-b-2 border-indigo-400" : "hover:text-indigo-300" }`}>My Lessons</Link>
          <Link href="/public-lessons"  className={` ${pathname === '/public-lessons' ? "text-indigo-400 border-b-2 border-indigo-400" : "hover:text-indigo-300" }`}>Public Lessons</Link>
          {user && !user?.isPremium && (
            <Link
              href="/pricing"
               className={` ${pathname === '/pricing' ? "text-indigo-400 border-b-2 border-indigo-400" : "hover:text-indigo-300" }`}
            >
              Upgrade
            </Link>
          )} 
        </nav>

        {
          user ? (
            <div className="flex items-center gap-3">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="cursor-pointer rounded-full"
                >
                  <Image
                    src={user?.image || 'https://thumbs.dreamstime.com/z/default-profile-picture-icon-high-resolution-high-resolution-default-profile-picture-icon-symbolizing-no-display-picture-360167031.jpg' }
                    alt="profile"
                    width={36}
                    height={36}
                    className="rounded-full aspect-square"
                    unoptimized
                  />
                </div>

                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-1000 w-64 p-2 shadow-lg border "
                >
                  <li className="pointer-events-none border-b pb-2 mb-2">
                    <div className="flex flex-col text-center">
                      <span className="font-semibold text-base">
                        {user.name}
                      </span>
                      <span className="text-xs opacity-70">
                        {user.email}
                      </span>
                    </div>
                  </li>

                  <li>
                    <Link href="/dashboard/profile" className="">
                      Profile
                    </Link>
                  </li>

                  <li>
                    <Link href="/dashboard">
                      Dashboard
                    </Link>
                  </li>

                  <li>
                    <button onClick={ handleLogout} className="text-red-500" >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div> 
          )
          : (
            <div className="flex items-center gap-2">
              <Link
                 href="/login"
                className="btn btn-outline btn-sm"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="btn btn-primary btn-sm"
              >
                Signup
              </Link>
            </div>
          )
        } 
      </div> 
    </header>
  );
}