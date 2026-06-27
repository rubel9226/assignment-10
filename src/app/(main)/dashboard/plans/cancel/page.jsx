"use client";

import Link from "next/link";
import { FaTimesCircle, FaArrowLeft, FaCreditCard } from "react-icons/fa";

export default function PaymentCancelPage() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-5 py-12">
      <div className="max-w-xl w-full bg-base-100 border border-base-300 rounded-3xl shadow-xl p-10 text-center">

        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center">
            <FaTimesCircle className="text-red-500 text-6xl" />
          </div>
        </div>

        <h1 className="text-4xl font-bold mt-8">
          Payment Cancelled
        </h1>

        <p className="text-base-content/70 mt-4 leading-7">
          Your payment was cancelled, so your account is still on the
          <span className="font-semibold"> Free Plan</span>.
          No money has been charged.
        </p>

        <div className="bg-base-200 rounded-xl p-5 mt-8 text-left">
          <h2 className="font-semibold mb-3">
            You are missing Premium features:
          </h2>

          <ul className="space-y-2 text-sm">
            <li>✅ Access Premium Lessons</li>
            <li>✅ Create Premium Lessons</li>
            <li>✅ Premium Badge</li>
            <li>✅ Priority Visibility</li>
            <li>✅ Lifetime Premium Access</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">

          <Link
            href="/dashboard/plans/pricing"
            className="btn btn-primary flex-1"
          >
            <FaCreditCard />
            Try Again
          </Link>

          <Link
            href="/dashboard"
            className="btn btn-outline flex-1"
          >
            <FaArrowLeft />
            Back to Dashboard
          </Link>

        </div>

      </div>
    </section>
  );
}