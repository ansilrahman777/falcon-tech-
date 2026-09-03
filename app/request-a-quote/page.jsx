import PageHero from "@/components/common/PageHero";
import RfqForm from "@/components/contact/RfqForm";

export const metadata = {
  title: "Request a Quote | Falcon Technologies - Saudi Arabia",
  description:
    "Request a quotation for tanks, thermal insulation, tank restoration & lining, or chiller installation & maintenance from Falcon Technologies. Engineers and consultants can also submit technical RFQs.",
};

export default function RequestAQuote() {
  return (
    <div className="w-full overflow-hidden">
      <PageHero
        eyebrow="Get Started"
        title="Request a Quote"
        description="Tell us what you need — water, diesel or chemical tanks, thermal insulation, tank restoration & lining, or chiller installation & maintenance — and our engineers will follow up with a tailored quotation."
        breadcrumb="Request a Quote"
        image="/assets/images/home/hero-slide-1.png"
      />

      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_1.4fr] lg:px-0 lg:py-24">
          <div>
            <div className="inline-flex h-7.5 items-center rounded-full border border-neutral-300 px-4.25 dark:border-white/15">
              <span className="text-[12px] font-medium uppercase tracking-[-0.01em] text-neutral-900 dark:text-white">
                How It Works
              </span>
            </div>
            <h2 className="mt-5 text-[30px] font-normal leading-[1.1] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[36px]">
              Simple Customer or Engineer — Either Way, We've Got You
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
              Choose what you need, add the basics, and tell us where it's
              going. Include capacity, standards or technical details if you
              have them — if not, our engineers will follow up to confirm
              requirements before quoting.
            </p>

            <ol className="mt-8 space-y-5">
              {[
                {
                  step: "01",
                  title: "What Do You Need?",
                  desc: "Tank, insulation, restoration, lining, industrial service or chiller work.",
                },
                {
                  step: "02",
                  title: "Basic Requirement",
                  desc: "Capacity for tanks, or make/model and issue for chiller service.",
                },
                {
                  step: "03",
                  title: "Installation / Site",
                  desc: "Aboveground, underground, rooftop, plant room or not sure yet.",
                },
                {
                  step: "04",
                  title: "Your Details",
                  desc: "Name, company, mobile/WhatsApp and project location.",
                },
              ].map((s) => (
                <li key={s.step} className="flex gap-4">
                  <span className="text-sm font-semibold text-brand">
                    {s.step}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                      {s.title}
                    </p>
                    <p className="mt-0.5 text-sm text-neutral-500 dark:text-white/55">
                      {s.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="mt-8 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
              Prefer to just talk it through, or have a general question? Use
              our{" "}
              <a
                href="/contact-us"
                className="text-brand underline underline-offset-2 hover:text-brand-dark"
              >
                Contact page
              </a>{" "}
              instead.
            </p>
          </div>

          <div>
            <div className="inline-flex h-7.5 items-center rounded-full border border-neutral-300 px-4.25 dark:border-white/15">
              <span className="text-[12px] font-medium uppercase tracking-[-0.01em] text-neutral-900 dark:text-white">
                Request a Quote
              </span>
            </div>
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
  );
}
