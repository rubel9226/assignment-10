"use client";

import { BiBadgeCheck } from "react-icons/bi";
import { BsRocket, BsShieldCheck } from "react-icons/bs";
import { FaBookOpen, FaCrown } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi"; 

const features = [
  {
    title: "Unlimited Lessons",
    description: "Create and manage unlimited life lessons without any restriction.",
    icon: FaBookOpen,
  },
  {
    title: "Premium Content",
    description: "Unlock premium lessons shared by other premium members.",
    icon: FaCrown,
  },
  {
    title: "Verified Premium Badge",
    description: "Stand out with an exclusive premium badge on your profile.",
    icon: BiBadgeCheck,
  },
  {
    title: "Priority Listing",
    description: "Your public lessons receive better visibility across the platform.",
    icon: BsRocket,
  },
  {
    title: "Ad-Free Experience",
    description: "Enjoy a distraction-free experience with zero advertisements.",
    icon: BsShieldCheck,
  },
  {
    title: "Lifetime Access",
    description: "Pay once and enjoy all premium benefits forever.",
    icon: HiSparkles,
  },
];

export default function PremiumFeatures() {
    return (
        <section> 
            <div className="text-center mb-12"> 
                <h2 className="text-4xl font-bold">
                    Premium Benefits
                </h2> 
                <p className="mt-3 text-base-content/70">
                    Everything you'll unlock after upgrading.
                </p> 
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                {features.map((feature) => { 
                    const Icon = feature.icon; 
                    return ( 
                        <div key={feature.title} className="rounded-2xl border bg-base-100 p-8 shadow hover:shadow-xl duration-300" > 
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6"> 
                                <Icon
                                    size={32}
                                    className="text-primary"
                                /> 
                            </div> 
                            <h3 className="text-2xl font-bold mb-3">
                                {feature.title}
                            </h3> 
                            <p className="text-base-content/70 leading-7">
                                {feature.description}
                            </p> 
                        </div> 
                    ); 
                })} 
            </div> 
        </section>
    );
}