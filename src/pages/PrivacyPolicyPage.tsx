import { SEO } from '../components/ui/SEO';
import { Card } from '../components/ui/Card';
import { SectionHeading } from '../components/ui/SectionHeading';

export function PrivacyPolicyPage() {
  return (
    <>
      <SEO title="Privacy Policy" description="Privacy policy placeholder for the clinic website form handling and data usage." />
      <section className="section-spacing container mx-auto container-padding">
        <SectionHeading eyebrow="Privacy" title="Privacy Policy" />
        <Card>
          <p className="text-sm leading-7 text-slate-600">This website does not store patient submissions in a database. All form data is sent directly to Formspree for delivery to clinic email. Replace this placeholder policy with your official legal text before launch.</p>
        </Card>
      </section>
    </>
  );
}
