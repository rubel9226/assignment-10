"use client";

const faqs = [
    {
        question: "What does the Premium plan include?",
        answer: "The Premium plan gives you lifetime access to premium lessons, unlimited lesson creation, priority listing, an ad-free experience, and an exclusive Premium badge.",
    },
    {
        question: "Is this a one-time payment?",
        answer: "Yes. You only pay ৳1500 once and enjoy Premium features for a lifetime. There are no monthly or yearly subscription fees.",
    },
    {
        question: "Can I create Premium lessons?",
        answer: "Yes. Only Premium members can create lessons with Premium access and view Premium lessons shared by other Premium users.",
    },
    {
        question: "What happens after payment?",
        answer: "After a successful Stripe payment, your account will automatically be upgraded to Premium and all Premium features will be unlocked.",
    },
    {
        question: "What if my payment is canceled?",
        answer: "If your payment is canceled or fails, your account will remain on the Free plan. You can try upgrading again at any time.",
    },
    {
        question: "Can I get a refund?",
        answer: "Since this is a lifetime digital membership, refunds are generally not available after successful activation unless required by applicable law.",
    },
];

export default function FAQ() {
    return (
        <section className="py-16"> 
            <div className="text-center mb-12"> 
                <h2 className="text-4xl font-bold">
                    Frequently Asked Questions
                </h2> 
                <p className="mt-3 text-base-content/70 max-w-2xl mx-auto">
                    Find answers to the most common questions about the Premium plan.
                </p> 
            </div>

            <div className="max-w-4xl mx-auto space-y-4"> 
                {faqs.map((faq, index) => (
                    <div key={index} className="collapse collapse-plus bg-base-100 border border-base-300 rounded-xl" >
                        <input
                            type="radio"
                            name="pricing-faq"
                            defaultChecked={index === 0}
                        />

                        <div className="collapse-title text-lg font-semibold">
                            {faq.question}
                        </div>

                        <div className="collapse-content">
                            <p className="text-base-content/70 leading-7">
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                ))} 
            </div> 
        </section>
    );
}