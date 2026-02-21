import React from 'react';
import { Target, Briefcase, Quote, ArrowRightLeft, PenTool, Gem, Award } from 'lucide-react';
import WePromise from '../WePromise';

const AboutPage = () => {
    return (
        <div className="bg-white min-h-screen pb-12">
            {/* 1. Hero Section */}
            <div className="pt-32 pb-20 bg-teal-900 text-white relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform translate-x-1/3 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform -translate-x-1/3 translate-y-1/3"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-fade-in-up">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                        Trusted Partner & <span className="text-teal-400">Value Driven</span>
                    </h1>
                    <p className="text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed font-light">
                        Founded with the objective of being the trusted partner for bespoke advisory solutions, unlocking exceptional value, and fostering a positive impact on our clients.
                    </p>
                </div>
            </div>

            {/* 2. Mission & Values (Split Layout) */}
            {/* <DeltaOnePromise /> */}
            <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8 animate-fade-in">
                        <div className="flex items-start">
                            <div className="flex-shrink-0 bg-teal-100 p-3 rounded-lg text-teal-700">
                                <Target size={24} />
                            </div>
                            <div className="ml-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Tailored Insights & Solutions</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    We don't believe in one-size-fits-all. We work with the best in the industry to create value propositions and tailor-made solutions that drive strategic growth and sustainable long-term success.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="flex-shrink-0 bg-teal-100 p-3 rounded-lg text-teal-700">
                                <Briefcase size={24} />
                            </div>
                            <div className="ml-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Deep Domain Expertise</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Our combined deep expertise and domain understanding enable us to provide comprehensive solutions covering all aspects of business finance, from strategy to execution.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Visual Element / Quote */}
                    <div className="bg-gray-50 p-10 rounded-2xl border-l-8 border-teal-500 shadow-sm relative animate-fade-in animation-delay-200">
                        <Quote className="absolute top-6 right-6 text-gray-200 h-16 w-16" />
                        <p className="text-2xl font-serif italic text-gray-800 leading-relaxed relative z-10 mb-6">
                            "Your trusted partner for bespoke financial solutions that drive measurable growth. With 25+ years of expertise, we turn complexity into clarity, challenges into opportunities, and potential into exceptional value."
                        </p>
                        <div className="flex items-center">
                            <div className="h-1 w-12 bg-teal-500 rounded-full mr-4"></div>
                            <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">The Delta One Promise</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* 1.5 We Promise Section */}
            {/* <WePromise /> */}

            {/* 3. Core Differentiators (Cards) */}
            <div className="bg-gray-50 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 animate-fade-in">
                        <h2 className="text-base text-teal-600 font-bold tracking-wide uppercase">Why Choose Us</h2>
                        <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">The Delta One Difference</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 01 */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                                <ArrowRightLeft size={120} className="text-teal-900" />
                            </div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-teal-600 rounded-xl flex items-center justify-center mb-6 text-white shadow-md">
                                    <ArrowRightLeft size={28} />
                                </div>
                                <h4 className="text-2xl font-bold text-gray-900 mb-3">Change Agents</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    We act as the <span className="font-semibold text-teal-700">"rate of change"</span> for your business, helping you pivot, adapt, and evolve in a dynamic market environment.
                                </p>
                            </div>
                        </div>

                        {/* Card 02 */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                                <PenTool size={120} className="text-teal-900" />
                            </div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-teal-600 rounded-xl flex items-center justify-center mb-6 text-white shadow-md">
                                    <PenTool size={28} />
                                </div>
                                <h4 className="text-2xl font-bold text-gray-900 mb-3">Bespoke Solutions</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    We reject the cookie-cutter approach. Every strategy is <span className="font-semibold text-teal-700">custom-designed</span> to fit your specific organizational DNA and goals.
                                </p>
                            </div>
                        </div>

                        {/* Card 03 */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                                <Gem size={120} className="text-teal-900" />
                            </div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-teal-600 rounded-xl flex items-center justify-center mb-6 text-white shadow-md">
                                    <Gem size={28} />
                                </div>
                                <h4 className="text-2xl font-bold text-gray-900 mb-3">Value & Insights</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    We deliver accurate, deep insights that translate directly into <span className="font-semibold text-teal-700">measurable business value</span> and ROI.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. Leadership Profile (Refined) */}
            {/* <Founders /> */}
            <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-base text-teal-600 font-bold tracking-wide uppercase">Leadership</h2>
                    <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Meet the Founders</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Binoo Krishna */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow flex flex-col transform hover:-translate-y-1 duration-300">
                        <div className="bg-gradient-to-r from-teal-800 to-teal-600 p-8 text-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-10" style={{ backgroundImage: 'radial-gradient(#ccc 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                            <div className="w-24 h-24 bg-white rounded-full mx-auto flex items-center justify-center text-3xl font-bold text-teal-800 shadow-lg mb-4 relative z-10 border-4 border-teal-100">BK</div>
                            <h3 className="text-2xl font-bold text-white relative z-10">Binoo Krishna</h3>
                            <p className="text-teal-100 font-medium relative z-10">Co-Founder</p>
                        </div>
                        <div className="p-8 flex-grow flex flex-col justify-between">
                            <div className="space-y-6">
                                <div>
                                    <div className="flex items-center text-teal-700 font-bold text-xs uppercase tracking-wider mb-2"><Briefcase size={14} className="mr-2" /> Experience</div>
                                    <div className="text-gray-700 font-medium space-y-3 leading-relaxed">
                                        <p>A seasoned finance leader with <span className="font-bold text-gray-900">25+ years of cross-industry expertise</span> spanning Big Four advisory, corporate treasury leadership, and C-suite roles.</p>
                                        <p>As <span className="font-bold text-gray-900">Group CFO at Namdhari's Group</span>, Binoo led finance transformation across four companies and managed a US acquisition. At <span className="font-bold text-gray-900">United Spirits-Diageo</span>, he revolutionized cash management, implementing India's first paperless banking solution in the alcobev sector and restructuring global debt.</p>
                                        <p>His foundation at <span className="font-bold text-gray-900">Deloitte</span> (including stints in San Jose and Singapore) developed expertise in risk-based audits, US GAAP/IFRS, and high-technology clients. He has also guided startups through CFO services, IPO readiness, and fundraising.</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center text-teal-700 font-bold text-xs uppercase tracking-wider mb-2"><Award size={14} className="mr-2" /> Recognition</div>
                                    <p className="text-gray-700">Awarded Best Treasury Solution (2015).</p>
                                </div>
                                <div>
                                    {/* <div className="flex items-center text-teal-700 font-bold text-xs uppercase tracking-wider mb-3"><Layers size={14} className="mr-2" /> Key Portfolio</div>
                  <div className="flex flex-wrap gap-2">
                    {['Deloitte', "Namdhari's", 'United Spirits', 'SPS Hospitals', 'Diageo', 'Dairy Tales', 'Tvasta'].map(client => (
                      <span key={client} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-semibold border border-gray-200">{client}</span>
                    ))}
                  </div> */}
                                </div>
                            </div>
                            <div className="mt-8 pt-6 border-t border-gray-100">
                                <p className="italic text-gray-500 text-center text-sm font-serif">"Binoo combines strategic vision with hands-on execution—from M&A due diligence to building finance functions from scratch—uniquely positioning him to guide businesses through complexity toward sustainable growth."</p>
                            </div>
                        </div>
                    </div>

                    {/* Shruthi B.N */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow flex flex-col transform hover:-translate-y-1 duration-300">
                        <div className="bg-gradient-to-r from-teal-800 to-teal-600 p-8 text-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-10" style={{ backgroundImage: 'radial-gradient(#ccc 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                            <div className="w-24 h-24 bg-white rounded-full mx-auto flex items-center justify-center text-3xl font-bold text-teal-800 shadow-lg mb-4 relative z-10 border-4 border-teal-100">SB</div>
                            <h3 className="text-2xl font-bold text-white relative z-10">Shruthi B.N</h3>
                            <p className="text-teal-100 font-medium relative z-10">Co-Founder</p>
                        </div>
                        <div className="p-8 flex-grow flex flex-col justify-between">
                            <div className="space-y-6">
                                <div>
                                    <div className="flex items-center text-teal-700 font-bold text-xs uppercase tracking-wider mb-2"><Briefcase size={14} className="mr-2" /> Experience</div>
                                    <div className="text-gray-700 font-medium space-y-3 leading-relaxed">
                                        <p><span className="font-bold text-gray-900">A Gold Medalist Chartered Accountant</span> with <span className="font-bold text-gray-900">18+ years of experience</span> spanning Big Four advisory, CFO roles, and corporate finance leadership across FMCG, retail, F&B, and e-commerce.</p>
                                        <p>As <span className="font-bold text-gray-900">Deputy CFO at Namdhari's Group</span>, Shruthi drove remarkable turnarounds—curtailing losses, improving margins, and transforming unprofitable units to profitability. At <span className="font-bold text-gray-900">Maiyas Group</span>, she raised monies from PE investors and achieved EBITDA profitability across operations.</p>
                                        <p>Her tenure at <span className="font-bold text-gray-900">Wipro Enterprises</span> included heading FP&A for Consumer Care & Lighting and serving as CFO for Yardley London's global operations. At <span className="font-bold text-gray-900">Ernst & Young</span>, she specialized in business structuring, regulatory consultancy, and tax advisory—notably supporting Flipkart's early fundraising and acquisitions.</p>
                                        {/* <p><span className="font-bold text-gray-900">Academic Excellence:</span> All India 10th Rank (CA Final - Best Lady Candidate), All India 2nd Rank (CA Inter) with two Gold Medals.</p> */}
                                    </div>
                                </div>
                                <div>
                  <div className="flex items-center text-teal-700 font-bold text-xs uppercase tracking-wider mb-2"><Award size={14} className="mr-2" /> Academic Excellence</div>
                  <p className="text-gray-700">All India 10th Rank (CA Final - Best Lady Candidate), All India 2nd Rank (CA Inter) with two Gold Medals.</p>
                </div>
                                <div>
                                    {/* <div className="flex items-center text-teal-700 font-bold text-xs uppercase tracking-wider mb-3"><Layers size={14} className="mr-2" /> Key Portfolio</div>
                  <div className="flex flex-wrap gap-2">
                    {['EY', 'PwC', 'Simpli', "Namdhari's", 'YLG', 'Wipro', 'Flipkart', 'FirstCry', 'Cloudnine', 'Myntra'].map(client => (
                      <span key={client} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-semibold border border-gray-200">{client}</span>
                    ))}
                  </div> */}
                                </div>
                            </div>
                            <div className="mt-8 pt-6 border-t border-gray-100">
                                <p className="italic text-gray-500 text-center text-sm font-serif">"Shruthi combines financial rigor with business partnership, specializing in turnaround strategies, controllership frameworks, and growth enablement—making her a trusted advisor for scaling organizations."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
