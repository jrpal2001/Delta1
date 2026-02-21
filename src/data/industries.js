
import {
    Sprout,
    Stethoscope,
    Cpu,
    Factory,
    ShoppingBag,
    Truck
} from 'lucide-react';

export const industries = [
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
