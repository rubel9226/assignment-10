"use client";

import { FaCrown } from "react-icons/fa"; 
import UpgradeButton from "./UpgradeButton";
import { BsCheckCircle } from "react-icons/bs";

const features = [
    "Lifetime Premium Access",
    "Unlimited Lesson Creation",
    "Create Premium Lessons",
    "Access Premium Lessons",
    "Priority Listing",
    "Verified Premium Badge",
    "No Advertisements",
    "Priority Future Features",
];

export default function PremiumPriceCard() {
    return (
        <section className="flex justify-center">
            <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-primary/20 bg-base-100 shadow-2xl">

                <div className="absolute top-0 right-0">
                    <div className="bg-primary text-primary-content px-10 py-2 rotate-45 translate-x-8 -translate-y-2 font-semibold">
                        BEST VALUE
                    </div>
                </div>

                <div className="grid lg:grid-cols-2">  
                    <div className="p-10">

                        <div className="flex items-center gap-3 mb-6"> 
                            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                                <FaCrown className="text-primary" size={30} />
                            </div> 
                            <div> 
                                <h2 className="text-3xl font-bold">
                                    Premium Plan
                                </h2> 
                                <p className="text-base-content/70">
                                    One payment • Lifetime access
                                </p> 
                            </div> 
                        </div> 

                        <div className="mb-8"> 
                            <span className="text-6xl font-black">
                                ৳1500
                            </span> 
                            <span className="text-lg text-base-content/60 ml-2">
                                / Lifetime
                            </span> 
                        </div>

                        <UpgradeButton />

                        <p className="mt-5 text-sm text-base-content/60">
                            Secure payment powered by Stripe.
                        </p>

                    </div>
                    
                    <div className="bg-base-200 p-10">

                        <h3 className="text-2xl font-bold mb-8">
                            Everything Included
                        </h3>

                        <div className="space-y-5"> 
                            {features.map((feature) => (
                                <div key={feature} className="flex items-center gap-4"  >
                                    <BsCheckCircle size={22} className="text-success flex-shrink-0" /> 
                                    <span className="text-lg">
                                        {feature}
                                    </span>
                                </div>
                            ))}

                        </div>

                    </div> 
                </div>
            </div>
        </section>
    );
}