import React, { useState } from 'react';
import { industries } from '../data/industries';
import { CheckCircle, Loader2, Send, Factory, X } from 'lucide-react';

const IndustriesPage = () => {
    const [showForm, setShowForm] = useState(false);
    const [formStatus, setFormStatus] = useState('idle');

    const handleIndustrySubmit = (e) => {
        e.preventDefault();
        setFormStatus('submitting');

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        const subject = `Industry Specific Inquiry - ${data.industry}`;
        const body = `Name: ${data.fullName}\nEmail: ${data.email}\nCompany: ${data.companyName}\nIndustry/Sector: ${data.industry}\n\nDetails:\n${data.details}`;

        setTimeout(() => {
            setFormStatus('success');
            window.location.href = `mailto:connect@deltaoneadvisory.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        }, 1500);
    };

    return (
        <div className="bg-white min-h-screen pb-12">
            {/* Hero */}
            <div className="pt-32 pb-20 bg-teal-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-fade-in-up">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                        Sector <span className="text-teal-400">Expertise</span>
                    </h1>
                    <p className="text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed font-light">
                        We bring deep domain knowledge to every engagement, ensuring our financial strategies are aligned with industry-specific dynamics and regulatory landscapes.
                    </p>
                </div>
            </div>

            {/* Industry Grid */}
            <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((ind, idx) => (
                        <div key={idx} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow group">
                            <div className="bg-gray-50 p-8 border-b border-gray-100 group-hover:bg-teal-50 transition-colors">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-teal-600 shadow-md mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <ind.icon size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{ind.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{ind.desc}</p>
                            </div>
                            <div className="p-8">
                                <h4 className="text-xs font-bold text-teal-600 uppercase tracking-wider mb-4">Key Focus Areas</h4>
                                <ul className="space-y-3">
                                    {ind.details.map((detail, i) => (
                                        <li key={i} className="flex items-start text-sm text-gray-700">
                                            <CheckCircle size={16} className="text-teal-500 mr-2 mt-0.5 shrink-0" />
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA / Form */}
                <div className="mt-20 bg-teal-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden transition-all duration-500 ease-in-out">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                    {!showForm && formStatus !== 'success' ? (
                        <div className="relative z-10 animate-fade-in">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">Don't see your industry?</h3>
                            <p className="text-teal-100 mb-8 max-w-2xl mx-auto">
                                Our financial principles are universal, but our approach is bespoke. Contact us to discuss how we can tailor our services to your specific business model.
                            </p>
                            <button
                                onClick={() => setShowForm(true)}
                                className="inline-block bg-white text-teal-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg"
                            >
                                Get in Touch
                            </button>
                        </div>
                    ) : formStatus === 'success' ? (
                        <div className="relative z-10 animate-fade-in py-8">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                                <CheckCircle size={32} />
                            </div>
                            <h3 className="text-3xl font-bold mb-4">Inquiry Received</h3>
                            <p className="text-teal-100 mb-8 max-w-xl mx-auto">
                                Thank you for reaching out. We have received your industry-specific inquiry and will connect with you shortly to discuss bespoke solutions.
                            </p>
                            <button
                                onClick={() => { setFormStatus('idle'); setShowForm(false); }}
                                className="text-teal-200 hover:text-white underline"
                            >
                                Close
                            </button>
                        </div>
                    ) : (
                        <div className="relative z-10 max-w-2xl mx-auto text-left animate-fade-in bg-teal-800/50 p-6 md:p-8 rounded-2xl border border-teal-700 backdrop-blur-sm">
                            <div className="flex justify-between items-center mb-6 border-b border-teal-700 pb-4">
                                <h3 className="text-2xl font-bold text-white flex items-center">
                                    <Factory size={24} className="mr-3 text-teal-400" /> Industry Inquiry
                                </h3>
                                <button onClick={() => setShowForm(false)} className="text-teal-400 hover:text-white transition-colors bg-teal-800/50 p-2 rounded-full"><X size={20} /></button>
                            </div>
                            <form onSubmit={handleIndustrySubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-teal-200 mb-2">Full Name</label>
                                        <input name="fullName" required type="text" className="w-full px-4 py-3 rounded-lg bg-teal-900 border border-teal-600 text-white placeholder-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all" placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-teal-200 mb-2">Work Email</label>
                                        <input name="email" required type="email" className="w-full px-4 py-3 rounded-lg bg-teal-900 border border-teal-600 text-white placeholder-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all" placeholder="john@company.com" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-teal-200 mb-2">Company Name</label>
                                        <input name="companyName" type="text" className="w-full px-4 py-3 rounded-lg bg-teal-900 border border-teal-600 text-white placeholder-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all" placeholder="Company Ltd." />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-teal-200 mb-2">Industry / Sector</label>
                                        <div className="relative">
                                            <input name="industry" type="text" list="industry-options" className="w-full px-4 py-3 rounded-lg bg-teal-900 border border-teal-600 text-white placeholder-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all" placeholder="e.g. Fintech, Manufacturing" />
                                            <datalist id="industry-options">
                                                {industries.map(ind => <option key={ind.id} value={ind.title} />)}
                                                <option value="Real Estate" />
                                                <option value="Education" />
                                                <option value="Hospitality" />
                                            </datalist>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-teal-200 mb-2">How can we help? (Optional)</label>
                                    <textarea name="details" rows={3} className="w-full px-4 py-3 rounded-lg bg-teal-900 border border-teal-600 text-white placeholder-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all resize-none" placeholder="Briefly describe your business needs..."></textarea>
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
                                            <>Submit Inquiry <Send size={18} className="ml-2" /></>
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
};

export default IndustriesPage;
