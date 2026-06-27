'use client';


import { authClient, signIn } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { BsArrowRight, BsEye } from 'react-icons/bs';
import { FiEyeOff } from 'react-icons/fi';
import { toast } from 'react-toastify';

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLoginGoogle =async () => {
        const {data, error} = await authClient.signIn.social({
            provider: 'google'
        }); 
    };    

    const handleLogin = async (e) => {
        e.preventDefault();

        setLoading(true);
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;


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
            {/* Google Login */} 
            <button onClick={handleLoginGoogle} className="w-full h-14 mt-8 rounded-xl btn bg-white text-black border-[#e5e5e5]">
                <svg aria-label="Google logo" width="22" height="22" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                Login with Google
            </button>

            <div className="flex items-center gap-4 my-8">
                <div className="flex-1 border-t border-white/10" />
                <span className="text-sm text-slate-400">
                    Or login with email
                </span>
                <div className="flex-1 border-t border-white/10" />
            </div>
            <form onSubmit={handleLogin} className="space-y-5" >
                <div>
                    <input type="email" name='email' placeholder="Email Address" className="w-full h-14 px-4 rounded-xl bg-slate-900 border border-slate-700 focus:border-indigo-400 outline-none" required />
                </div>
                <div className="relative">
                    <input name='password' type={showPassword ? "text" : "password"} placeholder="Password" className="w-full h-14 px-4 rounded-xl bg-slate-900 border border-slate-700 focus:border-indigo-400 outline-none" required />
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
                    <button type="button" className="text-indigo-400" >
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