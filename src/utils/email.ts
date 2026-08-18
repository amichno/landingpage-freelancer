import emailjs from '@emailjs/browser';
import type { ContactFormValues } from '@/types';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export async function sendContactEmail(
  values: ContactFormValues,
): Promise<void> {
  console.log('przed if');
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error(
      'EmailJS is not configured. Set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID ' +
        'and VITE_EMAILJS_PUBLIC_KEY in your .env file (see .env.example).',
    );
  }
  try {
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: values.name,
        from_email: values.email,
        message: values.message,
      },
      { publicKey: PUBLIC_KEY },
    );
  } catch (error: any) {
    console.error('EmailJS error status:', error?.status);
    console.error('EmailJS error text:', error?.text);
    console.error('Full error:', error);
  }
}
