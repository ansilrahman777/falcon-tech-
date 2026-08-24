"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2, ArrowRight } from "lucide-react";

const SUBJECTS = [
  "General Enquiry",
  "Sales",
  "Technical Support",
  "Careers",
  "Partnership / Vendor",
  "Other",
];

const inputClass =
  "w-full rounded-sm border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-brand dark:border-white/15 dark:bg-neutral-900 dark:text-white dark:placeholder:text-white/30";

const labelClass =
  "mb-1.5 block text-xs font-semibold uppercase tracking-[0.08em] text-neutral-500 dark:text-white/45";

const initialState = {
  name: "",
  email: "",
  phone: "",
  subject: "General Enquiry",
  message: "",
  company_website: "", // honeypot
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [error, setError] = useState("");

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      setError("Please share your name, email and a short message.");
      return;
    }

    setStatus("submitting");
    setError("");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(
          data.error || "Something went wrong. Please try again.",
        );
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err.message);
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-sm border border-neutral-200 bg-white p-12 text-center dark:border-white/10 dark:bg-neutral-900">
        <CheckCircle2 size={44} className="text-brand" />
        <h3 className="mt-5 text-xl font-semibold text-neutral-900 dark:text-white">
          Message Sent
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-neutral-500 dark:text-white/55">
          Thank you for reaching out — our team will get back to you shortly.
        </p>
        <button
          onClick={() => {
            setForm(initialState);
            setStatus("idle");
          }}
          className="mt-6 text-sm font-semibold text-brand hover:text-brand-dark"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="space-y-6 rounded-sm border border-neutral-200 bg-white p-6 dark:border-white/10 dark:bg-neutral-900 sm:p-8"
    >
      {/* honeypot — hidden from real users */}
      <input
        type="text"
        name="company_website"
        value={form.company_website}
        onChange={update("company_website")}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={labelClass}>
            Full Name *
          </label>
          <input
            id="cf-name"
            value={form.name}
            onChange={update("name")}
            className={inputClass}
            required
          />
        </div>
        <div>
          <label htmlFor="cf-phone" className={labelClass}>
            Phone / WhatsApp
          </label>
          <input
            id="cf-phone"
            value={form.phone}
            onChange={update("phone")}
            className={inputClass}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="cf-email" className={labelClass}>
            Email *
          </label>
          <input
            id="cf-email"
            type="email"
            value={form.email}
            onChange={update("email")}
            className={inputClass}
            required
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Subject</label>
        <div className="flex flex-wrap gap-2">
          {SUBJECTS.map((s) => (
            <button
              type="button"
              key={s}
              onClick={() => setForm((f) => ({ ...f, subject: s }))}
              className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                form.subject === s
                  ? "border-brand bg-brand text-white"
                  : "border-neutral-300 text-neutral-600 hover:border-brand hover:text-brand dark:border-white/15 dark:text-white/60"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="cf-message" className={labelClass}>
          Message *
        </label>
        <textarea
          id="cf-message"
          value={form.message}
          onChange={update("message")}
          rows={5}
          placeholder="How can we help?"
          className={inputClass}
          required
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group inline-flex h-14 w-full items-center justify-center gap-2 rounded-sm bg-brand text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark disabled:opacity-70 sm:w-auto sm:px-10"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </>
        )}
      </button>
    </motion.form>
  );
}
