import { useState } from 'react';
import { SEO } from '../components/ui/SEO';
import { SectionHeading } from '../components/ui/SectionHeading';
import { clinic, doctor } from '../data/site';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export function DoctorsPage() {
  return (
    <>
      <SEO title="Doctors" description="Meet the clinic doctor, qualifications, specialization, and consultation timing." />
      <section className="section-spacing container mx-auto container-padding">
        <SectionHeading eyebrow="Doctors" title="Meet Dr Pravin Mohite" description="Professional family care with a clean, calm presentation and direct contact options." />
        <Card className="grid gap-6 md:grid-cols-[minmax(250px,320px)_1fr] md:gap-8">
          <DoctorPortrait />
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-brand-600">{doctor.name}</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">{doctor.qualification}</h2>
            <p className="mt-3 text-lg text-slate-600">{doctor.specialization}</p>
            <p className="mt-4 text-sm leading-7 text-slate-600">{doctor.bio}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Info label="Experience" value={doctor.experience} />
              <Info label="Languages" value={doctor.languages.join(', ')} />
              <Info label="Timing" value={doctor.timing} />
              <Info label="Consultation" value="Appointment and walk-in support" />
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="/appointment" className="w-full sm:w-auto">Book Appointment</Button>
              <Button href={`tel:${clinic.phone}`} variant="secondary" className="w-full sm:w-auto">Call</Button>
              <Button href={`https://wa.me/${clinic.whatsapp.replace(/[^\d]/g, '')}`} variant="ghost" className="w-full sm:w-auto">WhatsApp</Button>
            </div>
          </div>
        </Card>
      </section>
    </>
  );
}

function DoctorPortrait() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="overflow-hidden rounded-[2rem] border border-slate-100 bg-gradient-to-br from-brand-50 via-white to-slate-50 p-4 shadow-soft">
      <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-slate-100">
        {!failed ? (
          <img
            src="/doctor.png"
            alt="Dr Pravin Mohite"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="flex h-full items-center justify-center p-6 text-center text-sm text-slate-400">
            Doctor image not found. Add it as public/doctor.png.
          </div>
        )}
      </div>
      <p className="text-sm font-semibold text-slate-800">Dr Pravin Mohite</p>
      <p className="mt-1 text-xs uppercase tracking-[0.22em] text-brand-600">BHMS, PGDEMS, PGDCC</p>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-brand-50 p-4">
      <p className="text-xs uppercase tracking-[0.22em] text-brand-700">{label}</p>
      <p className="mt-2 text-sm font-medium text-slate-800">{value}</p>
    </div>
  );
}
