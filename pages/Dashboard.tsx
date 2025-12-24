import React from 'react';
import { useApp } from '../contexts/AppContext';
import { UserRole } from '../types';
import { FileText, Plus, Bell, Settings, Download, Users, CheckSquare, Briefcase, ChevronRight, Search, LayoutGrid, List } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const { user, t } = useApp();

  if (!user) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center p-8 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-gray-600">{t('dashboard.access_denied')}</p>
        </div>
      </div>
    );
  }

  // --- Partner Dashboard Component ---
  const PartnerDashboard = () => (
    <div className="space-y-8 animate-fade-in">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Briefcase size={64} className="text-primary" />
          </div>
          <h3 className="text-gray-500 text-xs font-bold uppercase tracking-wider">{t('dashboard.active_projects')}</h3>
          <p className="text-4xl font-bold text-gray-900 mt-2">3</p>
          <div className="mt-4 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-success w-3/4"></div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <FileText size={64} className="text-accent" />
          </div>
          <h3 className="text-gray-500 text-xs font-bold uppercase tracking-wider">{t('dashboard.pending_proposals')}</h3>
          <p className="text-4xl font-bold text-gray-900 mt-2">1</p>
           <div className="mt-4 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-accent w-1/4"></div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden">
          <h3 className="text-gray-500 text-xs font-bold uppercase tracking-wider">{t('dashboard.mou_status')}</h3>
          <div className="mt-2 flex items-center">
             <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-green-50 text-secondary border border-green-100">
              <span className="w-2 h-2 rounded-full bg-secondary mr-2 animate-pulse"></span>
              {t('dashboard.active')}
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-4">Valid until Dec 2025</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-8">
           <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <h3 className="text-lg font-bold text-gray-900">{t('dashboard.project_management')}</h3>
              <button className="flex items-center text-xs font-bold text-white bg-primary hover:bg-primary-light px-4 py-2 rounded-lg transition-colors shadow-sm">
                <Plus size={16} className="mr-2" /> {t('dashboard.submit_proposal')}
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-100">
                  <thead className="bg-gray-50">
                      <tr>
                          <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{t('dashboard.table.project')}</th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{t('dashboard.table.date')}</th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{t('dashboard.table.status')}</th>
                          <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">{t('dashboard.table.actions')}</th>
                      </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                      <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">Solar Grid Optimization</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023-10-01</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-50 text-yellow-700 border border-yellow-100">
                              {t('dashboard.review')}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-gray-400 hover:text-primary"><Settings size={16}/></button>
                          </td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">Vocational Training Exchange</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023-09-15</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-50 text-green-700 border border-green-100">
                              {t('dashboard.approved')}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-gray-400 hover:text-primary"><Settings size={16}/></button>
                          </td>
                      </tr>
                  </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Sidebar Area */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                <Download size={18} className="mr-2 text-secondary" /> 
                {t('dashboard.downloads')}
              </h3>
              <div className="space-y-3">
                  <div className="group flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100 hover:border-secondary/30 transition-all cursor-pointer">
                      <div className="flex items-center text-sm text-gray-600 group-hover:text-gray-900">
                        <FileText size={16} className="mr-3 text-gray-400 group-hover:text-secondary"/> 
                        <span className="truncate w-40">Standard MoU (EN)</span>
                      </div>
                      <Download size={14} className="text-gray-400 group-hover:text-primary" />
                  </div>
                  <div className="group flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100 hover:border-secondary/30 transition-all cursor-pointer">
                      <div className="flex items-center text-sm text-gray-600 group-hover:text-gray-900">
                        <FileText size={16} className="mr-3 text-gray-400 group-hover:text-secondary"/> 
                        <span className="truncate w-40">Proposal Guidelines v2.1</span>
                      </div>
                      <Download size={14} className="text-gray-400 group-hover:text-primary" />
                  </div>
              </div>
          </div>
          
           <div className="bg-gradient-primary p-6 rounded-xl shadow-lg text-white">
              <h4 className="font-bold mb-2 text-sm uppercase opacity-80">Support</h4>
              <p className="text-sm mb-4 opacity-90">Need help with your proposal? Contact our dedicated support team.</p>
              <button className="w-full bg-white/20 hover:bg-white/30 text-white text-xs font-bold py-2 rounded transition-colors">Contact Support</button>
           </div>
        </div>
      </div>
    </div>
  );

  // --- Admin Dashboard Component ---
  const AdminDashboard = () => (
     <div className="space-y-6 animate-fade-in">
         <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
             <h3 className="text-lg font-bold mb-6 text-gray-900 flex items-center">
               <span className="w-2 h-6 bg-accent rounded-sm mr-3"></span>
               {t('dashboard.admin.approvals')}
             </h3>
             <div className="space-y-4">
                 {[1, 2].map((i) => (
                   <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100 hover:bg-white hover:shadow-md transition-all">
                       <div className="flex items-start space-x-4">
                           <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-400 border border-gray-200 shadow-sm">
                             {i === 1 ? <Users size={20} /> : <FileText size={20} />}
                           </div>
                           <div>
                               <p className="font-bold text-gray-900">{i === 1 ? 'University of Lahore' : 'TechSolutions GmbH'}</p>
                               <p className="text-xs text-gray-500 uppercase tracking-wide mt-1">
                                 {i === 1 ? 'Partner Application • Education' : 'Project Submission • Green Energy'}
                               </p>
                           </div>
                       </div>
                       <div className="flex space-x-2">
                           <button className="flex items-center px-3 py-1.5 bg-white border border-gray-200 text-gray-600 rounded text-sm hover:text-green-600 hover:border-green-200 hover:bg-green-50 transition-all">
                             <CheckSquare size={16} className="mr-1.5" /> {t('dashboard.admin.approve')}
                           </button>
                           <button className="flex items-center px-3 py-1.5 bg-white border border-gray-200 text-gray-600 rounded text-sm hover:text-red-600 hover:border-red-200 hover:bg-red-50 transition-all">
                             <Settings size={16} className="mr-1.5" /> {t('dashboard.admin.reject')}
                           </button>
                       </div>
                   </div>
                 ))}
             </div>
         </div>
     </div>
  );

  // --- Member Dashboard Component ---
  const MemberDashboard = () => (
      <div className="text-center py-16 bg-white rounded-xl border border-gray-100 shadow-sm animate-fade-in">
          <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users size={32} className="text-gray-400" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('dashboard.member.resources')}</h3>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">{t('dashboard.member.desc')}</p>
          <button className="bg-gradient-primary text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
            {t('dashboard.member.browse')}
          </button>
      </div>
  );

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Dashboard Header */}
      <div className="bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 flex items-center">
                {t('dashboard.welcome')}, <span className="text-primary ml-2">{user.name}</span>
              </h1>
              <div className="flex items-center mt-1 text-sm text-gray-500 space-x-4">
                <span className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-secondary mr-2"></span>
                  {t('dashboard.role')}: <span className="font-medium text-gray-700 capitalize ml-1">{t(`role.${user.role}`)}</span>
                </span>
                {user.organization && (
                  <span className="hidden md:flex items-center border-l border-gray-300 pl-4">
                     {t('dashboard.org')}: <span className="font-medium text-gray-700 ml-1">{user.organization}</span>
                  </span>
                )}
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                 <input type="text" placeholder="Search..." className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-secondary focus:border-transparent outline-none w-64" />
              </div>
              <button className="p-2 text-gray-500 hover:text-primary relative bg-gray-50 rounded-lg border border-gray-200 hover:bg-white transition-all">
                  <Bell size={20} />
                  <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {user.role === UserRole.PARTNER && <PartnerDashboard />}
        {user.role === UserRole.ADMIN && <AdminDashboard />}
        {user.role === UserRole.MEMBER && <MemberDashboard />}
      </div>
    </div>
  );
};