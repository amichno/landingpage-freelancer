import { useCallback, useState } from "react";
import type {
  ContactFormErrors,
  ContactFormField,
  ContactFormValues,
  SubmitStatus,
} from "@/types";
import { validateAll, validateField } from "@/utils/validation";
import { sendContactEmail } from "@/utils/email";

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  message: "",
};

export function useContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<ContactFormField, boolean>>>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleChange = useCallback(
    (field: ContactFormField, value: string) => {
      setValues((prev) => ({ ...prev, [field]: value }));

      setErrors((prev) => {
        if (!prev[field]) return prev;
        const message = validateField(field, value);
        return { ...prev, [field]: message || undefined };
      });
    },
    []
  );

  const handleBlur = useCallback((field: ContactFormField) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({
      ...prev,
      [field]: validateField(field, values[field]) || undefined,
    }));
  }, [values]);

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const nextErrors = validateAll(values);
      setErrors(nextErrors);
      setTouched({ name: true, email: true, message: true });

      if (Object.keys(nextErrors).length > 0) {
        setStatus("idle");
        return;
      }

      setStatus("sending");

      try {
        await sendContactEmail(values);
        setStatus("success");
        setValues(initialValues);
        setTouched({});
        setErrors({});
      } catch (error) {
        console.error("Failed to send contact email:", error);
        setStatus("error");
      }
    },
    [values]
  );

  return { values, errors, touched, status, handleChange, handleBlur, handleSubmit };
}
