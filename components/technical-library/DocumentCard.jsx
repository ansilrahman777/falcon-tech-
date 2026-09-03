"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Download,
  FileText,
  FileSpreadsheet,
  Lock,
  ArrowUpRight,
  Eye,
} from "lucide-react";

const typeIcon = {
  PDF: FileText,
  DOCX: FileText,
  XLSX: FileSpreadsheet,
};

export default function DocumentCard({ doc, categoryLabel, index = 0 }) {
  const Icon = typeIcon[doc.type] || FileText;
  const isGated = doc.access === "request";

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: Math.min(index, 6) * 0.05 }}
      className="group flex flex-col rounded-sm border border-neutral-200 bg-white p-5 transition-colors hover:border-brand/40 dark:border-white/10 dark:bg-neutral-900 sm:p-6"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand/10">
          <Icon size={19} strokeWidth={1.5} className="text-brand" />
        </div>
        <span className="rounded-full border border-neutral-200 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-neutral-400 dark:border-white/15 dark:text-white/40">
          {doc.type}
        </span>
      </div>

      <h3 className="mt-4 text-sm font-semibold leading-snug text-neutral-900 dark:text-white">
        {doc.title}
      </h3>
      <p className="mt-1 text-xs text-neutral-400 dark:text-white/40">
        {categoryLabel}
      </p>

      <div className="mt-4 flex items-center gap-3 text-[11px] text-neutral-400 dark:text-white/35">
        <span>{doc.size}</span>
        <span className="h-1 w-1 rounded-full bg-neutral-300 dark:bg-white/20" />
        <span>Updated {doc.updated}</span>
      </div>

      <div className="mt-5 border-t border-neutral-100 pt-4 dark:border-white/10">
        {isGated ? (
          <Link
            href={`/request-a-quote?ref=technical-library&doc=${doc.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-600 transition-colors hover:text-brand dark:text-white/60"
          >
            <Lock size={13} />
            Request via Technical RFQ
            <ArrowUpRight
              size={13}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        ) : (
          <div className="flex items-center gap-4">
            <a
              href={doc.file}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-600 transition-colors hover:text-brand dark:text-white/60"
            >
              <Eye size={13} />
              View
            </a>
            <span className="h-3.5 w-px bg-neutral-200 dark:bg-white/15" />
            <a
              href={doc.file}
              download
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand transition-colors hover:text-brand-dark"
            >
              <Download size={13} />
              Download
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
}
