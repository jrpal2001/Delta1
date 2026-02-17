import React from 'react';
import { Target, Award, TrendingUp, ShieldCheck, Zap, HeartHandshake } from 'lucide-react';

const WePromise = () => {
    const promises = [
        {
            title: "Be Your Strategic Catalyst",
            desc: "Not mere consultants, but co-architects of your financial future. We bring 25+ years of battle-tested expertise to navigate complexity and unlock growth you didn't know was possible.",
            icon: Zap
        },
        {
            title: "Deliver Bespoke Excellence",
            desc: "Your business is unique; cookie-cutter solutions are not in our vocabulary. Every engagement is meticulously tailored to your specific challenges, industry dynamics, and growth ambitions.",
            icon: Award
        },
        {
            title: "Drive Measurable Impact",
            desc: "We are obsessed with outcomes, not just outputs. Our insights translate directly into enhanced profitability, optimized operations and sustainable competitive advantage. If it doesn't move the needle, it doesn't leave our desk.",
            icon: TrendingUp
        },
        {
            title: "Maintain Unwavering Integrity",
            desc: "Your trust is our currency. We bring rigor, expertise and uncompromising ethical standards to every decision, every analysis, every recommendation.",
            icon: ShieldCheck
        },
        {
            title: "Be Agile in a Changing World",
            desc: "As \"the rate of change,\" we help you stay ahead—anticipating market shifts, regulatory changes and growth opportunities before they become obvious to others.",
            icon: Target
        },
        {
            title: "This is our commitment",
            desc: "To be the trusted partner who transforms financial complexity into strategic clarity, uncertainty into opportunity and potential into exceptional value.",
            icon: HeartHandshake
        }
    ];

    return (
        <section className="py-20 bg-teal-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    {/* <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Our Commitment</h2> */}
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        We Promise to
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                        To be the trusted partner who transforms financial complexity into strategic clarity, uncertainty into opportunity and potential into exceptional value.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {promises.map((item, idx) => (
                        <div key={idx} className="bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 group">
                            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                                <item.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WePromise;
