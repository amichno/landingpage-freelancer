import type { ChangeEvent, FocusEvent } from "react";
import type { ContactFormField } from "@/types";

interface FormFieldProps {
  field: ContactFormField;
  label: string;
  type?: "text" | "email" | "textarea";
  value: string;
  error?: string;
  onChange: (field: ContactFormField, value: string) => void;
  onBlur: (field: ContactFormField) => void;
}

export function FormField({ field, label, type = "text", value, error, onChange, onBlur }: FormFieldProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange(field, event.target.value);
  };

  const handleBlur = (_event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onBlur(field);
  };

  const inputClasses = `w-full bg-transparent border-0 border-b text-[0.95rem] text-white py-1.5 focus:outline-none ${
    error ? "border-danger" : "border-white/10 focus:border-accent"
  }`;

  return (
    <div className="mb-7">
      <label
        htmlFor={field}
        className="mb-2 block text-[0.72rem] uppercase tracking-[0.12em] text-muted"
      >
        {label}
      </label>

      {type === "textarea" ? (
        <textarea
          id={field}
          name={field}
          rows={1}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${inputClasses} resize-none`}
        />
      ) : (
        <input
          id={field}
          name={field}
          type={type}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          className={inputClasses}
          autoComplete={field === "email" ? "email" : field === "name" ? "name" : undefined}
        />
      )}

      <span role="alert" className="mt-1.5 block min-h-[1.1rem] text-[0.75rem] text-danger">
        {error ?? ""}
      </span>
    </div>
  );
}
