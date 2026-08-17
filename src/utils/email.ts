import emailjs from "@emailjs/browser";
import type { ContactFormValues } from "@/types";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

/**
 * Sends the contact form via EmailJS.
 * Template on the EmailJS dashboard must expose matching variables:
 * {{from_name}}, {{from_email}}, {{message}}.
 */
export async function sendContactEmail(values: ContactFormValues): Promise<void> {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error(
      "EmailJS is not configured. Set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID " +
        "and VITE_EMAILJS_PUBLIC_KEY in your .env file (see .env.example)."
    );
  }

  await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      from_name: values.name,
      from_email: values.email,
      message: values.message,
    },
    { publicKey: PUBLIC_KEY }
  );
}
