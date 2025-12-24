import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../contexts/AppContext';
import { UserRole } from '../types';

export const Login: React.FC = () => {
  const { login, t } = useApp();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<UserRole>(UserRole.MEMBER);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email || 'demo@user.com', role);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">{t('form.login')}</h2>
          <p className="text-sm text-gray-500">Access the secure GPIC portal</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('form.email')}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@organization.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('form.password')}
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
            />
          </div>

          {/* Role Simulator for Demo Purposes */}
          <div className="p-4 bg-blue-50 rounded-md border border-blue-100">
            <label className="block text-xs font-bold text-blue-800 mb-2 uppercase tracking-wide">
              Select Role (Demo Only)
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as UserRole)}
              className="w-full p-2 text-sm border-gray-300 rounded focus:ring-secondary focus:border-secondary"
            >
              <option value={UserRole.MEMBER}>Member (Individual)</option>
              <option value={UserRole.PARTNER}>Partner (Organization)</option>
              <option value={UserRole.ADMIN}>Admin (Staff)</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-primary hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
          >
            {t('form.login')}
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          <a href="#" className="font-medium text-primary hover:text-primary-light">
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  );
};