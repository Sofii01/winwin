/** Datos que envía el formulario de contacto de la sección "Contacto". */
export interface ContactRequest {
  fullName: string;
  email: string;
  phoneCode: string;
  phone: string;
  topic: string;
  message: string;
}

export interface ContactResponse {
  ok: boolean;
  message: string;
}

/** Estado del envío, usado por la sección para pintar el feedback. */
export type ContactStatus = 'idle' | 'sending' | 'success' | 'error';
