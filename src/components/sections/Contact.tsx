import { useContactForm } from "@/hooks/useContactForm";
import { FormField } from "@/components/ui/FormField";

export function Contact() {
  const { values, errors, status, handleChange, handleBlur, handleSubmit } = useContactForm();

  return (
    <section id="contact" className="relative z-10 bg-bg-alt py-10 sm:py-16">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-8 px-6 sm:px-10 lg:flex-row lg:gap-16">
        <div className="max-w-[340px] flex-1">
          <h2 className="mb-4 font-display text-[1.5rem] font-extrabold sm:text-[2rem]">
            Contact
          </h2>
          <p className="text-muted">
            I would love to hear about your project and how I could help. Please fill in the
            form, and I&rsquo;ll get back to you as soon as possible.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="flex-[1.5]">
          <FormField
            field="name"
            label="Name"
            value={values.name}
            error={errors.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <FormField
            field="email"
            label="Email"
            type="email"
            value={values.email}
            error={errors.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <FormField
            field="message"
            label="Message"
            type="textarea"
            value={values.message}
            error={errors.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <div className="mt-1 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between">
            <span
              role="status"
              aria-live="polite"
              className={`text-[0.85rem] ${status === "error" ? "text-danger" : "text-accent"}`}
            >
              {status === "success" && "Thanks! Your message has been sent."}
              {status === "sending" && "Sending..."}
              {status === "error" && "Something went wrong. Please try again in a moment."}
            </span>
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-block rounded-sm border border-accent px-6 py-3 text-center font-display text-[0.72rem] font-bold uppercase tracking-[0.12em] text-accent transition-colors hover:bg-accent hover:text-bg focus-visible:bg-accent focus-visible:text-bg disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-accent"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
