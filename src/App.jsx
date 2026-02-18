import React, { useState, useEffect } from 'react';
import {
  Briefcase,
  TrendingUp,
  ShieldCheck,
  Search,
  Menu,
  X,
  ChevronRight,
  MapPin,
  Mail,
  Phone,
  Award,
  BarChart3,
  Globe,
  Users,
  Target,
  ArrowRight,
  Copyright,
  Quote,
  FileText,
  Calendar,
  Linkedin,
  Twitter,
  CheckCircle,
  Layers,
  Send,
  Zap,
  Activity,
  Settings,
  Loader2,
  ArrowLeft,
  ArrowRightLeft,
  PenTool,
  Gem,
  Landmark,
  Scale,
  LineChart,
  PieChart,
  Lightbulb,
  MonitorCheck,
  Banknote,
  AlertTriangle,
  Layout,
  Tag,
  BookOpen,
  FileCheck,
  Factory,
  Stethoscope,
  Cpu,
  ShoppingBag,
  Sprout,
  Truck,
  RefreshCw,
  GitMerge
} from 'lucide-react';
import logo from "./assets/logo.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.png";
import ContactUs from './ContactUs';
import LogoIcon from "./Logo";
import FooterLogoIcon from "./FooterLogo";
import DeltaOnePromise from './DeltaOnePromise';
import WePromise from './WePromise';
import Founders from './Founders';
// --- Data ---

const industries = [
  {
    id: 'agri',
    title: "Agri-Business & Food",
    icon: Sprout,
    desc: "From farm-to-fork strategy to working capital for seasonal cycles.",
    details: ["Supply Chain Optimization", "Seasonal Cash Flow Management", "Export Compliance & Trade Finance"]
  },
  {
    id: 'healthcare',
    title: "Healthcare & Pharma",
    icon: Stethoscope,
    desc: "Managing high capex requirements and regulatory compliances.",
    details: ["Hospital Management Systems", "Capex Planning & Funding", "Regulatory Compliance (NABH/JCI)"]
  },
  {
    id: 'tech',
    title: "Technology & SaaS",
    icon: Cpu,
    desc: "Scaling startups with unit economics and valuation expertise.",
    details: ["SaaS Metrics (CAC, LTV, Churn)", "Fundraising & Valuation", "ESOP Structuring"]
  },
  {
    id: 'manufacturing',
    title: "Manufacturing",
    icon: Factory,
    desc: "Cost control, inventory optimization, and factory accounting.",
    details: ["Cost Accounting & Control", "Inventory Turnover Optimization", "Factory Compliance & Labor Laws"]
  },
  {
    id: 'retail',
    title: "Retail & FMCG",
    icon: ShoppingBag,
    desc: "Driving profitability through pricing and inventory strategies.",
    details: ["Franchise Model Financials", "Store-level P&L Analysis", "Working Capital Cycles"]
  },
  {
    id: 'logistics',
    title: "Logistics & Infra",
    icon: Truck,
    desc: "Project finance and asset utilization for capital-intensive sectors.",
    details: ["Asset Utilization Analysis", "Project Finance & Syndication", "Fuel & Fleet Cost Management"]
  }
];

// --- Shared Components ---

const WhatsAppButton = () => {
  const phoneNumber = "919845156275"; // Binoo Krishna's number
  const message = "Hello, I would like to know more about Delta One Advisory services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute right-full mr-3 bg-gray-900 text-white text-xs font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
      <svg
        viewBox="0 0 24 24"
        width="32"
        height="32"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="fill-current stroke-none"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
};

const SplashScreen = ({ onFinish }) => {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFading(true), 2000);
    const finishTimer = setTimeout(() => onFinish(), 3000);
    return () => { clearTimeout(timer); clearTimeout(finishTimer); };
  }, [onFinish]);

  return (
    <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0B1F1C] transition-opacity duration-1000 ease-in-out ${fading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className={`text-center transition-all duration-1000 transform ${fading ? 'scale-110' : 'scale-100'}`}>
        <img
          src={logo3}
          alt="Delta One Advisory"
          className="h-32 md:h-50 mb-6 mx-auto animate-pulse"
          style={{
            filter: `
            drop-shadow(0 0 6px rgba(0, 200, 170, 0.45))
            drop-shadow(0 0 18px rgba(0, 200, 170, 0.25))`
          }}
        />
        {/* <p className="text-teal-100 text-lg md:text-xl font-light tracking-[0.2em] uppercase">
          Bespoke. Insights. Value.
        </p> */}
      </div>
    </div>
  );
};

