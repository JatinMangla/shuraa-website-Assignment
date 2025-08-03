import {
    Building, Users, Trophy, Globe, Award,
    Building2, Target, CheckCircle, Phone, MessageSquare, Mail, MapPin, TrendingUp
} from 'lucide-react'
import siteData from '../data/siteData'

export const jobOpenings = [
    {
        id: 1,
        title: "Tax Consultant",
        department: "Tax & Accounting",
        location: "Dubai, UAE",
        type: "Full Time",
        experience: "2-5 years",
        requirements: [
            "Bachelor's degree in Commerce/Finance or CA Inter",
            "Proven experience in tax compliance and advisory roles",
            "Strong knowledge of VAT, corporate tax, and excise tax regulations",
            "Excellent communication skills and client relationship management",
            "Sales-driven mindset with ability to identify new business opportunities"
        ],
        responsibilities: [
            "Provide expert tax advice on VAT, corporate tax, transfer pricing, and excise tax",
            "Build and maintain strong relationships with clients",
            "Proactively generate sales by identifying potential clients",
            "Stay updated on current tax laws and regulations",
            "Collaborate with internal teams for seamless service delivery"
        ]
    },
    {
        id: 2,
        title: "Senior Tax Accountant",
        department: "Accounting",
        location: "Dubai, UAE",
        type: "Full Time",
        experience: "3-5 years",
        requirements: [
            "Master of Commerce in Accounting & Finance or CA Inter",
            "1-2 years UAE experience as Senior Accountant",
            "2-3 years experience in Tally and MS Excel",
            "Strong communication, analytical and management skills",
            "Knowledge of UAE VAT and corporate tax"
        ],
        responsibilities: [
            "Prepare accurate financial statements and reports",
            "Ensure compliance with accounting standards and regulations",
            "MIS reporting and financial analysis",
            "Supervise and guide junior accounting staff",
            "Monitor financial transactions and conduct regular audits"
        ]
    },
    {
        id: 3,
        title: "Junior Accountant",
        department: "Accounting",
        location: "Dubai, UAE",
        type: "Full Time",
        experience: "1-2 years",
        requirements: [
            "Bachelor of Commerce in Accounting & Finance or CA Inter",
            "1-2 years experience in Tally Accounting Software and MS Excel",
            "Knowledge of basic accounting principles",
            "Strong communication and analytical skills",
            "Available for immediate start"
        ],
        responsibilities: [
            "Handle accounting entries and daily operations",
            "Maintain digital and physical financial records",
            "Prepare VAT returns and refund applications",
            "Assist in MIS reporting",
            "Support senior accountants in various tasks"
        ]
    },
    {
        id: 4,
        title: "Business Development - B2B Sales",
        department: "Sales & Marketing",
        location: "Dubai, UAE",
        type: "Full Time",
        experience: "2-4 years",
        requirements: [
            "Bachelor's degree in Business Administration, Marketing, or Accounting",
            "Proven B2B sales track record in tax and accounting sector",
            "Strong understanding of tax and accounting principles",
            "Excellent communication and negotiation skills",
            "Goal-oriented mindset with drive to exceed targets"
        ],
        responsibilities: [
            "Prospect and identify potential clients in tax and accounting industry",
            "Develop strategic sales plans to achieve targets",
            "Conduct effective sales presentations",
            "Negotiate terms and close sales agreements",
            "Collaborate with internal teams for seamless implementation"
        ]
    }
]

export const benefits = [
    {
        icon: Trophy,
        title: "Professional Growth",
        description: "Continuous learning opportunities and career advancement in a dynamic tax consulting environment"
    },
    {
        icon: Users,
        title: "Collaborative Team",
        description: "Work with experienced chartered accountants, tax specialists, and industry experts"
    },
    {
        icon: Globe,
        title: "International Exposure",
        description: "Opportunity to work with clients across UAE, UK, and India markets"
    },
    {
        icon: Building,
        title: "Industry Leadership",
        description: "Be part of a leading tax consultancy firm established since 2001 with 100,000+ clients served"
    }
]

//teams
export const leadership = [
    {
        id: 1,
        name: "Saeed Khalifa Al Fuqaei",
        position: "Founder & Company Owner",
        image: "https://media.licdn.com/dms/image/v2/C4E03AQEndY4fBRMA7A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1615185860753?e=1756944000&v=beta&t=63zD_25ynDXDxD6QIKrZFuDAMF14kLebI05JokysOMQ",
        bio: "Emirati entrepreneur who founded Shuraa in 2001, transforming it from a small typing centre in old Dubai into a leading business consultancy firm. His vision has been instrumental in empowering entrepreneurs and multinational corporations across the UAE.",
        experience: "20+ years",
        specialties: ["Business Setup", "Strategic Planning", "Entrepreneurship", "UAE Market Development"],
        achievements: [
            "Founded Shuraa in 2001",
            "Helped 100,000+ entrepreneurs",
            "Expanded operations globally",
            "Built UAE's entrepreneurial ecosystem"
        ]
    },
    {
        id: 2,
        name: "Shahid Rather",
        position: "Managing Partner",
        image: "/api/placeholder/300/300",
        bio: "Visionary leader and driving force behind Shuraa Group's international expansion. Since 2020, he has been instrumental in creating a holistic and dynamic environment for investors and employees, fostering growth across multiple markets.",
        experience: "15+ years",
        specialties: ["International Expansion", "Strategic Leadership", "Business Development", "Team Management"],
        achievements: [
            "Led international expansion since 2020",
            "Expanded to UK and India markets",
            "Built global partnerships",
            "Enhanced operational efficiency"
        ]
    },
    {
        id: 3,
        name: "Sahil Mehta",
        position: "CEO - Shuraa Tax Consultants",
        image: "/api/placeholder/300/300",
        bio: "Highly accomplished financial expert with over 12 years of experience across FP&A, Regulatory Reporting, Cost Controlling, Assurance & Audit, and Due Diligence. Leads by example with a communicative and approachable work ethic.",
        experience: "12+ years",
        specialties: ["Tax Consulting", "Financial Planning", "Regulatory Compliance", "Anti-Money Laundering"],
        achievements: [
            "12+ years in financial expertise",
            "Established AML team",
            "Enhanced client base significantly",
            "Streamlined accounting services"
        ]
    }
]

