import React, { useState } from 'react';
import { Check, User, Briefcase, Award } from 'lucide-react';
import { PageHeader } from './PublicPages'; 

export const Membership: React.FC = () => {
    const [step, setStep] = useState(1);

    return (
        <div className="pb-20">
            <PageHeader title="Membership" />
            
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Tiers */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* Individual */}
                    <div className="border border-gray-200 rounded-xl p-8 hover:border-primary transition-colors bg-white">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-700 mb-4"><User /></div>
                        <h3 className="text-xl font-bold mb-2">Individual Member</h3>
                        <p className="text-gray-500 text-sm mb-6">For researchers, students, and freelancers.</p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center text-sm text-gray-600"><Check size={16} className="mr-2 text-secondary" /> Access to library</li>
                            <li className="flex items-center text-sm text-gray-600"><Check size={16} className="mr-2 text-secondary" /> Event invitations</li>
                        </ul>
                        <button className="w-full py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white transition-colors">Select</button>
                    </div>

                    {/* Corporate */}
                    <div className="border-2 border-primary rounded-xl p-8 relative shadow-lg bg-white">
                         <div className="absolute top-0 right-0 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">POPULAR</div>
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4"><Briefcase /></div>
                        <h3 className="text-xl font-bold mb-2">Corporate Member</h3>
                        <p className="text-gray-500 text-sm mb-6">For SMEs and startups looking for networks.</p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center text-sm text-gray-600"><Check size={16} className="mr-2 text-secondary" /> All Individual benefits</li>
                            <li className="flex items-center text-sm text-gray-600"><Check size={16} className="mr-2 text-secondary" /> B2B matchmaking</li>
                            <li className="flex items-center text-sm text-gray-600"><Check size={16} className="mr-2 text-secondary" /> Priority support</li>
                        </ul>
                        <button className="w-full py-2 bg-primary text-white rounded hover:bg-primary-light transition-colors">Select</button>
                    </div>

                    {/* Institutional */}
                    <div className="border border-gray-200 rounded-xl p-8 hover:border-primary transition-colors bg-white">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-700 mb-4"><Award /></div>
                        <h3 className="text-xl font-bold mb-2">Institutional</h3>
                        <p className="text-gray-500 text-sm mb-6">For universities and government bodies.</p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center text-sm text-gray-600"><Check size={16} className="mr-2 text-secondary" /> Strategic voting rights</li>
                            <li className="flex items-center text-sm text-gray-600"><Check size={16} className="mr-2 text-secondary" /> Policy working groups</li>
                        </ul>
                        <button className="w-full py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white transition-colors">Contact Us</button>
                    </div>
                </div>

                {/* Simple Registration Form for Demo */}
                <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-xl border border-gray-200">
                    <h3 className="text-xl font-bold mb-4">Begin Registration</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input placeholder="First Name" className="p-2 border rounded" />
                        <input placeholder="Last Name" className="p-2 border rounded" />
                        <input placeholder="Email" className="p-2 border rounded md:col-span-2" />
                        <button className="md:col-span-2 bg-secondary text-white py-2 rounded font-medium hover:bg-secondary-dark transition-colors">Proceed to Verification</button>
                    </div>
                    <p className="text-xs text-gray-500 mt-4 text-center">Membership requires administrative approval.</p>
                </div>
            </div>
        </div>
    );
};