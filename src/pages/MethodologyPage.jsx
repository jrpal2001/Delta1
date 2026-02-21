import React from 'react';
import { Settings, Activity, Users, CheckCircle, Award, ShieldCheck, TrendingUp } from 'lucide-react';

const MethodologyPage = ({ navigateTo }) => {
    return (
        <div className="bg-white min-h-screen pb-12">
            {/* 1. Hero Section (New & Improved) */}
            <div className="pt-32 pb-24 bg-teal-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 transform translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 transform -translate-x-1/2 translate-y-1/2"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in-up">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-teal-800 border border-teal-600 text-teal-300 font-semibold text-sm uppercase tracking-wider mb-6">
                        Our Proven Framework
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                        The <span className="text-teal-400">BOT</span> Model
                    </h1>
                    <p className="text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed">
                        We don't just advise; we implement. Our <strong>Build, Operate, Transfer</strong> methodology ensures that we establish a sound Finance function that is scalable, compliant, and robust.
                    </p>
                </div>
            </div>

            {/* 2. The Core Philosophy (3 Cards) */}
            <section className="py-20 bg-gray-50 relative -mt-16 z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Build */}
                        <div className="bg-white rounded-xl shadow-xl p-8 border-t-4 border-teal-500 transform hover:-translate-y-2 transition-all duration-300 group">
                            <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-6 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                                <Settings size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">01. Build</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Laying the foundation. We assess your needs, select the right resources, and design the processes (SOPs) that will govern your financial operations.
                            </p>
                        </div>

                        {/* Operate */}
                        <div className="bg-white rounded-xl shadow-xl p-8 border-t-4 border-blue-500 transform hover:-translate-y-2 transition-all duration-300 group">
                            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <Activity size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">02. Operate</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Executing with precision. We manage the day-to-day operations, implement internal controls, and ensure timely, accurate reporting.
                            </p>
                        </div>

                        {/* Transfer */}
                        <div className="bg-white rounded-xl shadow-xl p-8 border-t-4 border-purple-500 transform hover:-translate-y-2 transition-all duration-300 group">
                            <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mb-6 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                <Users size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">03. Transfer</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Empowering your team. Once steady-state is achieved, we train your internal staff and transfer the processes, while retaining high-level supervision.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Detailed Implementation Roadmap */}
            <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Implementation Roadmap</h2>
                    <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
                        A step-by-step breakdown of how we transform your finance function.
                    </p>
                </div>

                <div className="relative space-y-12">
                    {/* Vertical Line for Desktop */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2"></div>

                    {/* Step 1 */}
                    <div className="relative z-10">
                        <div className="md:flex items-center justify-between">
                            <div className="md:w-5/12 text-right pr-8 hidden md:block">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Resource Selection</h3>
                                <p className="text-gray-600">Identifying the right talent mix (Chartered Accountants, Graduates) tailored to your specific industry and volume needs.</p>
                            </div>
                            <div className="flex items-center justify-center md:w-2/12 my-4 md:my-0">
                                <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-lg shadow-lg border-4 border-white">01</div>
                            </div>
                            <div className="md:w-5/12 pl-8">
                                <div className="md:hidden mb-2">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Resource Selection</h3>
                                    <p className="text-gray-600 mb-4">Identifying the right talent mix (Chartered Accountants, Graduates) tailored to your specific industry and volume needs.</p>
                                </div>
                                <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-lg border border-gray-100">
                                    <li className="flex items-start"><CheckCircle size={16} className="text-teal-500 mr-2 mt-0.5" /> Assessment of current team capabilities</li>
                                    <li className="flex items-start"><CheckCircle size={16} className="text-teal-500 mr-2 mt-0.5" /> Defining roles & responsibilities (KRA/KPI)</li>
                                    <li className="flex items-start"><CheckCircle size={16} className="text-teal-500 mr-2 mt-0.5" /> Recruitment & Onboarding assistance</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative z-10">
                        <div className="md:flex items-center justify-between flex-row-reverse">
                            <div className="md:w-5/12 text-left pl-8 hidden md:block">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">SOPs & Process Re-engineering</h3>
                                <p className="text-gray-600">Establishing clear standards. We document processes to ensure consistency, reducing dependency on specific individuals.</p>
                            </div>
                            <div className="flex items-center justify-center md:w-2/12 my-4 md:my-0">
                                <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-lg shadow-lg border-4 border-white">02</div>
                            </div>
                            <div className="md:w-5/12 pr-8">
                                <div className="md:hidden mb-2">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">SOPs & Process Re-engineering</h3>
                                    <p className="text-gray-600 mb-4">Establishing clear standards. We document processes to ensure consistency, reducing dependency on specific individuals.</p>
                                </div>
                                <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-lg border border-gray-100">
                                    <li className="flex items-start"><CheckCircle size={16} className="text-teal-500 mr-2 mt-0.5" /> Documentation of 'As-Is' vs 'To-Be' processes</li>
                                    <li className="flex items-start"><CheckCircle size={16} className="text-teal-500 mr-2 mt-0.5" /> Implementation of Accounting Manuals</li>
                                    <li className="flex items-start"><CheckCircle size={16} className="text-teal-500 mr-2 mt-0.5" /> Workflow automation advisory</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative z-10">
                        <div className="md:flex items-center justify-between">
                            <div className="md:w-5/12 text-right pr-8 hidden md:block">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Controls & Reporting</h3>
                                <p className="text-gray-600">Implementing oversight. We set up the dashboard for management and ensure statutory compliance is never missed.</p>
                            </div>
                            <div className="flex items-center justify-center md:w-2/12 my-4 md:my-0">
                                <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-lg shadow-lg border-4 border-white">03</div>
                            </div>
                            <div className="md:w-5/12 pl-8">
                                <div className="md:hidden mb-2">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Controls & Reporting</h3>
                                    <p className="text-gray-600 mb-4">Implementing oversight. We set up the dashboard for management and ensure statutory compliance is never missed.</p>
                                </div>
                                <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-lg border border-gray-100">
                                    <li className="flex items-start"><CheckCircle size={16} className="text-teal-500 mr-2 mt-0.5" /> Monthly Management Information Systems (MIS)</li>
                                    <li className="flex items-start"><CheckCircle size={16} className="text-teal-500 mr-2 mt-0.5" /> Budget vs Actual variance analysis</li>
                                    <li className="flex items-start"><CheckCircle size={16} className="text-teal-500 mr-2 mt-0.5" /> Internal Financial Controls (IFC) testing</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="relative z-10">
                        <div className="md:flex items-center justify-between flex-row-reverse">
                            <div className="md:w-5/12 text-left pl-8 hidden md:block">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Supervision & Transfer</h3>
                                <p className="text-gray-600">Strategic guidance. Even after transferring daily ops, we provide high-level CFO supervision to drive growth.</p>
                            </div>
                            <div className="flex items-center justify-center md:w-2/12 my-4 md:my-0">
                                <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-lg shadow-lg border-4 border-white">04</div>
                            </div>
                            <div className="md:w-5/12 pr-8">
                                <div className="md:hidden mb-2">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Supervision & Transfer</h3>
                                    <p className="text-gray-600 mb-4">Strategic guidance. Even after transferring daily ops, we provide high-level CFO supervision to drive growth.</p>
                                </div>
                                <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-lg border border-gray-100">
                                    <li className="flex items-start"><CheckCircle size={16} className="text-teal-500 mr-2 mt-0.5" /> Periodic Review Meetings</li>
                                    <li className="flex items-start"><CheckCircle size={16} className="text-teal-500 mr-2 mt-0.5" /> Strategic Board Advisory</li>
                                    <li className="flex items-start"><CheckCircle size={16} className="text-teal-500 mr-2 mt-0.5" /> Ongoing Training & Development</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Benefits / CTA */}
            <section className="bg-teal-900 text-white py-20">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Why the BOT Model Works</h2>
                    <div className="grid md:grid-cols-3 gap-8 text-left mb-12">
                        <div>
                            <h4 className="font-bold text-teal-300 text-lg mb-2 flex items-center"><Award size={20} className="mr-2" /> Cost Efficiency</h4>
                            <p className="text-teal-100 text-sm">Reduce overheads of hiring full-time senior leadership while getting expert quality.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-teal-300 text-lg mb-2 flex items-center"><ShieldCheck size={20} className="mr-2" /> Risk Mitigation</h4>
                            <p className="text-teal-100 text-sm">Ensure compliance and reduce fraud risk through robust, tested internal controls.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-teal-300 text-lg mb-2 flex items-center"><TrendingUp size={20} className="mr-2" /> Scalability</h4>
                            <p className="text-teal-100 text-sm">Processes designed to handle growth without breaking, allowing you to scale confidently.</p>
                        </div>
                    </div>
                    <button onClick={() => navigateTo('contact')} className="inline-block px-8 py-4 bg-white text-teal-900 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-colors">
                        Start Your Transformation
                    </button>
                </div>
            </section>
        </div>
    );
};

export default MethodologyPage;
