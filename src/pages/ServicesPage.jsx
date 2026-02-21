
import React, { useState } from 'react';
import {
    ArrowLeft,
    TrendingUp,
    ArrowRightLeft,
    Banknote,
    Globe,
    AlertTriangle,
    CheckCircle,
    X,
    ChevronRight,
    Loader2,
    Send,
    ShieldCheck,
    BookOpen,
    Users,
    FileCheck,
    MonitorCheck,
    Settings,
    Briefcase,
    Zap,
    Lightbulb,
    BarChart3,
    Layout,
    Target,
    Scale,
    Gem,
    FileText,
    Search
} from 'lucide-react';
import { services } from '../data/services';

const ServicesPage = ({ selectedService, setSelectedService }) => {
    const [showForensicForm, setShowForensicForm] = useState(false);
    const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success
    const [showPartnerForm, setShowPartnerForm] = useState(false);
    const [partnerFormStatus, setPartnerFormStatus] = useState('idle');
    const [showConsultationForm, setShowConsultationForm] = useState(false);
    const [consultationFormStatus, setConsultationFormStatus] = useState('idle');
    const [showStrategyForm, setShowStrategyForm] = useState(false);
    const [strategyFormStatus, setStrategyFormStatus] = useState('idle');
    const [showControlForm, setShowControlForm] = useState(false);
    const [controlFormStatus, setControlFormStatus] = useState('idle');

    const handleForensicSubmit = (e) => {
        e.preventDefault();
        setFormStatus('submitting');

        // Capture data
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        // Construct mailto
        const subject = `Forensic Review Request - ${data.companyName || 'New Inquiry'}`;
        const body = `Name: ${data.fullName}\nEmail: ${data.email}\nCompany: ${data.companyName}\nReview Type: ${data.reviewType}\n\nDetails:\n${data.details}`;

        setTimeout(() => {
            setFormStatus('success');
            window.location.href = `mailto:connect@deltaoneadvisory.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        }, 1500);
    };

    const handlePartnerSubmit = (e) => {
        e.preventDefault();
        setPartnerFormStatus('submitting');

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        const subject = `Strategic Partnership Inquiry - ${data.companyName || 'New Inquiry'}`;
        const body = `Name: ${data.fullName}\nEmail: ${data.email}\nCompany/Fund: ${data.companyName}\nInterest Area: ${data.interestArea}\n\nDetails:\n${data.details}`;

        setTimeout(() => {
            setPartnerFormStatus('success');
            window.location.href = `mailto:connect@deltaoneadvisory.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        }, 1500);
    };

    const handleConsultationSubmit = (e) => {
        e.preventDefault();
        setConsultationFormStatus('submitting');

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        const subject = `Treasury Consultation Request - ${data.companyName || 'New Inquiry'}`;
        const body = `Name: ${data.fullName}\nEmail: ${data.email}\nCompany: ${data.companyName}\nFocus Area: ${data.focusArea}\n\nChallenges:\n${data.challenges}`;

        setTimeout(() => {
            setConsultationFormStatus('success');
            window.location.href = `mailto:connect@deltaoneadvisory.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        }, 1500);
    };

    const handleStrategySubmit = (e) => {
        e.preventDefault();
        setStrategyFormStatus('submitting');

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        const subject = `Strategic Consultation Request - ${data.advisoryArea}`;
        const body = `Name: ${data.fullName}\nEmail: ${data.email}\nAdvisory Area: ${data.advisoryArea}`;

        setTimeout(() => {
            setStrategyFormStatus('success');
            window.location.href = `mailto:connect@deltaoneadvisory.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        }, 1500);
    };

    const handleControlSubmit = (e) => {
        e.preventDefault();
        setControlFormStatus('submitting');

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        const subject = `Control Review Request - ${data.reviewFocus}`;
        const body = `Name: ${data.fullName}\nEmail: ${data.email}\nReview Focus: ${data.reviewFocus}`;

        setTimeout(() => {
            setControlFormStatus('success');
            window.location.href = `mailto:connect@deltaoneadvisory.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        }, 1500);
    };

    // Specific detail view for Strategic Advisory
    if (selectedService === 'Strategic Advisory') {
        return (
            <div className="pt-24 pb-12 bg-gray-50 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <button
                        onClick={() => setSelectedService(null)}
                        className="flex items-center text-teal-600 hover:text-teal-800 mb-8 transition-colors"
                    >
                        <ArrowLeft size={20} className="mr-2" /> Back to Services
                    </button>

                    <div className="text-center mb-16 animate-fade-in">
                        <div className="inline-block p-4 rounded-full bg-teal-100 text-teal-700 mb-4">
                            <TrendingUp size={32} />
                        </div>
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Strategic Advisory</h2>
                        <p className="mt-4 text-xl text-teal-600 font-medium">Unlocking Value through Strategic Moves</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {[
                            {
                                title: "Capital and M&A Advisory",
                                icon: ArrowRightLeft,
                                desc: "End-to-end support for buy-side and sell-side mandates, valuation, and post-merger integration."
                            },
                            {
                                title: "IPO Advisory",
                                icon: Banknote,
                                desc: "Expert guidance on IPO readiness, DRHP preparation, and managing investor relations."
                            },
                            {
                                title: "Business/Cross Border Taxation",
                                icon: Globe,
                                desc: "Navigating international tax laws, Transfer Pricing, and DTAA for global expansion."
                            },
                            {
                                title: "Risk Management",
                                icon: AlertTriangle,
                                desc: "Comprehensive enterprise risk assessments and mitigation strategies for sustainable growth."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-teal-500 hover:shadow-xl transition-shadow group">
                                <div className="flex items-start mb-4">
                                    <div className="bg-teal-50 p-3 rounded-lg text-teal-700 mr-4 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                                        <item.icon size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                        <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-teal-900 rounded-2xl p-12 text-center text-white relative overflow-hidden transition-all duration-500 ease-in-out">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-800 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>

                        {!showStrategyForm && strategyFormStatus !== 'success' ? (
                            <div className="relative z-10 animate-fade-in">
                                <h3 className="text-2xl font-bold mb-4">Plan Your Next Strategic Move</h3>
                                <p className="text-teal-100 mb-8 max-w-2xl mx-auto">
                                    Whether you are looking to raise capital, acquire a competitor, or enter a new market, our strategic advisors are here to guide you.
                                </p>
                                <button
                                    onClick={() => setShowStrategyForm(true)}
                                    className="inline-block bg-white text-teal-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg"
                                >
                                    Request Strategic Consultation
                                </button>
                            </div>
                        ) : strategyFormStatus === 'success' ? (
                            <div className="relative z-10 animate-fade-in py-12">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                                    <CheckCircle size={32} />
                                </div>
                                <h3 className="text-3xl font-bold mb-4">Request Received</h3>
                                <p className="text-teal-100 mb-8 max-w-xl mx-auto">
                                    Thank you. Your request for a strategic consultation has been securely received. Our team will contact you shortly.
                                </p>
                                <button
                                    onClick={() => { setStrategyFormStatus('idle'); setShowStrategyForm(false); }}
                                    className="text-teal-200 hover:text-white underline"
                                >
                                    Close
                                </button>
                            </div>
                        ) : (
                            <div className="relative z-10 max-w-2xl mx-auto text-left animate-fade-in">
                                <div className="flex justify-between items-center mb-8 border-b border-teal-800 pb-4">
                                    <h3 className="text-2xl font-bold text-white flex items-center">
                                        <TrendingUp size={24} className="mr-3 text-teal-400" /> Strategic Consultation
                                    </h3>
                                    <button onClick={() => setShowStrategyForm(false)} className="text-teal-400 hover:text-white transition-colors bg-teal-800/50 p-2 rounded-full"><X size={20} /></button>
                                </div>
                                <form onSubmit={handleStrategySubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-teal-200 mb-2">Full Name</label>
                                            <input name="fullName" required type="text" className="w-full px-4 py-3 rounded-lg bg-teal-800 border border-teal-700 text-white placeholder-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all" placeholder="John Doe" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-teal-200 mb-2">Work Email</label>
                                            <input name="email" required type="email" className="w-full px-4 py-3 rounded-lg bg-teal-800 border border-teal-700 text-white placeholder-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all" placeholder="john@company.com" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-teal-200 mb-2">Advisory Area</label>
                                        <div className="relative">
                                            <select name="advisoryArea" className="w-full px-4 py-3 rounded-lg bg-teal-800 border border-teal-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent appearance-none transition-all cursor-pointer">
                                                <option>Capital and M&A Advisory</option>
                                                <option>IPO Advisory</option>
                                                <option>Business/Cross Border Taxation</option>
                                                <option>Risk Management</option>
                                            </select>
                                            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-teal-400">
                                                <ChevronRight size={16} className="rotate-90" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-end pt-2">
                                        <button
                                            type="submit"
                                            disabled={strategyFormStatus === 'submitting'}
                                            className="px-8 py-3 bg-white text-teal-900 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg flex items-center disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {strategyFormStatus === 'submitting' ? (
                                                <>Processing <Loader2 size={18} className="ml-2 animate-spin" /></>
                                            ) : (
                                                <>Submit Request <Send size={18} className="ml-2" /></>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    // Specific detail view for Accounting & Control
    if (selectedService === 'Accounting & Control') {
        return (
            <div className="pt-24 pb-12 bg-gray-50 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <button
                        onClick={() => setSelectedService(null)}
                        className="flex items-center text-teal-600 hover:text-teal-800 mb-8 transition-colors"
                    >
                        <ArrowLeft size={20} className="mr-2" /> Back to Services
                    </button>

                    <div className="text-center mb-16 animate-fade-in">
                        <div className="inline-block p-4 rounded-full bg-teal-100 text-teal-700 mb-4">
                            <ShieldCheck size={32} />
                        </div>
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Accounting & Control</h2>
                        <p className="mt-4 text-xl text-teal-600 font-medium">Robust Processes & Compliance Assurance</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {[
                            {
                                title: "SOP Design",
                                icon: BookOpen,
                                desc: "Process re-engineering and documentation of Standard Operating Procedures to ensure consistency."
                            },
                            {
                                title: "Internal Financial Controls (IFC)",
                                icon: ShieldCheck,
                                desc: "Design, implementation, and testing of IFC frameworks to mitigate financial reporting risks."
                            },
                            {
                                title: "Audit Coordination",
                                icon: Users,
                                desc: "Managing statutory and internal audits, acting as the bridge between management and auditors."
                            },
                            {
                                title: "Statutory Compliance",
                                icon: FileCheck,
                                desc: "Ensuring timely adherence to all regulatory filings, tax compliances, and reporting standards."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-teal-500 hover:shadow-xl transition-shadow group">
                                <div className="flex items-start mb-4">
                                    <div className="bg-teal-50 p-3 rounded-lg text-teal-700 mr-4 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                                        <item.icon size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                        <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-teal-900 rounded-2xl p-12 text-center text-white relative overflow-hidden transition-all duration-500 ease-in-out">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-800 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>

                        {!showControlForm && controlFormStatus !== 'success' ? (
                            <div className="relative z-10 animate-fade-in">
                                <h3 className="text-2xl font-bold mb-4">Strengthen Your Financial Controls</h3>
                                <p className="text-teal-100 mb-8 max-w-2xl mx-auto">
                                    Don't leave compliance to chance. Our experts help you build a robust control environment that scales with your business.
                                </p>
                                <button
                                    onClick={() => setShowControlForm(true)}
                                    className="inline-block bg-white text-teal-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg"
                                >
                                    Request Control Review
                                </button>
                            </div>
                        ) : controlFormStatus === 'success' ? (
                            <div className="relative z-10 animate-fade-in py-12">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                                    <CheckCircle size={32} />
                                </div>
                                <h3 className="text-3xl font-bold mb-4">Request Received</h3>
                                <p className="text-teal-100 mb-8 max-w-xl mx-auto">
                                    Thank you. Your request for a control review has been securely received. We will be in touch shortly to discuss your compliance needs.
                                </p>
                                <button
                                    onClick={() => { setControlFormStatus('idle'); setShowControlForm(false); }}
                                    className="text-teal-200 hover:text-white underline"
                                >
                                    Close
                                </button>
                            </div>
                        ) : (
                            <div className="relative z-10 max-w-2xl mx-auto text-left animate-fade-in">
                                <div className="flex justify-between items-center mb-8 border-b border-teal-800 pb-4">
                                    <h3 className="text-2xl font-bold text-white flex items-center">
                                        <ShieldCheck size={24} className="mr-3 text-teal-400" /> Control Review Request
                                    </h3>
                                    <button onClick={() => setShowControlForm(false)} className="text-teal-400 hover:text-white transition-colors bg-teal-800/50 p-2 rounded-full"><X size={20} /></button>
                                </div>
                                <form onSubmit={handleControlSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-teal-200 mb-2">Full Name</label>
                                            <input name="fullName" required type="text" className="w-full px-4 py-3 rounded-lg bg-teal-800 border border-teal-700 text-white placeholder-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all" placeholder="John Doe" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-teal-200 mb-2">Work Email</label>
                                            <input name="email" required type="email" className="w-full px-4 py-3 rounded-lg bg-teal-800 border border-teal-700 text-white placeholder-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all" placeholder="john@company.com" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-teal-200 mb-2">Review Focus</label>
                                        <div className="relative">
                                            <select name="reviewFocus" className="w-full px-4 py-3 rounded-lg bg-teal-800 border border-teal-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent appearance-none transition-all cursor-pointer">
                                                <option>Internal Controls (IFC)</option>
                                                <option>SOP Development</option>
                                                <option>Statutory Compliance</option>
                                                <option>Audit Preparation</option>
                                            </select>
                                            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-teal-400">
                                                <ChevronRight size={16} className="rotate-90" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-end pt-2">
                                        <button
                                            type="submit"
                                            disabled={controlFormStatus === 'submitting'}
                                            className="px-8 py-3 bg-white text-teal-900 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg flex items-center disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {controlFormStatus === 'submitting' ? (
                                                <>Processing <Loader2 size={18} className="ml-2 animate-spin" /></>
                                            ) : (
                                                <>Submit Request <Send size={18} className="ml-2" /></>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    // Specific detail view for Treasury Management
    if (selectedService === 'Treasury Management') {
        return (
            <div className="pt-24 pb-12 bg-gray-50 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <button
                        onClick={() => setSelectedService(null)}
                        className="flex items-center text-teal-600 hover:text-teal-800 mb-8 transition-colors"
                    >
                        <ArrowLeft size={20} className="mr-2" /> Back to Services
                    </button>

                    <div className="text-center mb-12 animate-fade-in">
                        <div className="inline-block p-4 rounded-full bg-teal-100 text-teal-700 mb-4">
                            <Globe size={32} />
                        </div>
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Treasury Management</h2>
                        <p className="mt-4 text-xl text-teal-600 font-medium">The "Steward" of the Balance Sheet</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {/* Card 1: Visibility & Control */}
                        <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-teal-500 hover:shadow-xl transition-shadow">
                            <div className="flex items-center mb-4 text-teal-700">
                                <MonitorCheck size={28} className="mr-3" />
                                <h3 className="text-xl font-bold">Visibility over Cash & Liquidity</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                Centralize control and gain complete visibility over cash positions, liquidity, and capital structure across the organization.
                            </p>
                        </div>

                        {/* Card 2: Banking Strategy */}
                        <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-teal-500 hover:shadow-xl transition-shadow">
                            <div className="flex items-center mb-4 text-teal-700">
                                <Banknote size={28} className="mr-3" />
                                <h3 className="text-xl font-bold">Banking Strategy</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                Develop and implement a comprehensive banking strategy tailored to fit the specific evolving needs of the organization.
                            </p>
                        </div>

                        {/* Card 3: Treasury Technology */}
                        <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-teal-500 hover:shadow-xl transition-shadow">
                            <div className="flex items-center mb-4 text-teal-700">
                                <Settings size={28} className="mr-3" />
                                <h3 className="text-xl font-bold">Treasury Technology</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                Stabilize and optimize Treasury Technology Solutions, including robust systems for Trade Finance and International Trade.
                            </p>
                        </div>

                        {/* Card 4: Risk Management */}
                        <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-teal-500 hover:shadow-xl transition-shadow">
                            <div className="flex items-center mb-4 text-teal-700">
                                <AlertTriangle size={28} className="mr-3" />
                                <h3 className="text-xl font-bold">Risk Management & Compliance</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                Proactively identify financial risks and implement effective mitigation processes, compliance frameworks, and monitoring tools.
                            </p>
                        </div>
                    </div>

                    <div className="bg-teal-900 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden transition-all duration-500 ease-in-out">
                        {/* Decorative background */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-800 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>

                        {!showConsultationForm && consultationFormStatus !== 'success' ? (
                            <div className="relative z-10 animate-fade-in">
                                <h3 className="text-2xl font-bold mb-4">Ready to Optimize Your Treasury Function?</h3>
                                <p className="text-teal-100 mb-8 max-w-2xl mx-auto">Let us help you gain better control over your cash flow and reduce financial risks.</p>
                                <button
                                    onClick={() => setShowConsultationForm(true)}
                                    className="inline-block bg-white text-teal-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg"
                                >
                                    Contact Us for a Consultation
                                </button>
                            </div>
                        ) : consultationFormStatus === 'success' ? (
                            <div className="relative z-10 animate-fade-in py-12">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                                    <CheckCircle size={32} />
                                </div>
                                <h3 className="text-3xl font-bold mb-4">Request Received</h3>
                                <p className="text-teal-100 mb-8 max-w-xl mx-auto">
                                    Thank you. Your consultation request has been received. Our treasury experts will review your requirements and contact you shortly.
                                </p>
                                <button
                                    onClick={() => { setConsultationFormStatus('idle'); setShowConsultationForm(false); }}
                                    className="text-teal-200 hover:text-white underline"
                                >
                                    Close
                                </button>
                            </div>
                        ) : (
                            <div className="relative z-10 max-w-2xl mx-auto text-left animate-fade-in">
                                <div className="flex justify-between items-center mb-8 border-b border-teal-800 pb-4">
                                    <h3 className="text-2xl font-bold text-white flex items-center">
                                        <Globe size={24} className="mr-3 text-teal-400" /> Treasury Consultation
                                    </h3>
                                    <button onClick={() => setShowConsultationForm(false)} className="text-teal-400 hover:text-white transition-colors bg-teal-800/50 p-2 rounded-full"><X size={20} /></button>
                                </div>
                                <form onSubmit={handleConsultationSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-teal-200 mb-2">Full Name</label>
                                            <input name="fullName" required type="text" className="w-full px-4 py-3 rounded-lg bg-teal-800 border border-teal-700 text-white placeholder-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all" placeholder="John Doe" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-teal-200 mb-2">Work Email</label>
                                            <input name="email" required type="email" className="w-full px-4 py-3 rounded-lg bg-teal-800 border border-teal-700 text-white placeholder-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all" placeholder="john@company.com" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-teal-200 mb-2">Company Name</label>
                                            <input name="companyName" type="text" className="w-full px-4 py-3 rounded-lg bg-teal-800 border border-teal-700 text-white placeholder-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all" placeholder="Company Ltd." />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-teal-200 mb-2">Focus Area</label>
                                            <div className="relative">
                                                <select name="focusArea" className="w-full px-4 py-3 rounded-lg bg-teal-800 border border-teal-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent appearance-none transition-all cursor-pointer">
                                                    <option>Cash Flow Optimization</option>
                                                    <option>Banking Strategy</option>
                                                    <option>Risk Management</option>
                                                    <option>Treasury Technology</option>
                                                    <option>General Consultation</option>
                                                </select>
                                                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-teal-400">
                                                    <ChevronRight size={16} className="rotate-90" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-teal-200 mb-2">Specific Challenges (Optional)</label>
                                        <textarea name="challenges" rows={3} className="w-full px-4 py-3 rounded-lg bg-teal-800 border border-teal-700 text-white placeholder-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all resize-none" placeholder="Describe your current treasury challenges..."></textarea>
                                    </div>

                                    <div className="flex justify-end pt-2">
                                        <button
                                            type="submit"
                                            disabled={consultationFormStatus === 'submitting'}
                                            className="px-8 py-3 bg-white text-teal-900 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg flex items-center disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {consultationFormStatus === 'submitting' ? (
                                                <>Processing <Loader2 size={18} className="ml-2 animate-spin" /></>
                                            ) : (
                                                <>Request Consultation <Send size={18} className="ml-2" /></>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    // Specific detail view for VFO / CFO Services
    if (selectedService === 'VFO / CFO Services') {
        return (
            <div className="pt-24 pb-12 bg-gray-50 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <button
                        onClick={() => setSelectedService(null)}
                        className="flex items-center text-teal-600 hover:text-teal-800 mb-8 transition-colors"
                    >
                        <ArrowLeft size={20} className="mr-2" /> Back to Services
                    </button>

                    <div className="text-center mb-16 animate-fade-in">
                        <div className="inline-block p-4 rounded-full bg-teal-100 text-teal-700 mb-4">
                            <Briefcase size={32} />
                        </div>
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">VFO / CFO Services</h2>
                        <p className="mt-4 text-xl text-teal-600 font-medium">Strategic Controllership & Venture Support</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                        {/* Card 1: Venture Fund Office */}
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-teal-500 hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full">
                            <div className="bg-teal-50 p-8 border-b border-teal-100">
                                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-teal-600 mb-4">
                                    <Zap size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Venture Fund Office (VFO)</h3>
                            </div>
                            <div className="p-8 flex-grow">
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Comprehensive support for venture funds throughout the entire investment lifecycle, ensuring rigorous evaluation and management.
                                </p>
                                <ul className="space-y-4 text-sm text-gray-700">
                                    <li className="flex items-start"><CheckCircle size={16} className="text-teal-500 mr-2 mt-0.5 shrink-0" /> <span><strong>Deal Flow Management:</strong> Screening and initial evaluation.</span></li>
                                    <li className="flex items-start"><CheckCircle size={16} className="text-teal-500 mr-2 mt-0.5 shrink-0" /> <span><strong>Due Diligence:</strong> Deep financial and operational checks.</span></li>
                                    <li className="flex items-start"><CheckCircle size={16} className="text-teal-500 mr-2 mt-0.5 shrink-0" /> <span><strong>Portfolio Management:</strong> Monitoring investee performance.</span></li>
                                    <li className="flex items-start"><CheckCircle size={16} className="text-teal-500 mr-2 mt-0.5 shrink-0" /> <span><strong>Exit Strategy:</strong> Planning and executing successful exits.</span></li>
                                </ul>
                            </div>
                        </div>

                        {/* Card 2: Chief Future Officer */}
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-teal-500 hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full">
                            <div className="bg-teal-50 p-8 border-b border-teal-100">
                                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-teal-600 mb-4">
                                    <Lightbulb size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Chief Future Officer</h3>
                            </div>
                            <div className="p-8 flex-grow">
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Strategic foresight and sustainable growth planning to navigate future uncertainties and capitalize on emerging opportunities.
                                </p>
                                <ul className="space-y-4 text-sm text-gray-700">
                                    <li className="flex items-start"><CheckCircle size={16} className="text-teal-500 mr-2 mt-0.5 shrink-0" /> <span><strong>Strategic Planning:</strong> Long-term vision and roadmap.</span></li>
                                    <li className="flex items-start"><CheckCircle size={16} className="text-teal-500 mr-2 mt-0.5 shrink-0" /> <span><strong>Scenario Planning:</strong> Modelling potential market shifts.</span></li>
                                    <li className="flex items-start"><CheckCircle size={16} className="text-teal-500 mr-2 mt-0.5 shrink-0" /> <span><strong>Risk Management:</strong> Identifying and mitigating future threats.</span></li>
                                    <li className="flex items-start"><CheckCircle size={16} className="text-teal-500 mr-2 mt-0.5 shrink-0" /> <span><strong>Sustainability (ESG):</strong> Integrating environmental & social goals.</span></li>
                                </ul>
                            </div>
                        </div>

                        {/* Card 3: Controllership As A Service */}
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-teal-500 hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full">
                            <div className="bg-teal-50 p-8 border-b border-teal-100">
                                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-teal-600 mb-4">
                                    <ShieldCheck size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Controllership (CAAS)</h3>
                            </div>
                            <div className="p-8 flex-grow">
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Professional finance management without the full-time overhead, ensuring compliance and freeing leadership to focus on growth.
                                </p>
                                <ul className="space-y-4 text-sm text-gray-700">
                                    <li className="flex items-start"><CheckCircle size={16} className="text-teal-500 mr-2 mt-0.5 shrink-0" /> <span><strong>Routine Management:</strong> Handling day-to-day finance ops.</span></li>
                                    <li className="flex items-start"><CheckCircle size={16} className="text-teal-500 mr-2 mt-0.5 shrink-0" /> <span><strong>Statutory Compliance:</strong> Timely filing and adherence to laws.</span></li>
                                    <li className="flex items-start"><CheckCircle size={16} className="text-teal-500 mr-2 mt-0.5 shrink-0" /> <span><strong>Founder Freedom:</strong> Reducing financial burden on founders.</span></li>
                                    <li className="flex items-start"><CheckCircle size={16} className="text-teal-500 mr-2 mt-0.5 shrink-0" /> <span><strong>Project Management:</strong> Specific financial project execution.</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="bg-teal-900 rounded-2xl p-12 text-center text-white relative overflow-hidden transition-all duration-500 ease-in-out">
                        {/* Decorative background element */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-800 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>

                        {!showPartnerForm && partnerFormStatus !== 'success' ? (
                            <div className="relative z-10 animate-fade-in">
                                <h3 className="text-2xl font-bold mb-4">Scale with Strategic Financial Leadership</h3>
                                <p className="text-teal-100 mb-8 max-w-2xl mx-auto">
                                    Whether you need venture support, a forward-looking strategy, or robust financial controls, our VFO & CFO services provide the expertise you need without the full-time cost.
                                </p>
                                <button
                                    onClick={() => setShowPartnerForm(true)}
                                    className="inline-block bg-white text-teal-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg"
                                >
                                    Partner with Us
                                </button>
                            </div>
                        ) : partnerFormStatus === 'success' ? (
                            <div className="relative z-10 animate-fade-in py-12">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                                    <CheckCircle size={32} />
                                </div>
                                <h3 className="text-3xl font-bold mb-4">Message Sent</h3>
                                <p className="text-teal-100 mb-8 max-w-xl mx-auto">
                                    Thank you for your interest. We're excited about the possibility of partnering with you. A member of our strategic team will reach out shortly.
                                </p>
                                <button
                                    onClick={() => { setPartnerFormStatus('idle'); setShowPartnerForm(false); }}
                                    className="text-teal-200 hover:text-white underline"
                                >
                                    Close
                                </button>
                            </div>
                        ) : (
                            <div className="relative z-10 max-w-2xl mx-auto text-left animate-fade-in">
                                <div className="flex justify-between items-center mb-8 border-b border-teal-800 pb-4">
                                    <h3 className="text-2xl font-bold text-white flex items-center">
                                        <Users size={24} className="mr-3 text-teal-400" /> Strategic Partnership Inquiry
                                    </h3>
                                    <button onClick={() => setShowPartnerForm(false)} className="text-teal-400 hover:text-white transition-colors bg-teal-800/50 p-2 rounded-full"><X size={20} /></button>
                                </div>
                                <form onSubmit={handlePartnerSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-teal-200 mb-2">Full Name</label>
                                            <input name="fullName" required type="text" className="w-full px-4 py-3 rounded-lg bg-teal-800 border border-teal-700 text-white placeholder-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all" placeholder="Jane Smith" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-teal-200 mb-2">Work Email</label>
                                            <input name="email" required type="email" className="w-full px-4 py-3 rounded-lg bg-teal-800 border border-teal-700 text-white placeholder-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all" placeholder="jane@venture.com" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-teal-200 mb-2">Company / Fund Name</label>
                                            <input name="companyName" type="text" className="w-full px-4 py-3 rounded-lg bg-teal-800 border border-teal-700 text-white placeholder-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all" placeholder="Venture Capital Partners" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-teal-200 mb-2">Interest Area</label>
                                            <div className="relative">
                                                <select name="interestArea" className="w-full px-4 py-3 rounded-lg bg-teal-800 border border-teal-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent appearance-none transition-all cursor-pointer">
                                                    <option>Venture Fund Office (VFO)</option>
                                                    <option>Chief Future Officer Services</option>
                                                    <option>Controllership As A Service (CAAS)</option>
                                                    <option>General Strategic Partnership</option>
                                                </select>
                                                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-teal-400">
                                                    <ChevronRight size={16} className="rotate-90" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-teal-200 mb-2">How can we help? (Optional)</label>
                                        <textarea name="details" rows={3} className="w-full px-4 py-3 rounded-lg bg-teal-800 border border-teal-700 text-white placeholder-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all resize-none" placeholder="Looking for support with portfolio management..."></textarea>
                                    </div>

                                    <div className="flex justify-end pt-2">
                                        <button
                                            type="submit"
                                            disabled={partnerFormStatus === 'submitting'}
                                            className="px-8 py-3 bg-white text-teal-900 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg flex items-center disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {partnerFormStatus === 'submitting' ? (
                                                <>Processing <Loader2 size={18} className="ml-2 animate-spin" /></>
                                            ) : (
                                                <>Request Partnership <Send size={18} className="ml-2" /></>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    // Specific detail view for Business Finance & FP&A
    if (selectedService === 'Business Finance & FP&A') {
        return (
            <div className="pt-24 pb-12 bg-gray-50 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <button
                        onClick={() => setSelectedService(null)}
                        className="flex items-center text-teal-600 hover:text-teal-800 mb-8 transition-colors"
                    >
                        <ArrowLeft size={20} className="mr-2" /> Back to Services
                    </button>

                    <div className="text-center mb-16 animate-fade-in">
                        <div className="inline-block p-4 rounded-full bg-teal-100 text-teal-700 mb-4">
                            <BarChart3 size={32} />
                        </div>
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Business Finance & FP&A</h2>
                        <p className="mt-4 text-xl text-teal-600 font-medium">Ever-Changing Roles of Financial Planning & Analysis</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {[
                            { title: "Business Intelligence Dashboards", icon: Layout },
                            { title: "Developing Business Plans, Scenario Modelling & Financial Budgets", icon: TrendingUp },
                            { title: "Business Partnering", icon: Users },
                            { title: "Margin and Break-even Assessments", icon: Target },
                            { title: "Examination of Unit Economics", icon: Scale },
                            { title: "Strategies for Enhancing Profitability & Valuation", icon: Gem },
                            { title: "Business Transformation", icon: Zap },
                            { title: "Advanced MIS Reporting Pivots", icon: FileText }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-xl hover:border-teal-200 transition-all group">
                                <div className="bg-teal-50 w-12 h-12 rounded-lg flex items-center justify-center text-teal-600 mb-4 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 group-hover:text-teal-700 transition-colors">{item.title}</h3>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                        <div className="grid md:grid-cols-2">
                            <div className="bg-teal-900 text-white p-12 flex flex-col justify-center">
                                <h3 className="text-2xl font-bold mb-4">Trusted Financial Advisor</h3>
                                <p className="text-teal-100 mb-6 leading-relaxed">
                                    Providing financial direction for an Organization. We focus on:
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center"><CheckCircle size={18} className="text-teal-400 mr-2" /> Strategic Planning</li>
                                    <li className="flex items-center"><CheckCircle size={18} className="text-teal-400 mr-2" /> Pricing Strategy / Product Pricing</li>
                                    <li className="flex items-center"><CheckCircle size={18} className="text-teal-400 mr-2" /> Risk Assessment</li>
                                    <li className="flex items-center"><CheckCircle size={18} className="text-teal-400 mr-2" /> Resource Allocation</li>
                                    <li className="flex items-center"><CheckCircle size={18} className="text-teal-400 mr-2" /> Investment Decisions</li>
                                    <li className="flex items-center"><CheckCircle size={18} className="text-teal-400 mr-2" /> Expansion Opportunities</li>
                                    <li className="flex items-center"><CheckCircle size={18} className="text-teal-400 mr-2" /> Project Evaluation</li>
                                </ul>
                            </div>
                            <div className="relative h-64 md:h-auto">
                                <img
                                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                                    alt="Financial Analysis"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Specific detail view for Forensic Services
    if (selectedService === 'Forensic Services') {
        return (
            <div className="pt-24 pb-12 bg-gray-50 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <button
                        onClick={() => setSelectedService(null)}
                        className="flex items-center text-teal-600 hover:text-teal-800 mb-8 transition-colors"
                    >
                        <ArrowLeft size={20} className="mr-2" /> Back to Services
                    </button>

                    <div className="text-center mb-16 animate-fade-in">
                        <div className="inline-block p-4 rounded-full bg-teal-100 text-teal-700 mb-4">
                            <Search size={32} />
                        </div>
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Forensic Services</h2>
                        <p className="mt-4 text-xl text-teal-600 font-medium">Under Our Lens: "Forensic"</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {[
                            {
                                title: "Pre Diligence / Digital Forensic",
                                icon: Search,
                                desc: "Leveraging technology to detect fraud, identify anomalies, and perform deep-dive investigations into digital trails."
                            },
                            {
                                title: "Policy Advice",
                                icon: FileText,
                                desc: "Reviewing and formulating robust anti-fraud policies and frameworks to safeguard organizational integrity."
                            },
                            {
                                title: "Litigation Support",
                                icon: Scale,
                                desc: "Providing concrete, data-backed evidence and expert witness support for financial disputes and legal proceedings."
                            },
                            {
                                title: "Compliance",
                                icon: CheckCircle,
                                desc: "Ensuring adherence to regulatory requirements and internal standards through rigorous forensic audits."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-teal-500 hover:shadow-xl transition-shadow group">
                                <div className="flex items-start mb-4">
                                    <div className="bg-teal-50 p-3 rounded-lg text-teal-700 mr-4 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                                        <item.icon size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                        <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-teal-900 rounded-2xl p-12 text-center text-white relative overflow-hidden transition-all duration-500 ease-in-out">
                        {/* Decorative background element */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-800 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>

                        {!showForensicForm && formStatus !== 'success' ? (
                            <div className="relative z-10 animate-fade-in">
                                <h3 className="text-2xl font-bold mb-4">Safeguard Your Business Integrity</h3>
                                <p className="text-teal-100 mb-8 max-w-2xl mx-auto">
                                    In an increasingly digital world, the footprint of fraud has changed. Our forensic experts help you detect, prevent, and resolve financial irregularities with precision.
                                </p>
                                <button
                                    onClick={() => setShowForensicForm(true)}
                                    className="inline-block bg-white text-teal-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg"
                                >
                                    Request a Forensic Review
                                </button>
                            </div>
                        ) : formStatus === 'success' ? (
                            <div className="relative z-10 animate-fade-in py-12">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                                    <CheckCircle size={32} />
                                </div>
                                <h3 className="text-3xl font-bold mb-4">Request Received</h3>
                                <p className="text-teal-100 mb-8 max-w-xl mx-auto">
                                    Thank you. Your request for a forensic review has been securely received. Our specialized team will review your details and contact you shortly to discuss next steps.
                                </p>
                                <button
                                    onClick={() => { setFormStatus('idle'); setShowForensicForm(false); }}
                                    className="text-teal-200 hover:text-white underline"
                                >
                                    Close
                                </button>
                            </div>
                        ) : (
                            <div className="relative z-10 max-w-2xl mx-auto text-left animate-fade-in">
                                <div className="flex justify-between items-center mb-8 border-b border-teal-800 pb-4">
                                    <h3 className="text-2xl font-bold text-white flex items-center">
                                        <Search size={24} className="mr-3 text-teal-400" /> Request Forensic Review
                                    </h3>
                                    <button onClick={() => setShowForensicForm(false)} className="text-teal-400 hover:text-white transition-colors bg-teal-800/50 p-2 rounded-full"><X size={20} /></button>
                                </div>
                                <form onSubmit={handleForensicSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-teal-200 mb-2">Full Name</label>
                                            <input name="fullName" required type="text" className="w-full px-4 py-3 rounded-lg bg-teal-800 border border-teal-700 text-white placeholder-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all" placeholder="John Doe" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-teal-200 mb-2">Work Email</label>
                                            <input name="email" required type="email" className="w-full px-4 py-3 rounded-lg bg-teal-800 border border-teal-700 text-white placeholder-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all" placeholder="john@company.com" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-teal-200 mb-2">Company Name</label>
                                            <input name="companyName" type="text" className="w-full px-4 py-3 rounded-lg bg-teal-800 border border-teal-700 text-white placeholder-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all" placeholder="Company Ltd." />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-teal-200 mb-2">Review Type</label>
                                            <div className="relative">
                                                <select name="reviewType" className="w-full px-4 py-3 rounded-lg bg-teal-800 border border-teal-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent appearance-none transition-all cursor-pointer">
                                                    <option>Digital Forensic Investigation</option>
                                                    <option>Litigation Support</option>
                                                    <option>Policy & Framework Review</option>
                                                    <option>Compliance Audit</option>
                                                    <option>Other / Unsure</option>
                                                </select>
                                                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-teal-400">
                                                    <ChevronRight size={16} className="rotate-90" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-teal-200 mb-2">Brief Details (Optional)</label>
                                        <textarea name="details" rows={3} className="w-full px-4 py-3 rounded-lg bg-teal-800 border border-teal-700 text-white placeholder-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all resize-none" placeholder="Please describe your requirements briefly..."></textarea>
                                    </div>

                                    <div className="flex justify-end pt-2">
                                        <button
                                            type="submit"
                                            disabled={formStatus === 'submitting'}
                                            className="px-8 py-3 bg-white text-teal-900 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg flex items-center disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {formStatus === 'submitting' ? (
                                                <>Processing <Loader2 size={18} className="ml-2 animate-spin" /></>
                                            ) : (
                                                <>Submit Request <Send size={18} className="ml-2" /></>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-12 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Our Expertise</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Comprehensive Financial Solutions
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                        From the "whole 9 yards" of Finance to specialized advisory, we cover it all.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer"
                            onClick={() => setSelectedService(service.title)}
                        >
                            <div className="p-6">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white mb-4">
                                    <service.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                                <p className="text-gray-600 mb-4 h-12">{service.desc}</p>
                                <div className="flex items-center text-sm text-teal-600 font-medium">
                                    Learn more <ChevronRight size={16} className="ml-1" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
