import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Phone, Mail, MapPin, Send, User, Globe } from 'lucide-react';

function ContactUs() {
    const formRef = useRef(null);
    const [status, setStatus] = useState(''); // '' | 'success' | 'error'
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus('');

        // Optional: add submission timestamp (useful in email)
        const form = formRef.current;
        const timeInput = document.createElement('input');
        timeInput.type = 'hidden';
        timeInput.name = 'time';
        timeInput.value = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
        form.appendChild(timeInput);

        emailjs
            .sendForm(
                'service_ojvsfkq',          // ← your Service ID
                'template_rxezktf',         // ← your Template ID
                form,
                '26AV_mTAOSpstAUsk'         // ← your Public Key
            )
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setStatus('success');
                    form.reset();
                },
                (err) => {
                    console.error('FAILED...', err);
                    setStatus('error');
                }
            )
            .finally(() => {
                setIsLoading(false);
                if (timeInput.parentNode) form.removeChild(timeInput); // cleanup
            });
    };

    return (
        <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
                        Contact Us
                    </h2>
                    <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Let's Start a Conversation
                    </p>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        We're here to help. Reach out to us and we'll get back to you shortly.
                    </p>
                </div>

                {/* Main Card */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 min-h-[580px]">
                    {/* Left - Contact Info */}
                    <div className="lg:col-span-1 bg-teal-900 text-white p-8 md:p-10 flex flex-col justify-between relative">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                            <p className="text-teal-100 mb-10 leading-relaxed">
                                We are happy to answer any questions you have or provide you with an estimate.
                            </p>

                            <div className="space-y-7">
                                <div className="flex items-start gap-4">
                                    <Phone className="h-6 w-6 text-teal-300 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium">+91 98451 56275</p>
                                        <p className="text-teal-200 text-sm">(Binoo Krishna)</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Phone className="h-6 w-6 text-teal-300 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium">+91 98866 67940</p>
                                        <p className="text-teal-200 text-sm">(Shruthi B.N)</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Mail className="h-6 w-6 text-teal-300 mt-1 flex-shrink-0" />
                                    <p className="font-medium break-all">
                                        connect@deltaoneadvisory.com
                                    </p>
                                </div>

                                <div className="flex items-start gap-4">
                                    <MapPin className="h-6 w-6 text-teal-300 mt-1 flex-shrink-0" />
                                    <p className="font-medium">
                                        Bangalore (HQ), Chennai, Kochi
                                    </p>
                                </div>
                            </div>

                            {/* WhatsApp Button */}
                            <a
                                href="https://wa.me/919845156275?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20Delta%20One%20Advisory%20services."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-10 inline-flex items-center gap-3 px-6 py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl transition-colors shadow-md"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    fill="currentColor"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Right - Form – now with Phone & Location mandatory */}
                    <div className="lg:col-span-2 p-8 md:p-12 bg-white">
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-7">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1.5">
                                        First Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        required
                                        type="text"
                                        className="block w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 text-gray-900 placeholder-gray-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                                        placeholder="First Name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1.5">
                                        Last Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        required
                                        type="text"
                                        className="block w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 text-gray-900 placeholder-gray-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                                        placeholder="Last Name"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        required
                                        type="email"
                                        className="block w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 text-gray-900 placeholder-gray-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                                        placeholder="you@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                                        Phone Number <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="phone"
                                        name="phone"
                                        required
                                        type="tel"
                                        pattern="[0-9]{10}" // basic Indian number validation – adjust as needed
                                        title="Please enter a valid 10-digit phone number"
                                        className="block w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 text-gray-900 placeholder-gray-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                                        placeholder="+91 98765 43210"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1.5">
                                    Location / City <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="location"
                                    name="location"
                                    required
                                    type="text"
                                    className="block w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 text-gray-900 placeholder-gray-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                                    placeholder="e.g. Bengaluru, Karnataka"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                                    Message <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    className="block w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 text-gray-900 placeholder-gray-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all resize-none"
                                    placeholder="How can we help you today?"
                                />
                            </div>

                            {/* Status messages */}
                            {status === 'success' && (
                                <div className="p-4 bg-green-100 text-green-800 rounded-xl text-center font-medium">
                                    Thank you! Your message has been sent successfully.
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="p-4 bg-red-100 text-red-800 rounded-xl text-center font-medium">
                                    Sorry, something went wrong. Please try again later.
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`w-full py-4 px-6 text-white font-semibold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 ${isLoading ? 'bg-teal-400 cursor-not-allowed' : 'bg-teal-600 hover:bg-teal-700'
                                    }`}
                            >
                                {isLoading ? 'Sending...' : 'Send Message'}
                                {!isLoading && <Send className="h-5 w-5" />}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;