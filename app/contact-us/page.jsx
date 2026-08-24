import PageHero from "@/components/common/PageHero";
import ContactInfoSection from "@/components/contact/ContactInfoSection";
import RfqForm from "@/components/contact/RfqForm";

export const metadata = {
  title: "Contact Falcon Technologies | Request a Quote - Saudi Arabia",
  description:
    "Get in touch with Falcon Technologies for tank solutions, thermal insulation, tank restoration & lining, industrial services and chiller installation & maintenance. Call, WhatsApp or request a quotation.",
};

export default function ContactUs() {
  return (
    <div className="w-full overflow-hidden">
      <PageHero
        eyebrow="Let us connect"
        title="Contact us"
        description="At Falcon Technologies, we value every connection. Whether you're seeking engineering solutions, requesting a consultation, or simply want to learn more about our services, our team is here to assist you."
        breadcrumb="Industries"
        image="/assets/images/home/hero-slide-2.png"
      />
      <section className="w-full bg-white dark:bg-neutral-950">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_1.4fr] lg:px-0 lg:py-24">
          <div>
            <div className="inline-flex h-7.5 items-center rounded-full border border-neutral-300 px-4.25 dark:border-white/15">
              <span className="text-[12px] font-medium uppercase tracking-[-0.01em] text-neutral-900 dark:text-white">
                Contact Details
              </span>
            </div>
            <h2 className="mt-5 text-[30px] font-normal leading-[1.1] tracking-[-0.03em] text-neutral-900 dark:text-white sm:text-[36px]">
              Prefer to Call or WhatsApp?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-500 dark:text-white/55">
              Reach our Dammam office directly, or send your requirement below
              and we'll route it to the right engineer.
            </p>
            <div className="mt-8">
              <ContactInfoSection />
            </div>
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
