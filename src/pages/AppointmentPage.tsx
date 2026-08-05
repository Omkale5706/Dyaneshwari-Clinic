import { SEO } from '../components/ui/SEO';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ClinicForm } from '../components/forms/ClinicForm';

export function AppointmentPage() {
  return (
    <>
      <SEO title="Book Appointment" description="Book a clinic consultation through a secure Formspree request form." />
      <section className="section-spacing container mx-auto container-padding">
        <SectionHeading eyebrow="Appointment" title="Book your visit" description="Fill out the form and your request will be delivered directly to the clinic email via Formspree." />
        <ClinicForm title="Appointment Request" submitLabel="Book Appointment" mode="appointment" />
      </section>
    </>
  );
}
