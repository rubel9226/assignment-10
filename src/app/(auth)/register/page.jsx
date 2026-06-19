"use client";

import { useState } from "react";
import Link from "next/link";

import {
  FaGoogle,
  FaEye,
  FaEyeSlash,
  FaBookOpen,
} from "react-icons/fa";

export default function RegisterPage() {
  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      // Better Auth Register Logic

      console.log("Register Success");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex justify-center min-h-screen bg-[#051424] text-white">

      {/* Right Side */}
      <section className="w-full md:w-1/2 flex items-center justify-center px-6 py-10">

        <div className="w-full max-w-md">

          <h2 className="text-3xl font-bold">
            Create Account
          </h2>

          <p className="text-slate-400 mt-2">
            Start your journey today.
          </p>

          {/* Google */}
          <button
            className=" bg-white text-black border-[#e5e5e5] w-full h-14 mt-8 rounded-xl border transition flex items-center justify-center gap-3 cursor-pointer"
          >
            {/* <FaGoogle /> */}
            <svg aria-label="Google logo" width="22" height="22" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>

            Continue with Google
          </button>

          {/* Divider */}

          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-white/10" />

            <span className="text-sm text-slate-500">
              OR
            </span>

            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Form */}

          <form
            onSubmit={handleRegister}
            className="space-y-5"
          >

            {/* Name */}

            <div>
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full h-14 px-4 rounded-xl bg-slate-900 border border-slate-700 focus:border-indigo-500 outline-none"
              />
            </div>

            {/* Email */}

            <div>
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full h-14 px-4 rounded-xl bg-slate-900 border border-slate-700 focus:border-indigo-500 outline-none"
              />
            </div>

            {/* Photo URL */}

            <div>
              <input
                type="url"
                placeholder="Photo URL"
                required
                className="w-full h-14 px-4 rounded-xl bg-slate-900 border border-slate-700 focus:border-indigo-500 outline-none"
              />
            </div>

            {/* Password */}

            <div className="relative">

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Password"
                required
                className="w-full h-14 px-4 rounded-xl bg-slate-900 border border-slate-700 focus:border-indigo-500 outline-none"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                {showPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>

            </div>

            {/* Password Rules */}

            <div className="text-xs text-slate-400 space-y-1">
              <p>
                • At least 6 characters
              </p>

              <p>
                • One uppercase letter
              </p>

              <p>
                • One lowercase letter
              </p>
            </div>

            {/* Submit */}

            <button
              disabled={loading}
              className="w-full h-14 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-500 font-semibold hover:opacity-90 transition"
            >
              {loading
                ? "Creating Account..."
                : "Create Account"}
            </button>

          </form>

          {/* Login */}

          <p className="text-center mt-8 text-slate-400">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-indigo-400 hover:text-indigo-300"
            >
              Login
            </Link>
          </p>

        </div>

      </section>

    </main>
  );
}