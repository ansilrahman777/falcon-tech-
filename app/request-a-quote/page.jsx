"use client";

import PageHero from "@/components/common/PageHero";
import RfqForm from "@/components/contact/RfqForm";

export default function RequestAQuote() {
  return (
    <div>
      <div className="w-full overflow-hidden">
        <PageHero
          eyebrow="Our Work"
          title="Request For a Quotation"
          description="A selection of tank, insulation, restoration, lining and industrial projects delivered across Saudi Arabia's Eastern Province and beyond."
          breadcrumb="Request a Quote"
          image="/assets/images/home/hero-slide-1.png"
        />

        <section className="w-full bg-white dark:bg-neutral-950">
          <div className="mx-auto w-full max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:px-0 lg:py-24">
            <div>
              <h2 className="mt-5 text-[30px] font-normal leading-[1.1] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[36px]">
                Tell Us What You Need
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
                Engineers and consultants can share technical details below —
                standards, drawings and data sheets can follow by email.
              </p>
              <div className="mt-8">
                <RfqForm />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
