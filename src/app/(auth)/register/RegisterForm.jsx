'use client';

import React, { useState } from 'react';
import { useFormState } from 'react-dom';
import {
  FaGoogle,
  FaEye,
  FaEyeSlash,
  FaBookOpen,
} from "react-icons/fa";

const RegisterForm = () => {
       
    const [showPassword, setShowPassword] = useState(false);

    const [loading, setLoading] = useFormState(false);

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
        <div>
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
        </div>
    );
};

export default RegisterForm;