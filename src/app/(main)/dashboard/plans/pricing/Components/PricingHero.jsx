"use client";

import { FaCrown } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi"; 

export default function PricingHero() {
    return (
        <section className="relative overflow-hidden rounded-3xl bg-linear-to-r from-primary via-secondary to-accent text-white p-10 md:p-16">

            <div className="absolute -top-10 -right-10 w-52 h-52 rounded-full bg-white/10 blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-52 h-52 rounded-full bg-white/10 blur-3xl"></div>

            <div className="relative z-10 max-w-3xl"> 
                <div className="badge badge-warning badge-lg gap-2 mb-6">
                    <HiSparkles size={16} />
                    Lifetime Premium Plan
                </div>

                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                    Unlock Your Full
                    <span className="block">
                        Learning Potential
                    </span>
                </h1>

                <p className="mt-6 text-lg text-white/90 leading-8">
                    Upgrade to Premium and enjoy unlimited lesson creation,
                    premium content access, priority visibility, verified badge,
                    and an ad-free experience forever.
                </p>

                <div className="mt-8 flex flex-wrap gap-4"> 
                    <div className="badge badge-outline border-white text-white badge-lg">
                        One-Time Payment
                    </div> 
                    <div className="badge badge-outline border-white text-white badge-lg">
                        Lifetime Access
                    </div> 
                    <div className="badge badge-outline border-white text-white badge-lg">
                        No Subscription
                    </div> 
                </div>

                <div className="mt-10 flex items-center gap-4"> 
                    <div className="text-5xl font-black">
                        ৳1500
                    </div> 
                    <div>
                        <p className="text-xl font-semibold"> One-Time Payment </p> 
                        <p className="text-white/80"> Pay once • Enjoy forever </p>
                    </div> 
                </div>

                <button className="btn btn-warning btn-lg mt-10 rounded-full">
                    <FaCrown size={20} />
                    Upgrade to Premium
                </button> 
            </div> 
        </section>
    );
}