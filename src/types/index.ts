export interface Skill {
  name: string;
  years: number;
}

export interface Project {
  id: string;
  title: string;
  tech: string[];
  gradientFrom: string;
  gradientTo: string;
  projectUrl?: string;
  codeUrl?: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: 'github' | 'dribbble' | 'linkedin' | 'twitter';
}

export type ContactFormField = 'name' | 'email' | 'message';

export type ContactFormValues = Record<ContactFormField, string>;

export type ContactFormErrors = Partial<Record<ContactFormField, string>>;

export type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';

export const SUBMIT_STATUS = {
  IDLE: 'idle',
  SENDING: 'sending',
  SUCCESS: 'success',
  ERROR: 'error',
} as const;
