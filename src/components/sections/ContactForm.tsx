"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { services } from "@/data/services";
import { buttonStyles } from "@/components/ui/Button";
import { useToast } from "@/components/providers/ToastProvider";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid email address."),
  service: z.string(),
  message: z.string().trim().min(20, "Please write at least 20 characters so I can understand what you need."),
  company: z.string(),
});

type FormValues = z.infer<typeof schema>;
type Status = "idle" | "loading" | "success" | "error";

const fieldClass =
  "w-full rounded-2xl border border-line bg-canvas-2 px-4 py-3 text-base text-ink placeholder:text-mute/70 transition-colors focus-visible:border-brand-400";

export function ContactForm() {
  const { toast } = useToast();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", service: "", message: "", company: "" },
  });

  async function onSubmit(values: FormValues) {
    // Honeypot: real visitors never fill this hidden field. Pretend success and send nothing.
    if (values.company.trim().length > 0) {
      setStatus("success");
      reset();
      return;
    }

    const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
    if (!formId) {
      const message = "The contact form is not connected yet. Please use another contact option on this page.";
      setErrorMessage(message);
      setStatus("error");
      toast(message, "error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");
    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          service: values.service || "Not specified",
          message: values.message,
        }),
      });
      if (!response.ok) throw new Error(`Formspree responded with ${response.status}`);
      setStatus("success");
      reset();
      toast("Message sent. I will reply as soon as I can.", "success");
    } catch {
      const message = "Something went wrong and your message was not sent. Please try again in a moment.";
      setErrorMessage(message);
      setStatus("error");
      toast(message, "error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-line bg-card p-8 text-center sm:p-12" role="status">
        <CheckCircle2 className="mx-auto h-12 w-12 text-accent" aria-hidden="true" />
        <h2 className="mt-5 text-2xl font-semibold">Thanks, your message is in.</h2>
        <p className="mt-3 text-mute">I will read it and reply as soon as I can.</p>
        <button type="button" onClick={() => setStatus("idle")} className={buttonStyles("secondary", "md", "mt-8")}>
          Send another message
        </button>
      </div>
    );
  }

  const loading = status === "loading";

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5 rounded-3xl border border-line bg-card p-6 sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Your name
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={fieldClass}
            {...register("name")}
          />
          {errors.name ? (
            <p id="name-error" className="mt-1.5 text-sm text-red-400">
              {errors.name.message}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email address
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={fieldClass}
            {...register("email")}
          />
          {errors.email ? (
            <p id="email-error" className="mt-1.5 text-sm text-red-400">
              {errors.email.message}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="service" className="mb-2 block text-sm font-medium">
          What do you need help with?
        </label>
        <select id="service" className={cn(fieldClass, "appearance-none")} {...register("service")}>
          <option value="">Not sure yet</option>
          {services.map((service) => (
            <option key={service.slug} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Tell me about your project
        </label>
        <textarea
          id="message"
          rows={6}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(fieldClass, "resize-y")}
          {...register("message")}
        />
        {errors.message ? (
          <p id="message-error" className="mt-1.5 text-sm text-red-400">
            {errors.message.message}
          </p>
        ) : null}
      </div>

      {/* Honeypot field, hidden from people and assistive technology */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" type="text" tabIndex={-1} autoComplete="off" {...register("company")} />
      </div>

      {status === "error" ? (
        <p role="alert" className="rounded-2xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {errorMessage}
        </p>
      ) : null}

      <button type="submit" disabled={loading} className={buttonStyles("primary", "lg", "w-full sm:w-auto")}>
        {loading ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            Sending
          </>
        ) : (
          "Send message"
        )}
      </button>
    </form>
  );
}
