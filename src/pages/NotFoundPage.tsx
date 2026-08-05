import { SEO } from '../components/ui/SEO';
import { Button } from '../components/ui/Button';

export function NotFoundPage() {
  return (
    <section className="section-spacing container mx-auto flex min-h-[70vh] items-center justify-center container-padding">
      <SEO title="Page Not Found" description="The requested page could not be found." />
      <div className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-600">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900">Page not found</h1>
        <p className="mt-4 text-sm leading-7 text-slate-600">The page you requested does not exist. Return to the home page or book an appointment directly.</p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href="/">Go Home</Button>
          <Button href="/appointment" variant="secondary">Book Appointment</Button>
        </div>
      </div>
    </section>
  );
}
