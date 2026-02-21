
import React from 'react';
import {
    ChevronRight,
    ArrowRight,
    BarChart3,
    Briefcase,
    Globe,
    Search,
    Quote,
    Target,
    Tag,
    Scale,
    ShieldCheck,
    LineChart,
    Users,
    TrendingUp,
    FileText,
    Layers,
    Settings,
    CheckCircle
} from 'lucide-react';
import { industries } from '../data/industries';

const HomePage = ({ navigateTo, onServiceClick }) => {
    return (
        <div className="bg-white">
            {/* 1. Hero Section (Green) */}
            <div className="relative bg-teal-900 min-h-screen flex items-center overflow-hidden pt-20">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-20 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* Left Content */}
                        <div className="text-left text-center lg:text-left">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 animate-fade-in-up">
                                Bespoke. Insights. Value.
                            </h1>
                            <p className="mt-4 text-xl text-teal-100 font-light max-w-2xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-200">
                                Your trusted partner for strategic growth, financial controllership, and unlocking exceptional value.
                                We are the "rate of change" for your business.
                            </p>
                            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-400">
                                <button onClick={() => navigateTo('services')} className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-teal-900 bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10 transition shadow-lg">
                                    Explore Services
                                </button>
                                <button onClick={() => navigateTo('about')} className="px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 md:py-4 md:text-lg md:px-10 transition">
                                    About Us
                                </button>
                            </div>
                        </div>

                        {/* Right Images */}
                        <div className="hidden lg:block relative h-full min-h-[500px] animate-fade-in">
                            <div className="absolute top-0 right-0 w-full h-full grid grid-cols-2 gap-4 transform rotate-2">
                                <div className="space-y-4 pt-12">
                                    <img
                                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80"
                                        alt="Strategic Meeting"
                                        className="rounded-2xl shadow-2xl hover:scale-105 transition duration-500 object-cover h-64 w-full"
                                    />
                                    <img
                                        src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80"
                                        alt="Financial Growth"
                                        className="rounded-2xl shadow-2xl hover:scale-105 transition duration-500 object-cover h-48 w-full"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <img
                                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80"
                                        alt="Modern Office"
                                        className="rounded-2xl shadow-2xl hover:scale-105 transition duration-500 object-cover h-48 w-full"
                                    />
                                    <img
                                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80"
                                        alt="Client Success"
                                        className="rounded-2xl shadow-2xl hover:scale-105 transition duration-500 object-cover h-64 w-full"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>



            {/* 2. Featured Services (White) - Updated from PDF Page 3 */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        {/* <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">What We Do</h2> */}
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Solutions that transform
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                            Delivering the whole 9 yards of Finance with precision and expertise.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "Business Finance & FP&A",
                                icon: <BarChart3 className="w-8 h-8 text-white" />,
                                desc: "Align Business with Milestones, Strategic Planning, and MIS Pivots."
                            },
                            {
                                title: "VFO / CFO Services",
                                icon: <Briefcase className="w-8 h-8 text-white" />,
                                desc: "Venture Fund Office, Chief Future Officer, and Controllership As A Service."
                            },
                            {
                                title: "Treasury Management",
                                icon: <Globe className="w-8 h-8 text-white" />,
                                desc: "Working Capital Management, Trade Finance, and International Trade Support."
                            },
                            {
                                title: "Forensic Services",
                                icon: <Search className="w-8 h-8 text-white" />,
                                desc: "Litigation Support, Pre-diligence Checks, and Digital Forensic analysis."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-gray-50 rounded-xl shadow-md p-6 border-t-4 border-teal-500 hover:shadow-xl transition-shadow cursor-pointer flex flex-col items-center text-center" onClick={() => onServiceClick(item.title)}>
                                <div className="w-14 h-14 bg-teal-600 rounded-lg flex items-center justify-center mb-6 shadow-sm">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm mb-4">{item.desc}</p>
                                <span className="text-teal-600 font-medium flex items-center text-xs mt-auto">Learn more <ChevronRight size={14} /></span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <button onClick={() => navigateTo('services')} className="text-teal-700 font-semibold hover:text-teal-900 flex items-center justify-center mx-auto">
                            View All Services <ArrowRight className="ml-2" size={20} />
                        </button>
                    </div>
                </div>
            </section>

            {/* 2.5 Driving Sustainable Value (New Section from PDF Page 11) */}
            <section className="py-20 bg-teal-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl font-bold tracking-tight mb-4">Driving Sustainable Value</h2>
                        <p className="text-teal-100 text-lg max-w-2xl mx-auto">Trusted Financial Advisor: Providing financial direction for an organization.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: Target, title: "Expansion Opportunities", desc: "Evaluating new markets and growth vectors." },
                            { icon: Tag, title: "Pricing Strategy", desc: "Optimizing product pricing for maximum profitability." }, // Using Tag for Pricing
                            { icon: Scale, title: "Project Evaluation", desc: "Assessing viability and ROI of business initiatives." },
                            { icon: ShieldCheck, title: "Risk Assessment", desc: "Identifying and mitigating potential financial threats." },
                            { icon: Users, title: "Resource Allocation", desc: "Efficient distribution of financial and human capital." },
                            { icon: LineChart, title: "Investment Decisions", desc: "Data-driven analysis for optimal capital deployment." },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-teal-800/50 backdrop-blur-sm p-6 rounded-lg border border-teal-700 hover:bg-teal-700 transition-colors">
                                <div className="flex items-start">
                                    <div className="bg-teal-500 p-2 rounded-lg mr-4 text-teal-900">
                                        <item.icon size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                                        <p className="text-teal-100 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2.5 CFO Focus (Grey) */}
            <section className="py-20 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 border-b border-gray-200 pb-4">
                        <h3 className="text-2xl font-bold text-teal-900 flex items-center">
                            <span className="bg-teal-700 p-1.5 rounded mr-3"><Briefcase size={20} className="text-white" /></span>
                            Five strategic pillars of our <span className="text-teal-600 ml-1">Chief Financial Services</span>
                        </h3>
                    </div>

                    {/* Row 1: 3 Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        {[
                            {
                                id: "01",
                                icon: TrendingUp,
                                title: "Strategic Advisory",
                                desc: "Budgeting, Forecasts, and Financial Planning & Analysis (FP&A)"
                            },
                            {
                                id: "02",
                                icon: FileText,
                                title: "Financial Reporting",
                                desc: "Periodical book closures and accurate statutory reporting"
                            },
                            {
                                id: "03",
                                icon: Layers,
                                title: "Transaction Supervisory",
                                desc: "Reconciliations, Fund & Working Capital Management"
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="relative bg-white border border-gray-200 rounded-xl p-8 shadow-md hover:shadow-xl transition-all border-t-4 border-t-teal-500 overflow-hidden group hover:-translate-y-1">
                                <div className="absolute top-2 right-4 text-6xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors select-none pointer-events-none">{item.id}</div>
                                <div className="relative z-10 flex flex-col items-center text-center">
                                    <div className="mb-4 text-teal-600 bg-teal-50 p-4 rounded-full group-hover:bg-teal-600 group-hover:text-white transition-colors">
                                        <item.icon size={28} strokeWidth={1.5} />
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                                    <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Row 2: 2 Cards Centered */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {[
                            {
                                id: "04",
                                icon: Settings,
                                title: "Financial Controls",
                                desc: "Design and implementation of robust processes and controls"
                            },
                            {
                                id: "05",
                                icon: CheckCircle,
                                title: "Compliance & Audits",
                                desc: "Monthly Compliance, Audit coordination, and Taxation"
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="relative bg-white border border-gray-200 rounded-xl p-8 shadow-md hover:shadow-xl transition-all border-t-4 border-t-teal-500 overflow-hidden group hover:-translate-y-1">
                                <div className="absolute top-2 right-4 text-6xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors select-none pointer-events-none">{item.id}</div>
                                <div className="relative z-10 flex flex-col items-center text-center">
                                    <div className="mb-4 text-teal-600 bg-teal-50 p-4 rounded-full group-hover:bg-teal-600 group-hover:text-white transition-colors">
                                        <item.icon size={28} strokeWidth={1.5} />
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                                    <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Testimonials (Green/Teal) */}
            <section className="py-20 bg-teal-900 text-white overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute right-0 top-0 w-96 h-96 bg-teal-400 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold sm:text-4xl">Client Success Stories</h2>
                        <p className="mt-4 text-teal-200 text-lg">Trusted by industry leaders for critical financial transformations.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-teal-800 p-8 rounded-xl border border-teal-700 relative">
                            <Quote className="absolute top-4 right-4 text-teal-600 w-8 h-8 opacity-50" />
                            <div className="mb-4">
                                <span className="inline-block px-3 py-1 bg-teal-600 text-xs font-semibold rounded-full uppercase tracking-wide">Agri-Business</span>
                            </div>
                            <p className="text-teal-100 italic mb-6">
                                "Providing critical corporate advisory for our IPO Readiness Assessment; continuing to guide us for the readiness journey from lead manager selection to compliance frameworks for a successful listing in the future."
                            </p>
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center font-bold text-teal-900">L</div>
                                <div className="ml-3">
                                    <p className="text-sm font-bold text-white">Large Agri Group</p>
                                    <p className="text-xs text-teal-300">Hubli</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-teal-800 p-8 rounded-xl border border-teal-700 relative">
                            <Quote className="absolute top-4 right-4 text-teal-600 w-8 h-8 opacity-50" />
                            <div className="mb-4">
                                <span className="inline-block px-3 py-1 bg-teal-600 text-xs font-semibold rounded-full uppercase tracking-wide">Healthcare</span>
                            </div>
                            <p className="text-teal-100 italic mb-6">
                                "Delivering strategic services including monthly MIS preparation, SOP reviews and internal control testing. Their overall support to the business has been transformative for our operations."
                            </p>
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center font-bold text-teal-900">H</div>
                                <div className="ml-3">
                                    <p className="text-sm font-bold text-white">Leading Healthcare Chain</p>
                                    <p className="text-xs text-teal-300">Kerala</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-teal-800 p-8 rounded-xl border border-teal-700 relative">
                            <Quote className="absolute top-4 right-4 text-teal-600 w-8 h-8 opacity-50" />
                            <div className="mb-4">
                                <span className="inline-block px-3 py-1 bg-teal-600 text-xs font-semibold rounded-full uppercase tracking-wide">Investment Banking</span>
                            </div>
                            <p className="text-teal-100 italic mb-6">
                                "Their boutique investment banking expertise helped us with startup valuations, investor decks, preparing Information Memorandums and Seed Funding. A true partner for the startup community."
                            </p>
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center font-bold text-teal-900">S</div>
                                <div className="ml-3">
                                    <p className="text-sm font-bold text-white">Startup Ecosystem</p>
                                    <p className="text-xs text-teal-300">Bangalore</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Industries Preview Section (Replaces Blogs) */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div className="text-center md:text-left mb-6 md:mb-0">
                            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Sectors</h2>
                            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                Industries We Serve
                            </p>
                            <p className="mt-4 max-w-2xl text-lg text-gray-500">
                                Specialized financial expertise tailored to the unique challenges of your sector.
                            </p>
                        </div>
                        <button onClick={() => navigateTo('industries')} className="hidden md:flex bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 transition items-center shadow-md">
                            Explore Industries <ArrowRight size={18} className="ml-2" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {industries.slice(0, 3).map((ind, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all border-b-4 border-teal-500 hover:-translate-y-1 cursor-pointer" onClick={() => navigateTo('industries')}>
                                <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600 mb-6">
                                    <ind.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{ind.title}</h3>
                                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{ind.desc}</p>
                                <div className="flex items-center text-teal-600 font-medium text-sm">
                                    View Details <ChevronRight size={16} className="ml-1" />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 text-center md:hidden">
                        <button onClick={() => navigateTo('industries')} className="text-teal-700 font-medium hover:text-teal-900 inline-flex items-center">
                            View all Industries <ArrowRight size={18} className="ml-2" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
