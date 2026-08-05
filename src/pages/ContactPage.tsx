import { SEO } from '../components/ui/SEO';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { ClinicForm } from '../components/forms/ClinicForm';


export function ContactPage() {
  return (
    <>
      <SEO title="Contact" description="Contact Dyaneshwari Clinic for appointments, questions, and home visit requests." />
      <section className="section-spacing container mx-auto container-padding">
        <SectionHeading eyebrow="Contact" title="Reach the clinic" />
        <div className="grid items-start gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
          <ClinicForm title="Quick Contact" submitLabel="Send Message" mode="contact" />
        </div>
      </section>
    </>
  );
}
