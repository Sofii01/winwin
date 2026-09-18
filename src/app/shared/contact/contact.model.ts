export interface ContactRequest {
  fullName: string;
  email: string;
  phoneCode: string;
  phone: string;
  topic: string;
  message: string;
}

export type ContactStatus = 'idle' | 'sending' | 'success' | 'error';
