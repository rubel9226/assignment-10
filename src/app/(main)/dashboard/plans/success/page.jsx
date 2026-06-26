import { redirect } from "next/navigation";
import Link from "next/link";
import { stripe } from "@/lib/stripte";
import { BsArrowRight, BsCheckCircle } from "react-icons/bs";
import { FaCrown } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";

export default async function Success({ searchParams }) {
    const { session_id } = await searchParams;

    if (!session_id) {
        throw new Error("Please provide a valid session_id (`cs_test_...`)");
    }

    const { status, metadata, customer_details: { email: customerEmail } } = await stripe.checkout.sessions.retrieve(session_id, {
        expand: ["line_items", "payment_intent"],
    });

    if (status === "open") {
        return redirect("/");
    }

    if (status === "complete") {
        console.log(metadata);
        return (
            <div className="min-h-screen flex items-center justify-center px-4">
                <div className="card w-full max-w-2xl bg-base-100 shadow-2xl">

                    <div className="card-body items-center text-center p-10">

                        <div className="w-24 h-24 rounded-full bg-success/10 flex items-center justify-center mb-6">
                            <BsCheckCircle className="text-success" size={60} />
                        </div>

                        <div className="badge badge-success badge-lg gap-2 mb-4">
                            <FaCrown size={16} />
                            Premium Activated
                        </div>

                        <h1 className="text-4xl font-bold mb-4">
                            Payment Successful 🎉
                        </h1>

                        <p className="text-base-content/70 max-w-xl">
                            Thank you for upgrading to the <strong>Premium Plan</strong>.
                            Your payment has been completed successfully and your premium
                            membership is now active.
                        </p>

                        <div className="divider"></div>

                        <div className="bg-base-200 rounded-xl w-full p-5">

                            <div className="flex items-center justify-center gap-3"> 
                                <BiMailSend className="text-primary" /> 
                                <span className="font-medium">
                                  {customerEmail}
                                </span> 
                            </div>

                            <p className="text-sm text-base-content/60 mt-3">
                                A payment confirmation has been sent to your email address.
                            </p> 
                        </div> 
                        <div className="grid md:grid-cols-3 gap-4 w-full mt-8"> 
                            <div className="border rounded-xl p-5">
                                <h3 className="font-bold text-lg">
                                    Lifetime
                                </h3>

                                <p className="text-sm text-base-content/70">
                                    One-time payment
                                </p>
                            </div>

                            <div className="border rounded-xl p-5">
                                <h3 className="font-bold text-lg">
                                    Premium Badge
                                </h3>

                                <p className="text-sm text-base-content/70">
                                    Visible on profile
                                </p>
                            </div>

                            <div className="border rounded-xl p-5">
                                <h3 className="font-bold text-lg">
                                    Unlimited Access
                                </h3>

                                <p className="text-sm text-base-content/70">
                                    Premium features unlocked
                                </p>
                            </div> 
                        </div>

                        <div className="flex flex-col md:flex-row gap-4 mt-10"> 
                            <Link href="/dashboard" className="btn btn-primary btn-lg" >
                                Go To Dashboard
                                <BsArrowRight size={18} />
                            </Link> 
                            <Link href="/" className="btn btn-outline btn-lg" >
                                Back To Home
                            </Link> 
                        </div> 
                    </div> 
                </div>
            </div>
        );
    }
}