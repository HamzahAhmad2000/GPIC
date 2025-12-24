import React, { useState } from 'react';
import { CheckCircle, Download, FileText, Globe, Mail, MapPin, Phone, Shield, User, Send } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

// --- Reusable Page Header ---
export const PageHeader: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div className="bg-gradient-hero text-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
      {subtitle && <p className="text-xl text-gray-300 max-w-2xl">{subtitle}</p>}
    </div>
  </div>
);

// --- About Page ---
export const About: React.FC = () => {
    const { t } = useApp();
  return (
    <div className="pb-20">
      <PageHeader title={t('section.about.title')} subtitle="Fostering cross-border innovation with institutional integrity and neutrality." />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg text-gray-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission & Vision</h3>
            <p className="mb-8">
                GPIC serves as a bridge between the technological prowess of Germany and the emerging market potential of Pakistan. 
                Our mission is to facilitate knowledge transfer, economic cooperation, and sustainable development through a politically neutral, high-trust framework.
            </p>
            
            <div className="bg-gray-50 border-l-4 border-secondary p-6 my-8 rounded-r-lg">
                <h4 className="font-bold text-gray-900 mb-2">Neutrality Statement</h4>
                <p className="text-sm">
                    GPIC operates independently of political parties. We are committed to strict compliance with EU and Pakistani regulations, 
                    ensuring a safe and transparent environment for all partners.
                </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Governance Structure</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-primary mb-2">Supervisory Board</h4>
                    <p className="text-sm text-gray-500">Comprised of senior academic and industry leaders from DE and PK to ensure strategic alignment.</p>
                </div>
                 <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-primary mb-2">Executive Management</h4>
                    <p className="text-sm text-gray-500">Operational leadership responsible for daily activities, compliance, and partner management.</p>
                </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Locations</h3>
             <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                    <img src="https://picsum.photos/seed/berlin/400/250" className="rounded-lg mb-4 w-full" alt="Berlin" />
                    <h5 className="font-bold">Berlin Hub</h5>
                    <p className="text-sm">Focus: Policy, EU Partnership</p>
                </div>
                 <div className="flex-1">
                    <img src="https://picsum.photos/seed/pindi/400/250" className="rounded-lg mb-4 w-full" alt="Rawalpindi" />
                    <h5 className="font-bold">Rawalpindi Hub</h5>
                    <p className="text-sm">Focus: Operations, Implementation</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

// --- Programs Page ---
export const Programs: React.FC = () => {
    const { user } = useApp();
    
    const programs = [
        { title: "Green Energy Transition", type: "Technical Transfer", status: "Open" },
        { title: "Vocational Excellence (TVET)", type: "Education", status: "Open" },
        { title: "Agri-Tech Innovation", type: "Research", status: "Upcoming" },
        { title: "Digital Governance Summit", type: "Event", status: "Closed" },
    ];

  return (
    <div className="pb-20">
      <PageHeader title="Programs & Initiatives" subtitle="Driving change through structured cooperation." />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid gap-6">
            {programs.map((prog, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col md:flex-row justify-between items-center shadow-sm hover:shadow-md transition-shadow">
                    <div>
                        <div className="flex items-center space-x-3 mb-2">
                            <span className={`text-xs px-2 py-1 rounded-full font-bold ${prog.status === 'Open' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                                {prog.status}
                            </span>
                             <span className="text-xs text-gray-500 uppercase tracking-wide">{prog.type}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{prog.title}</h3>
                        <p className="text-gray-600 mt-1 max-w-2xl">A comprehensive program designed to facilitate knowledge exchange and practical implementation in the target sector.</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                        {user ? (
                            <button className="bg-gradient-success text-white px-6 py-2 rounded-md font-medium shadow-sm hover:shadow-md transition-all">
                                Apply Now
                            </button>
                        ) : (
                            <button disabled className="bg-gray-100 text-gray-400 px-6 py-2 rounded-md font-medium cursor-not-allowed border border-gray-200">
                                Login to Apply
                            </button>
                        )}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

// --- Partners Page ---
export const Partners: React.FC = () => {
    const { t } = useApp();
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    }

    if (submitted) {
         return (
             <div className="pb-20 min-h-[60vh]">
                 <PageHeader title={t('nav.partners')} />
                 <div className="max-w-md mx-auto mt-20 text-center p-8 bg-green-50 rounded-xl border border-green-100">
                     <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                         <CheckCircle size={32} />
                     </div>
                     <h2 className="text-2xl font-bold text-gray-900 mb-2">Interest Registered</h2>
                     <p className="text-gray-600">Thank you for your interest in partnering with GPIC. Our team will review your organization details and contact you shortly.</p>
                 </div>
             </div>
         )
    }

  return (
    <div className="pb-20">
      <PageHeader title={t('nav.partners')} subtitle="Join a network of leading institutions and innovators." />
      
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Info Column */}
        <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Partner With Us?</h3>
            <ul className="space-y-6">
                <li className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary mt-1">
                        <Globe size={20} />
                    </div>
                    <div className="ml-4">
                        <h4 className="font-bold text-gray-900">Market Access</h4>
                        <p className="text-sm text-gray-600">Direct entry points to German industry leaders and Pakistani emerging markets.</p>
                    </div>
                </li>
                 <li className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary mt-1">
                        <Shield size={20} />
                    </div>
                    <div className="ml-4">
                        <h4 className="font-bold text-gray-900">Compliance & Trust</h4>
                        <p className="text-sm text-gray-600">Navigating complex regulatory frameworks with our legal support teams.</p>
                    </div>
                </li>
                 <li className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary mt-1">
                        <FileText size={20} />
                    </div>
                    <div className="ml-4">
                        <h4 className="font-bold text-gray-900">Project Funding</h4>
                        <p className="text-sm text-gray-600">Access to EU and development funding for collaborative projects.</p>
                    </div>
                </li>
            </ul>

            <div className="mt-12">
                <h4 className="font-bold text-gray-900 mb-4">Current Strategic Partners</h4>
                <div className="flex gap-4 opacity-60 grayscale">
                     <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center font-bold text-gray-400">TUM</div>
                     <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center font-bold text-gray-400">GIZ</div>
                     <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center font-bold text-gray-400">NUST</div>
                </div>
            </div>
        </div>

        {/* Form Column */}
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Become a Partner</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Organization Name</label>
                    <input required type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent outline-none" />
                </div>
                 <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Contact Person</label>
                        <input required type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary outline-none" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Role/Title</label>
                        <input required type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary outline-none" />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address (Official)</label>
                    <input required type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary outline-none" />
                </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Organization Type</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary outline-none">
                        <option>University / Research Institute</option>
                        <option>Private Company (SME)</option>
                        <option>Corporation</option>
                        <option>Government Body</option>
                        <option>NGO</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Partnership Interest</label>
                    <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary outline-none" placeholder="Briefly describe your goals..."></textarea>
                </div>
                <button type="submit" className="w-full bg-gradient-success text-white font-bold py-3 rounded-md shadow-md hover:shadow-lg transition-all">
                    Submit Interest
                </button>
                <p className="text-xs text-center text-gray-500 mt-4">
                    By submitting, you agree to our GDPR compliant data processing policy.
                </p>
            </form>
        </div>
      </div>
    </div>
  );
};

// --- Contact Page ---
export const Contact: React.FC = () => {
    return (
        <div className="pb-20">
             <PageHeader title="Contact Us" subtitle="Get in touch with our teams in Germany and Pakistan." />
             <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
                 <div className="space-y-8">
                     <div className="flex items-start space-x-4">
                         <div className="bg-blue-50 p-3 rounded-full text-primary">
                             <MapPin size={24} />
                         </div>
                         <div>
                             <h4 className="font-bold text-gray-900">Headquarters (Germany)</h4>
                             <p className="text-gray-600">Innovation Allee 101<br/>10115 Berlin, Germany</p>
                         </div>
                     </div>
                     <div className="flex items-start space-x-4">
                         <div className="bg-green-50 p-3 rounded-full text-secondary">
                             <MapPin size={24} />
                         </div>
                         <div>
                             <h4 className="font-bold text-gray-900">Regional Office (Pakistan)</h4>
                             <p className="text-gray-600">Tech Park, Sector I-9<br/>Rawalpindi, Pakistan</p>
                         </div>
                     </div>
                     <div className="flex items-start space-x-4">
                         <div className="bg-gray-50 p-3 rounded-full text-gray-600">
                             <Mail size={24} />
                         </div>
                         <div>
                             <h4 className="font-bold text-gray-900">Email</h4>
                             <p className="text-gray-600">General: info@gpic-innovation.org</p>
                             <p className="text-gray-600">Partnerships: partners@gpic-innovation.org</p>
                         </div>
                     </div>
                 </div>

                 {/* Contact Form */}
                 <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-bold mb-4">Send a Message</h3>
                    <form className="space-y-4">
                        <input type="text" placeholder="Your Name" className="w-full p-3 border rounded bg-white focus:outline-none focus:ring-2 focus:ring-secondary" />
                        <input type="email" placeholder="Email" className="w-full p-3 border rounded bg-white focus:outline-none focus:ring-2 focus:ring-secondary" />
                        <textarea placeholder="Message" rows={4} className="w-full p-3 border rounded bg-white focus:outline-none focus:ring-2 focus:ring-secondary"></textarea>
                        <button className="bg-primary text-white px-6 py-2 rounded flex items-center hover:bg-primary-light transition-colors">
                            Send Message <Send size={16} className="ml-2" />
                        </button>
                    </form>
                 </div>
             </div>
        </div>
    )
}

// --- News Page ---
export const News: React.FC = () => (
    <div className="pb-20">
        <PageHeader title="News & Insights" />
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1,2,3,4,5,6].map((i) => (
                     <div key={i} className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
                        <div className="overflow-hidden h-48">
                            <img src={`https://picsum.photos/seed/news${i}/400/250`} alt="News" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="p-6">
                            <span className="text-xs text-secondary font-bold uppercase">Report</span>
                            <h3 className="font-bold text-gray-900 text-lg mt-2 mb-2">Sustainable Development Report Q3 2024</h3>
                            <p className="text-sm text-gray-600 mb-4">An analysis of cross-border energy initiatives and their impact on local communities.</p>
                            <a href="#" className="text-primary text-sm font-medium hover:underline">Read Full Article</a>
                        </div>
                     </div>
                ))}
            </div>
        </div>
    </div>
)