'use client';


import { signIn } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { BsArrowRight, BsEye } from 'react-icons/bs';
import { FiEyeOff } from 'react-icons/fi';
import { toast } from 'react-toastify';

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    

    const handleLogin = async (e) => {
        e.preventDefault();

        setLoading(true);
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({email, password})


        try { 
            const result = await signIn.email({
                email,
                password,
                callbackURL: "/",
            });

            console.log(result);


            if (!result.error) {
                router.push("/");
                router.refresh();
            } else {
                toast.error(result.error.message);
            }

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div>
            <form
                onSubmit={handleLogin}
                className="space-y-5"
                >

                <div>
                    <input
                        type="email"
                        name='email'
                        placeholder="Email Address"
                        className="w-full h-14 px-4 rounded-xl bg-slate-900 border border-slate-700 focus:border-indigo-400 outline-none"
                        required
                    />
                </div>

                <div className="relative">
                    <input
                        name='password'
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className="w-full h-14 px-4 rounded-xl bg-slate-900 border border-slate-700 focus:border-indigo-400 outline-none"
                        required
                    />

                    <button type="button" onClick={() => setShowPassword(!showPassword) } className="absolute right-4 top-1/2 -translate-y-1/2" >
                        {showPassword ? (
                            <FiEyeOff size={20} />
                        ) : (
                            <BsEye size={20} />
                        )}
                    </button>
                </div>

                <div className="flex justify-between items-center text-sm">

                    <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Remember me
                    </label>

                    <button
                    type="button"
                    className="text-indigo-400"
                    >
                    Forgot Password?
                    </button>

                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-14 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-300 text-black font-semibold flex items-center justify-center gap-2"
                >
                    {loading ? (
                    "Authenticating..."
                    ) : (
                    <>
                        Sign In
                        <BsArrowRight size={18} />
                    </>
                    )}
                </button>

            </form>
        </div>
    );
};

export default LoginForm;