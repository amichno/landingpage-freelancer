import type { ContactFormField, ContactFormValues } from "@/types";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateField(field: ContactFormField, value: string): string {
  const trimmed = value.trim();

  if (trimmed.length === 0) {
    return "This field is required";
  }

  if (field === "email" && !EMAIL_REGEX.test(trimmed)) {
    return "Sorry, invalid format here";
  }

  return "";
}

export function validateAll(values: ContactFormValues) {
  const fields = Object.keys(values) as ContactFormField[];
  const errors: Partial<Record<ContactFormField, string>> = {};

  fields.forEach((field) => {
    const message = validateField(field, values[field]);
    if (message) errors[field] = message;
  });

  return errors;
}
