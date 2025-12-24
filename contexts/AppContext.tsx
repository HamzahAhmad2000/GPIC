import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language, User, UserRole } from '../types';
import { TRANSLATIONS } from '../constants';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  user: User | null;
  login: (email: string, role: UserRole) => void;
  logout: () => void;
  t: (key: string) => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(Language.EN);
  const [user, setUser] = useState<User | null>(null);

  const t = (key: string): string => {
    return TRANSLATIONS[language][key] || key;
  };

  const login = (email: string, role: UserRole) => {
    // Mock login logic
    setUser({
      id: '123',
      name: email.split('@')[0],
      email,
      role,
      organization: role === UserRole.PARTNER ? 'Tech Corp Gmbh' : undefined,
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AppContext.Provider value={{ language, setLanguage, user, login, logout, t }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};