"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays } from "lucide-react";

const posts = [
  {
    id: 1,
    category: "Engineering",
    title: "How Engineering Excellence Drives Reliable Tank Systems",
    excerpt:
      "Discover how application engineering, material selection and manufacturing quality come together to deliver dependable storage solutions.",
    date: "August 18, 2026",
    image: "/assets/images/home/blog.webp",
    href: "/blog/engineering-excellence-tank-systems",
  },
  {
    id: 2,
    category: "Industrial Solutions",
    title: "Choosing the Right Tank System for Your Application",
    excerpt:
      "A practical look at the key factors that influence tank selection, including capacity, stored media, temperature and site conditions.",
    date: "August 10, 2026",
    image: "/assets/images/home/blog.webp",
    href: "/blog/choosing-right-tank-system",
  },
  {
    id: 3,
    category: "Maintenance",
    title: "Why Tank Inspection and Restoration Matter",
    excerpt:
      "Regular inspection and timely restoration can extend service life, protect stored materials and reduce unexpected operational costs.",
    date: "August 02, 2026",
    image: "/assets/images/home/blog.webp",
    href: "/blog/tank-inspection-restoration",
  },
];

export default function BlogSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-neutral-950">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-0 lg:py-24">
        {/* Header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex h-8 items-center rounded-full border border-neutral-300 px-5 dark:border-white/15"
            >
              <span className="text-[12px] font-medium uppercase tracking-[-0.01em] text-neutral-900 dark:text-white">
                Insights & Updates
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="mt-5 text-[38px] font-normal leading-[1.08] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[46px]"
            >
              Knowledge That Moves
              <span className="block">Industry Forward</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-5 max-w-xl text-sm leading-relaxed text-neutral-500 dark:text-white/55 sm:text-base"
            >
              Explore engineering insights, project knowledge and practical
              guidance from our team across storage, fabrication, insulation,
              restoration and industrial services.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 border-b border-neutral-900 pb-1.5 text-sm font-medium text-neutral-900 transition-colors hover:border-brand hover:text-brand dark:border-white dark:text-white"
            >
              View All Insights
              <ArrowUpRight
                size={17}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </motion.div>
        </div>

        {/* Blog cards */}
        <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 lg:mt-14">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group"
            >
              <Link href={post.href} className="block">
                {/* Image */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

                  {/* Category */}
                  <div className="absolute left-5 top-5">
                    <span className="inline-flex items-center rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-medium uppercase tracking-wide text-neutral-900 backdrop-blur">
                      {post.category}
                    </span>
                  </div>

                  {/* Arrow */}
                  <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <ArrowUpRight size={19} strokeWidth={1.7} />
                  </div>
                </div>

                {/* Content */}
                <div className="pt-5">
                  <div className="flex items-center gap-2 text-xs text-neutral-400 dark:text-white/40">
                    <CalendarDays size={14} strokeWidth={1.5} />
                    <span>{post.date}</span>
                  </div>

                  <h3 className="mt-3 text-xl font-medium leading-[1.2] tracking-[-0.02em] text-neutral-900 transition-colors duration-300 group-hover:text-brand dark:text-white">
                    {post.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-neutral-500 dark:text-white/50">
                    {post.excerpt}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm font-medium text-neutral-900 dark:text-white">
                    Read Article
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.7}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
