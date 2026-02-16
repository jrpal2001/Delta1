import React from "react";
import { Target, Briefcase, Quote } from "lucide-react";

function DeltaOnePromise() {
    return (
        <section className="py-20 md:py-24 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left - Features */}
                    <div className="space-y-10 md:space-y-12">
                        <div className="flex items-start group">
                            <div className="flex-shrink-0 bg-teal-50 p-4 rounded-xl text-teal-600 transition-colors group-hover:bg-teal-100">
                                <Target size={28} strokeWidth={2} />
                            </div>
                            <div className="ml-6">
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                                    Tailored Insights & Solutions
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                    We reject one-size-fits-all approaches. Partnering with industry leaders, we craft custom value propositions and precision-tailored solutions that fuel strategic growth and enduring success.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start group">
                            <div className="flex-shrink-0 bg-teal-50 p-4 rounded-xl text-teal-600 transition-colors group-hover:bg-teal-100">
                                <Briefcase size={28} strokeWidth={2} />
                            </div>
                            <div className="ml-6">
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                                    Deep Domain Expertise
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                    Our decades of combined expertise and nuanced domain understanding allow us to deliver end-to-end financial solutions — from high-level strategy through flawless execution.
                                </p>
                            </div>
                        </div>

                        {/* Optional third point – uncomment if you want to add more */}
                        {/* <div className="flex items-start group">
              <div className="flex-shrink-0 bg-teal-50 p-4 rounded-xl text-teal-600 transition-colors group-hover:bg-teal-100">
                <Compass size={28} strokeWidth={2} />
              </div>
              <div className="ml-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  Future-Ready Navigation
                </h3>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  We help businesses anticipate change, manage risk intelligently, and turn complexity into competitive advantage.
                </p>
              </div>
            </div> */}
                    </div>

                    {/* Right - Quote / Promise Block */}
                    <div className="relative">
                        <div className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-10 lg:p-12 rounded-2xl border-l-8 border-teal-500 shadow-lg relative overflow-hidden">
                            {/* Subtle background pattern (optional) */}
                            <div
                                className="absolute inset-0 opacity-[0.04]"
                                style={{
                                    backgroundImage: "radial-gradient(circle at 1px 1px, #e5e7eb 1px, transparent 0)",
                                    backgroundSize: "40px 40px",
                                }}
                            />

                            <Quote className="absolute top-6 right-6 md:top-8 md:right-8 text-teal-100/40 h-20 w-20 md:h-24 md:w-24" />

                            <div className="relative z-10">
                                <p className="text-2xl md:text-3xl font-serif italic text-gray-800 leading-relaxed mb-8">
                                    "Our mission is to be the <span className="text-teal-600 font-semibold">rate of change</span> for businesses — helping them navigate complexity with precision and foresight."
                                </p>

                                <div className="flex items-center">
                                    <div className="h-1 w-16 bg-teal-500 rounded-full mr-4"></div>
                                    <span className="text-sm md:text-base font-bold text-teal-700 uppercase tracking-wider">
                                        The Delta One Promise
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DeltaOnePromise;