const Navbar = ({ currentPage, navigateTo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Methodology', id: 'methodology' },
    { name: 'Industries', id: 'industries' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id) => {
    navigateTo(id);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 bg-teal-50 ${isScrolled || currentPage !== 'home' ? 'shadow-md py-1' : 'py-2'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[4rem]">
          <div
            className="flex-shrink-0 flex items-center cursor-pointer group"
            onClick={() => handleNavClick("home")}
          >
            <div className="leading-none">

              {/* ===== MAIN BRAND ===== */}
              <img
                src="/bg remove logo.png"
                alt="Delta One Advisory"
                className="h-19 md:h-28 w-auto object-contain"
              />
            </div>
          </div>

          {/* <LogoIcon /> */}


          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.id)}
                className={`text-[15px] font-medium transition-colors hover:text-teal-500 ${currentPage === link.id ? 'text-teal-600 font-bold' : 'text-gray-700'
                  }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl absolute w-full top-16 left-0 border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.id)}
                className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md ${currentPage === link.id ? 'text-teal-600 bg-teal-50' : 'text-gray-700 hover:text-teal-600 hover:bg-gray-50'}`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = ({ navigateTo }) => {
  return (
    <footer className="bg-gray-100 text-gray-900 border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            {/* <span className="text-xl font-bold tracking-tight text-white block mb-4">
              DELTA ONE <span className="text-teal-500">ADVISORY</span>
            </span> */}
            {/* <FooterLogoIcon /> */}
            <img
              src="/bg remove logo.png"
              alt="Delta One Advisory"
              className="h-30 w-auto object-contain -mt-6 -mb-6"
            />
            {/* <img src={logo} alt="Delta One Advisory Logo" className="h-12 mb-4" /> */}
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

// --- Page Components ---

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

  const services = [
    { title: "VFO / CFO Services", icon: Briefcase, desc: "CAAS, Financial Burden Reduction, Project-based Management", color: "text-teal-400" },
    { title: "Treasury Management", icon: Globe, desc: "Working Capital, Trade Finance, Banking Strategy", color: "text-blue-400" },
    { title: "Business Finance & FP&A", icon: BarChart3, desc: "Strategic Planning, MIS Pivots, Unit Economics", color: "text-purple-400" },
    { title: "Forensic Services", icon: Search, desc: "Litigation Support, Pre-diligence, Digital Forensic", color: "text-pink-400" },
    { title: "Strategic Advisory", icon: TrendingUp, desc: "Capital & M&A Advisory, IPO Readiness, Risk Management", color: "text-orange-400" },
    { title: "Accounting & Control", icon: ShieldCheck, desc: "SOPs, Internal Controls, Audit Coordination", color: "text-green-400" }
  ];

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
      <WePromise />

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
                    <p>A seasoned finance leader with 25+ years of cross-industry expertise spanning Big Four advisory, corporate treasury leadership, and C-suite roles.</p>
                    <p>As Group CFO at Namdhari's Group, Binoo led finance transformation across four companies and managed a US acquisition. At United Spirits-Diageo, he revolutionized cash management, implementing India's first paperless banking solution in the alcobev sector and restructuring global debt.</p>
                    <p>His foundation at Deloitte (including stints in San Jose and Singapore) developed expertise in risk-based audits, US GAAP/IFRS, and high-technology clients. He has also guided startups through CFO services, IPO readiness, and fundraising.</p>
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
                    <p><span className="font-bold text-gray-900">Academic Excellence:</span> All India 10th Rank (CA Final - Best Lady Candidate), All India 2nd Rank (CA Inter) with two Gold Medals.</p>
                  </div>
                </div>
                {/* <div>
                  <div className="flex items-center text-teal-700 font-bold text-xs uppercase tracking-wider mb-2"><Award size={14} className="mr-2" /> Qualification</div>
                  <p className="text-gray-700">Gold Medalist & Rank Holder Chartered Accountant.</p>
                </div> */}
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

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const subject = "Contact Inquiry from Website";
    const body = `Name: ${data.firstName} ${data.lastName}\nEmail: ${data.email}\n\nMessage:\n${data.message}`;

    window.location.href = `mailto:connect@deltaoneadvisory.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <ContactUs />
    // <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="text-center mb-16 animate-fade-in">
    //       <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Contact Us</h2>
    //       <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Let's Start a Conversation</p>
    //     </div>
    //     <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 bg-white rounded-3xl shadow-2xl overflow-hidden min-h-[600px]">
    //       <div className="lg:col-span-1 bg-teal-900 text-white p-10 flex flex-col justify-between relative overflow-hidden">
    //         <div className="relative z-10">
    //           <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
    //           <p className="text-teal-100 mb-8 leading-relaxed">We are happy to answer any questions you have or provide you with an estimate.</p>
    //           <div className="space-y-6">
    //             <div className="flex items-start"><Phone className="h-6 w-6 text-teal-400 mr-4" /><p className="font-medium">+91 98451 56275 (Binoo Krishna)<br />+91 98866 67940 (Shruthi B.N)</p></div>
    //             <div className="flex items-start"><Mail className="h-6 w-6 text-teal-400 mr-4" /><p className="font-medium">connect@deltaoneadvisory.com</p></div>
    //             <div className="flex items-start"><MapPin className="h-6 w-6 text-teal-400 mr-4" /><p className="font-medium">Bangalore (HQ), Chennai, Kochi</p></div>

    //             <a
    //               href="https://wa.me/919845156275?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20Delta%20One%20Advisory%20services."
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               className="flex items-center text-teal-400 font-bold hover:text-white transition-colors mt-6 p-2 rounded-lg hover:bg-white/10 w-fit"
    //             >
    //               <svg
    //                 viewBox="0 0 24 24"
    //                 width="24"
    //                 height="24"
    //                 fill="currentColor"
    //                 className="mr-3"
    //               >
    //                 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    //               </svg>
    //               Chat on WhatsApp
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="lg:col-span-2 p-10 lg:p-12 bg-white">
    //         <form className="space-y-8" onSubmit={handleSubmit}>
    //           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    //             <input name="firstName" required type="text" className="block w-full rounded-xl border-gray-200 bg-gray-50 p-4" placeholder="First Name" />
    //             <input name="lastName" required type="text" className="block w-full rounded-xl border-gray-200 bg-gray-50 p-4" placeholder="Last Name" />
    //           </div>
    //           <input name="email" required type="email" className="block w-full rounded-xl border-gray-200 bg-gray-50 p-4" placeholder="Email Address" />
    //           <textarea name="message" required rows={4} className="block w-full rounded-xl border-gray-200 bg-gray-50 p-4" placeholder="Message"></textarea>
    //           <button type="submit" className="w-full py-4 border border-transparent rounded-xl shadow-lg text-white bg-teal-600 hover:bg-teal-700 font-bold flex justify-center items-center">Send Message <Send className="ml-2 h-5 w-5" /></button>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

// --- Main App Component ---

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedService, setSelectedService] = useState(null);

  const navigateTo = (pageId) => {
    setCurrentPage(pageId);
    if (pageId !== 'services') setSelectedService(null);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleServiceClick = (serviceTitle) => {
    setSelectedService(serviceTitle);
    setCurrentPage('services');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <>
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      <div className={`font-sans antialiased text-gray-900 bg-white flex flex-col min-h-screen transition-opacity duration-1000 ${showSplash ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar currentPage={currentPage} navigateTo={navigateTo} />

        <main className="flex-grow">
          {currentPage === 'home' && <HomePage navigateTo={navigateTo} onServiceClick={handleServiceClick} />}
          {currentPage === 'about' && <AboutPage />}
          {currentPage === 'services' && <ServicesPage selectedService={selectedService} setSelectedService={setSelectedService} />}
          {currentPage === 'methodology' && <MethodologyPage navigateTo={navigateTo} />}
          {currentPage === 'industries' && <IndustriesPage />}
          {currentPage === 'contact' && <ContactPage />}
        </main>

        <Footer navigateTo={navigateTo} />
        <WhatsAppButton />
      </div>
    </>
  );
}