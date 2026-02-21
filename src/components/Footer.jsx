import React from 'react';
import { MapPin, Mail, Phone, Copyright, Linkedin, Twitter } from 'lucide-react';

const Footer = ({ navigateTo }) => {
    return (
        <footer className="bg-gray-100 text-gray-900 border-t border-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-1">
                        <img
                            src="/bg remove logo.png"
                            alt="Delta One Advisory"
                            className="h-30 w-auto object-contain -mt-6 -mb-6"
                        />
                        <p className="text-gray-600 text-base leading-relaxed mb-6">
                            Your strategic partner for financial transformation and sustainable growth. We are the “Rate of Change”; turning complexity into clarity, challenges into opportunities and vision into measurable results.
                        </p>
                        <div className="flex space-x-4">
                            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-gray-600 hover:bg-teal-600 hover:text-white transition-colors cursor-pointer">
                                <Linkedin size={16} />
                            </div>
                            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-gray-600 hover:bg-teal-600 hover:text-white transition-colors cursor-pointer">
                                <Twitter size={16} />
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-base font-semibold text-teal-600 uppercase tracking-wider mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {[
                                { name: 'Home', id: 'home' },
                                { name: 'About Us', id: 'about' },
                                { name: 'Services', id: 'services' },
                                { name: 'Methodology', id: 'methodology' },
                                { name: 'Industries', id: 'industries' },
                                { name: 'Contact', id: 'contact' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <button
                                        onClick={() => navigateTo(link.id)}
                                        className="text-gray-600 hover:text-teal-600 text-base transition-colors text-left"
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Core Services */}
                    <div>
                        <h3 className="text-base font-semibold text-teal-600 uppercase tracking-wider mb-4">Core Services</h3>
                        <ul className="space-y-2">
                            {['CFO Services', 'Treasury Management', 'Forensic Services', 'Strategic Advisory', 'Business Finance'].map((item) => (
                                <li key={item}>
                                    <button onClick={() => navigateTo('services')} className="text-gray-600 hover:text-teal-600 text-base transition-colors text-left">
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-base font-semibold text-teal-600 uppercase tracking-wider mb-4">Contact Us</h3>
                        <ul className="space-y-3 text-base text-gray-600">
                            <li className="flex items-start">
                                <MapPin size={16} className="text-teal-600 mr-2 mt-0.5 shrink-0" />
                                <span>Bangalore (HQ), Chennai, Kochi</span>
                            </li>
                            <li className="flex items-center">
                                <Mail size={16} className="text-teal-600 mr-2 shrink-0" />
                                <a href="mailto:connect@deltaoneadvisory.com" className="hover:text-teal-600 transition-colors">connect@deltaoneadvisory.com</a>
                            </li>
                            <li className="flex items-start">
                                <Phone size={16} className="text-teal-600 mr-2 mt-0.5 shrink-0" />
                                <div className="flex flex-col space-y-1">
                                    <span>+91 98451 56275</span>
                                    <span>+91 98866 67940</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-base text-gray-500">
                    <div className="flex items-center">
                        <Copyright size={14} className="mr-1" /> {new Date().getFullYear()} Delta One Advisory. All Rights Reserved.
                    </div>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <span className="hover:text-gray-900 cursor-pointer">Privacy Policy</span>
                        <span className="hover:text-gray-900 cursor-pointer">Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
