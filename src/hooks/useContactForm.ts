import { useCallback, useRef, useState } from 'react';
import {
  SUBMIT_STATUS,
  type ContactFormErrors,
  type ContactFormField,
  type ContactFormValues,
  type SubmitStatus,
} from '@/types';
import { validateAll, validateField } from '@/utils/validation';
import { sendContactEmail } from '@/utils/email';

const initialValues: ContactFormValues = {
  name: '',
  email: '',
  message: '',
};

export function useContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [touched, setTouched] = useState<
    Partial<Record<ContactFormField, boolean>>
  >({});
  const [status, setStatus] = useState<SubmitStatus>(SUBMIT_STATUS.IDLE);
  const [honeypot, setHoneypot] = useState('');

  const formLoadedAt = useRef(Date.now());

  const MIN_SUBMIT_TIME_MS = 1500;

  const handleChange = useCallback((field: ContactFormField, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));

    setErrors((prev) => {
      if (!prev[field]) return prev;
      const message = validateField(field, value);
      return { ...prev, [field]: message || undefined };
    });
  }, []);

  const handleBlur = useCallback(
    (field: ContactFormField) => {
      setTouched((prev) => ({ ...prev, [field]: true }));
      setErrors((prev) => ({
        ...prev,
        [field]: validateField(field, values[field]) || undefined,
      }));
    },
    [values],
  );

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const isLikelyBot =
        honeypot.trim().length > 0 ||
        Date.now() - formLoadedAt.current < MIN_SUBMIT_TIME_MS;

      if (isLikelyBot) {
        setStatus(SUBMIT_STATUS.SUCCESS);
        setValues(initialValues);
        setHoneypot('');
        setTouched({});
        setErrors({});
        return;
      }

      const nextErrors = validateAll(values);
      setErrors(nextErrors);
      setTouched({ name: true, email: true, message: true });

      if (Object.keys(nextErrors).length > 0) {
        setStatus(SUBMIT_STATUS.IDLE);
        return;
      }

      setStatus(SUBMIT_STATUS.SENDING);

      try {
        await sendContactEmail(values);
        setStatus(SUBMIT_STATUS.SUCCESS);
        setValues(initialValues);
        setTouched({});
        setErrors({});
      } catch (error) {
        console.error('Failed to send contact email:', error);
        setStatus(SUBMIT_STATUS.ERROR);
      }
    },
    [values],
  );

  return {
    values,
    errors,
    touched,
    status,
    honeypot,
    handleChange,
    handleBlur,
    handleSubmit,
    setHoneypot,
  };
}
