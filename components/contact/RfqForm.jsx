"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2, ArrowRight } from "lucide-react";

const NEEDS = [
  "Water Tank",
  "Diesel Tank",
  "Chemical Tank",
  "FRP / Polyethylene Tank",
  "Thermal Insulation",
  "Tank Restoration",
  "Tank Lining",
  "Industrial Service",
  "Chiller Installation",
  "Chiller Maintenance",
  "Other",
];

const SITES = [
  "Aboveground",
  "Underground",
  "Rooftop",
  "Inside Building",
  "Outdoor",
  "Plant Room",
  "Not Sure",
];

const inputClass =
  "w-full rounded-sm border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-brand dark:border-white/15 dark:bg-neutral-900 dark:text-white dark:placeholder:text-white/30";

const labelClass =
  "mb-1.5 block text-xs font-semibold uppercase tracking-[0.08em] text-neutral-500 dark:text-white/45";

export default function RfqForm() {
  const [form, setForm] = useState({
    need: "",
    requirement: "",
    site: "",
    name: "",
    company: "",
    mobile: "",
    email: "",
    project_location: "",
    details: "",
    company_website: "", // honeypot
  });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [error, setError] = useState("");

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.need || !form.name || !form.mobile) {
      setStatus("error");
      setError(
        "Please select what you need and share your name and mobile number.",
      );
      return;
    }

    setStatus("submitting");
    setError("");

    try {
      const res = await fetch("/api/contact", {
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
          Request Received
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-neutral-500 dark:text-white/55">
          Thank you — our engineering team will review your requirement and get
          back to you shortly.
        </p>
        <button
          onClick={() => {
            setForm({
              need: "",
              requirement: "",
              site: "",
              name: "",
              company: "",
              mobile: "",
              email: "",
              project_location: "",
              details: "",
              company_website: "",
            });
            setStatus("idle");
          }}
          className="mt-6 text-sm font-semibold text-brand hover:text-brand-dark"
        >
          Submit another request
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

      {/* Step 1 — What do you need */}
      <div>
        <label className={labelClass}>What Do You Need?</label>
        <div className="flex flex-wrap gap-2">
          {NEEDS.map((n) => (
            <button
              type="button"
              key={n}
              onClick={() => setForm((f) => ({ ...f, need: n }))}
              className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                form.need === n
                  ? "border-brand bg-brand text-white"
                  : "border-neutral-300 text-neutral-600 hover:border-brand hover:text-brand dark:border-white/15 dark:text-white/60"
              }`}
            >
              {n}
            </button>
          ))}
        </div>
      </div>

      {/* Step 2 — Basic requirement */}
      <div>
        <label htmlFor="requirement" className={labelClass}>
          Basic Requirement
        </label>
        <input
          id="requirement"
          value={form.requirement}
          onChange={update("requirement")}
          placeholder="e.g. 20,000 L FRP tank, or chiller make/model & issue"
          className={inputClass}
        />
      </div>

      {/* Step 3 — Installation / site */}
      <div>
        <label className={labelClass}>Installation / Site</label>
        <div className="flex flex-wrap gap-2">
          {SITES.map((s) => (
            <button
              type="button"
              key={s}
              onClick={() => setForm((f) => ({ ...f, site: s }))}
              className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                form.site === s
                  ? "border-brand bg-brand text-white"
                  : "border-neutral-300 text-neutral-600 hover:border-brand hover:text-brand dark:border-white/15 dark:text-white/60"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Customer details */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full Name *
          </label>
          <input
            id="name"
            value={form.name}
            onChange={update("name")}
            className={inputClass}
            required
          />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            Company
          </label>
          <input
            id="company"
            value={form.company}
            onChange={update("company")}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="mobile" className={labelClass}>
            Mobile / WhatsApp *
          </label>
          <input
            id="mobile"
            value={form.mobile}
            onChange={update("mobile")}
            className={inputClass}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={update("email")}
            className={inputClass}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="project_location" className={labelClass}>
            Project Location
          </label>
          <input
            id="project_location"
            value={form.project_location}
            onChange={update("project_location")}
            placeholder="City / Region"
            className={inputClass}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="details" className={labelClass}>
            Additional Details
          </label>
          <textarea
            id="details"
            value={form.details}
            onChange={update("details")}
            rows={4}
            placeholder="Stored liquid, concentration, temperature, capacity, dimensions, standards, or chiller manufacturer/model/serial number"
            className={inputClass}
          />
        </div>
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
            Request Quotation
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
