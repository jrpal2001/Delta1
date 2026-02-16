import React from "react";
import { Briefcase, Award, Layers } from "lucide-react";

function Founders() {
    return (
        <div className="py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-base md:text-lg text-teal-600 font-semibold tracking-widest uppercase">
                    Leadership
                </h2>
                <p className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
                    Meet the Founders
                </p>
                <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                    Visionary leaders combining decades of expertise to drive strategic growth and financial excellence.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 lg:gap-12 max-w-5xl mx-auto">
                {/* Binoo Krishna Card */}
                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:border-teal-100 transition-all duration-500 flex flex-col transform hover:-translate-y-2">
                    {/* Header with gradient */}
                    <div className="relative bg-gradient-to-br from-teal-800 via-teal-700 to-teal-600 p-10 text-center overflow-hidden">
                        {/* Subtle pattern overlay */}
                        <div
                            className="absolute inset-0 opacity-10"
                            style={{
                                backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
                                backgroundSize: "24px 24px",
                            }}
                        ></div>

                        <div className="relative z-10">
                            <div className="w-28 h-28 md:w-32 md:h-32 bg-white rounded-full mx-auto flex items-center justify-center text-4xl font-black text-teal-800 shadow-2xl mb-6 border-4 border-white/30 transition-transform group-hover:scale-105 duration-500">
                                BK
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                                Binoo Krishna
                            </h3>
                            <p className="text-teal-100 mt-1 font-medium text-lg">
                                Co-Founder
                            </p>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-10 flex-grow flex flex-col">
                        <div className="space-y-8 flex-grow">
                            <div>
                                <div className="flex items-center text-teal-700 font-semibold text-sm uppercase tracking-wider mb-3">
                                    <Briefcase size={16} className="mr-2.5" /> Experience
                                </div>
                                <p className="text-gray-800 font-medium leading-relaxed">
                                    25+ years of deep industry expertise across multiple sectors.
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center text-teal-700 font-semibold text-sm uppercase tracking-wider mb-3">
                                    <Award size={16} className="mr-2.5" /> Recognition
                                </div>
                                <p className="text-gray-800 font-medium">
                                    Awarded Best Treasury Solution (2015)
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center text-teal-700 font-semibold text-sm uppercase tracking-wider mb-3">
                                    <Layers size={16} className="mr-2.5" /> Key Portfolio
                                </div>
                                <div className="flex flex-wrap gap-2.5">
                                    {["Deloitte", "Namdhari's", "United Spirits", "SPS Hospitals", "Diageo", "Dairy Tales", "Tvasta"].map(
                                        (client) => (
                                            <span
                                                key={client}
                                                className="px-3.5 py-1.5 bg-teal-50 text-teal-800 text-xs font-semibold rounded-full border border-teal-100/80 shadow-sm hover:bg-teal-100 transition-colors"
                                            >
                                                {client}
                                            </span>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 pt-6 border-t border-gray-100">
                            <p className="italic text-gray-600 text-center text-sm md:text-base font-serif">
                                "Driving strategic growth through financial excellence."
                            </p>
                        </div>
                    </div>
                </div>

                {/* Shruthi B.N Card */}
                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:border-teal-100 transition-all duration-500 flex flex-col transform hover:-translate-y-2">
                    {/* Header with gradient */}
                    <div className="relative bg-gradient-to-br from-teal-800 via-teal-700 to-teal-600 p-10 text-center overflow-hidden">
                        {/* Subtle pattern overlay */}
                        <div
                            className="absolute inset-0 opacity-10"
                            style={{
                                backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
                                backgroundSize: "24px 24px",
                            }}
                        ></div>

                        <div className="relative z-10">
                            <div className="w-28 h-28 md:w-32 md:h-32 bg-white rounded-full mx-auto flex items-center justify-center text-4xl font-black text-teal-800 shadow-2xl mb-6 border-4 border-white/30 transition-transform group-hover:scale-105 duration-500">
                                SB
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                                Shruthi B.N
                            </h3>
                            <p className="text-teal-100 mt-1 font-medium text-lg">
                                Co-Founder
                            </p>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-10 flex-grow flex flex-col">
                        <div className="space-y-8 flex-grow">
                            <div>
                                <div className="flex items-center text-teal-700 font-semibold text-sm uppercase tracking-wider mb-3">
                                    <Briefcase size={16} className="mr-2.5" /> Experience
                                </div>
                                <p className="text-gray-800 font-medium leading-relaxed">
                                    18+ years of extensive financial expertise.
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center text-teal-700 font-semibold text-sm uppercase tracking-wider mb-3">
                                    <Award size={16} className="mr-2.5" /> Qualification
                                </div>
                                <p className="text-gray-800 font-medium">
                                    Gold Medalist & Rank Holder Chartered Accountant
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center text-teal-700 font-semibold text-sm uppercase tracking-wider mb-3">
                                    <Layers size={16} className="mr-2.5" /> Key Portfolio
                                </div>
                                <div className="flex flex-wrap gap-2.5">
                                    {["EY", "PwC", "Simpli", "Namdhari's", "YLG", "Wipro", "Flipkart", "FirstCry", "Cloudnine", "Myntra"].map(
                                        (client) => (
                                            <span
                                                key={client}
                                                className="px-3.5 py-1.5 bg-teal-50 text-teal-800 text-xs font-semibold rounded-full border border-teal-100/80 shadow-sm hover:bg-teal-100 transition-colors"
                                            >
                                                {client}
                                            </span>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 pt-6 border-t border-gray-100">
                            <p className="italic text-gray-600 text-center text-sm md:text-base font-serif">
                                "Combining academic excellence with practical expertise."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Founders;