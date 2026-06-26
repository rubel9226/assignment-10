"use client";

import { BiCheckCircle, BiCross } from "react-icons/bi"; 

const plans = [
        {
            feature: "Create Free Lessons",
            free: true,
            premium: true,
        },
        {
            feature: "Create Premium Lessons",
            free: false,
            premium: true,
        },
        {
            feature: "Access Premium Content",
            free: false,
            premium: true,
        },
        {
            feature: "Unlimited Lesson Creation",
            free: false,
            premium: true,
        },
        {
            feature: "Priority Listing",
            free: false,
            premium: true,
        },
        {
            feature: "Premium Badge",
            free: false,
            premium: true,
        },
        {
            feature: "Ad Free Experience",
            free: false,
            premium: true,
        },
        {
            feature: "Lifetime Access",
            free: false,
            premium: true,
        },
];

export default function PlanComparisonTable() {
    return (
        <section>

            <div className="text-center mb-10"> 
                <h2 className="text-4xl font-bold">
                    Free vs Premium
                </h2> 
                <p className="mt-3 text-base-content/70">
                    Compare both plans and choose what's best for you.
                </p> 
            </div>

            <div className="overflow-x-auto rounded-2xl border bg-base-100 shadow"> 
                <table className="table table-zebra"> 
                    <thead> 
                        <tr> 
                            <th className="text-lg">Features</th> 
                            <th className="text-center text-error">
                                Free
                            </th> 
                            <th className="text-center text-primary">
                                Premium ⭐
                            </th> 
                        </tr> 
                    </thead>

                    <tbody> 
                        {plans.map((item) => ( 
                        <tr key={item.feature}>

                            <td className="font-medium">
                                {item.feature}
                            </td>

                            <td className="text-center">

                                {item.free ? (
                                        <BiCheckCircle className="mx-auto text-success" />
                                    ) : (
                                        <BiCross className="mx-auto text-error" />
                                )}

                            </td>

                            <td className="text-center"> 
                                {item.premium ? (
                                    <BiCheckCircle className="mx-auto text-success" />
                                ) : (
                                    <BiCross className="mx-auto text-error" />
                                )} 
                            </td> 
                        </tr> 
                        ))} 
                    </tbody> 
                </table> 
            </div> 
        </section>
    );
}