export const departments = [
    {
        name: "Tax Consulting",
        description: "Expert tax advisors providing comprehensive VAT, corporate tax, and excise tax services",
        teamSize: "8+ Specialists",
        icon: Building2,
        services: ["VAT Registration & Filing", "Corporate Tax Advisory", "Transfer Pricing", "Tax Health Checks"]
    },
    {
        name: "Accounting & Auditing",
        description: "Chartered accountants and auditors ensuring compliance and financial accuracy",
        teamSize: "12+ Professionals",
        icon: Users,
        services: ["Financial Statements", "Internal Audits", "Bookkeeping", "Management Reporting"]
    },
    {
        name: "Anti-Money Laundering",
        description: "Specialized team safeguarding the financial system from financial crime abuses",
        teamSize: "4+ Experts",
        icon: Award,
        services: ["AML Compliance", "Risk Assessment", "Regulatory Reporting", "Due Diligence"]
    },
    {
        name: "Business Advisory",
        description: "Strategic consultants helping businesses optimize operations and achieve growth",
        teamSize: "6+ Advisors",
        icon: Target,
        services: ["Business Strategy", "Risk Management", "Operational Excellence", "Growth Planning"]
    }
]

export const values = [
    {
        icon: CheckCircle,
        title: "Excellence",
        description: "We maintain the highest standards in all our services and deliverables"
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "We believe in teamwork and building strong relationships with clients and colleagues"
    },
    {
        icon: Globe,
        title: "Innovation",
        description: "We continuously adapt to changing regulations and embrace new technologies"
    },
    {
        icon: Award,
        title: "Integrity",
        description: "We conduct business with transparency, honesty, and ethical principles"
    }
]


//Contact
export const serviceOptions = [
    { value: 'accounting-services', label: 'Accounting Services' },
    { value: 'anti-money-laundry', label: 'Anti-Money Laundry Registration' },
    { value: 'audit', label: 'Audit' },
    { value: 'business-advisory', label: 'Business Advisory' },
    { value: 'corporate-tax-advisory', label: 'Corporate Tax Advisory Services' },
    { value: 'corporate-tax-filing', label: 'Corporate Tax Filing' },
    { value: 'corporate-tax-registration', label: 'Corporate Tax Registration Service' },
    { value: 'vat-deregistration', label: 'De-registration for VAT' },
    { value: 'esr-filing', label: 'Economic Substance Regulation (ESR) Filing' },
    { value: 'esr-notification', label: 'Economic Substance Regulation (ESR) Notification' },
    { value: 'excise-tax-filing', label: 'Excise Tax Filing' },
    { value: 'excise-tax-registration', label: 'Excise Tax Registration' },
    { value: 'payroll', label: 'Payroll' },
    { value: 'vat-registration', label: 'Registration Of VAT' },
    { value: 'tax-agency', label: 'Tax Agency Service' },
    { value: 'trc', label: 'Tax Residency Certificate (TRC)' },
    { value: 'vat-health-check', label: 'VAT Health Check' },
    { value: 'vat-refund', label: 'VAT Refund' },
    { value: 'vat-services', label: 'VAT Services' },
    { value: 'job-seeker', label: 'Job Seeker' },
    { value: 'other', label: 'Other Service' }
]

export const contactInfo = [
    {
        icon: Phone,
        title: 'Phone Number',
        content: siteData.company.contact.phone,
        href: `tel:${siteData.company.contact.phone}`
    },
    {
        icon: MessageSquare,
        title: 'Whatsapp Number',
        content: siteData.company.contact.whatsapp,
        href: `https://wa.me/${siteData.company.contact.whatsapp.replace(/[^0-9]/g, '')}`
    },
    {
        icon: Mail,
        title: 'Our Email Address',
        content: siteData.company.contact.email,
        href: `mailto:${siteData.company.contact.email}`
    },
    {
        icon: MapPin,
        title: 'Address',
        content: siteData.company.contact.address,
        href: `https://maps.google.com/?q=${encodeURIComponent(siteData.company.contact.address)}`
    }
]

//About
export const features = [
    {
        icon: Users,
        title: "Professional Assistance",
        description: "We have a team of dedicated professionals ready to take on all your tax and accounting needs."
    },
    {
        icon: Target,
        title: "Cost-Effective Packages",
        description: "We customize each package based on your exact business requirements after a complete analysis."
    },
    {
        icon: Award,
        title: "Comprehensive Services",
        description: "Business owners can benefit from our wide range of services all under one roof."
    }
]

export const achievements = [
    'FTA Certified Tax Agents', 'Multilingual Support', '24/7 Customer Service'
]

//stats
export const stats = [
    {
        icon: TrendingUp,
        number: siteData.company.stats.Experience,
        label: "YEARS EXPERIENCE",
        color: "text-primary-600"
    },
    {
        icon: Users,
        number: siteData.company.stats.Clients,
        label: "Happy Clients",
        color: "text-green-600"
    },
    {
        icon: Globe,
        number: siteData.company.stats.Members,
        label: "Team Members",
        color: "text-blue-600"
    },
    {
        icon: Award,
        number: siteData.company.stats.Nationalities,
        label: "Nationality",
        color: "text-purple-600"
    }
]
