export enum Language {
  EN = 'en',
  DE = 'de',
}

export enum UserRole {
  PUBLIC = 'public',
  MEMBER = 'member',
  PARTNER = 'partner',
  ADMIN = 'admin',
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  organization?: string;
}

export interface NavItem {
  key: string;
  path: string;
  roles?: UserRole[]; // If undefined, accessible by all
}

export type TranslationDictionary = {
  [key in Language]: {
    [key: string]: string;
  };
};