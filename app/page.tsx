import { Hero } from "@/components/site/hero";
import { Manifesto } from "@/components/site/manifesto";
import { Services } from "@/components/site/services";
import { Metrics } from "@/components/site/metrics";
import { Pricing } from "@/components/site/pricing";
import { Testimonials } from "@/components/site/testimonials";
import { Faq } from "@/components/site/faq";
import { faqs } from "@/lib/data";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Manifesto />
      <Services />
      <Metrics />
      <Pricing />
      <Testimonials />
      <Faq />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
