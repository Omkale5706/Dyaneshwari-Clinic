import { motion } from 'framer-motion';
import { Activity, ArrowRight, CalendarDays, CheckCircle2, ChevronDown, Clock3, HeartPulse, Mail, MapPin, MessageCircle, PhoneCall, ShieldCheck, Stethoscope, UsersRound } from 'lucide-react';
import { SEO } from '../components/ui/SEO';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { SectionHeading } from '../components/ui/SectionHeading';
import { clinic, doctor } from '../data/site';

const services = [
  { title: 'General Consultation', description: 'Clear, practical support for everyday health concerns and follow-up care.', icon: Stethoscope },
  { title: 'Family Healthcare', description: 'Thoughtful care for children, adults, and senior citizens in one familiar clinic.', icon: UsersRound },
  { title: 'Preventive Care', description: 'Guidance for blood pressure, diabetes, vaccinations, and healthier routines.', icon: HeartPulse },
  { title: 'Clinical Support', description: 'Convenient consultation and care for common medical needs close to home.', icon: Activity }
];

const reasons = [
  { title: 'Doctor-led care', description: 'Direct consultation with a calm, patient-first approach.', icon: Stethoscope },
  { title: 'Simple booking', description: 'Book online or connect immediately by WhatsApp and phone.', icon: CalendarDays },
  { title: 'Trusted support', description: 'Clear communication for patients and their families.', icon: ShieldCheck }
];

const testimonials = [
  { quote: 'The appointment process is simple, and the doctor explains everything clearly.', name: 'Amit Joshi', role: 'Parent' },
  { quote: 'Respectful care and a quick response on WhatsApp whenever we need help.', name: 'Sunita Deshmukh', role: 'Senior Citizen' },
  { quote: 'A professional, reassuring clinic experience for our whole family.', name: 'Rahul Kulkarni', role: 'Working Professional' }
];

const faqs = [
  ['How do I book an appointment?', 'Use the appointment form, call the clinic, or send a WhatsApp message.'],
  ['What are the clinic timings?', 'Monday to Saturday, 10:00 AM to 1:00 PM and 5:00 PM to 10:00 PM.'],
  ['Will my information be stored on this website?', 'No. Your form is sent securely to Formspree for delivery to the clinic email.'],
  ['When should I seek emergency help?', 'For severe or life-threatening symptoms, please seek immediate emergency hospital care.']
];

export function HomePage() {
  return (
    <>
      <SEO title="Trusted Family Healthcare" description="DYANESHWARI CLINIC by Dr. Pravin Mohite. Direct booking, WhatsApp, and call support for patients." />

      <section className="relative overflow-hidden pt-6 sm:pt-8 lg:pt-12">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(15,118,110,0.1),transparent_26%)]" />
        <div className="container mx-auto max-w-screen-2xl pb-14 pt-10 sm:pb-20 sm:pt-14 lg:pb-24 container-padding">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <span className="inline-flex rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700">{clinic.name}</span>
            <h1 className="mt-5 max-w-3xl text-[2.15rem] font-semibold leading-[1.08] tracking-tight text-slate-900 sm:mt-6 sm:text-5xl lg:text-6xl lg:leading-[1.05]">Trusted care, simple booking, direct support.</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">Meet Dr. Pravin Mohite at DYANESHWARI CLINIC for family healthcare. Book appointments instantly through our online form, WhatsApp, or Call.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="/appointment" className="w-full sm:w-auto"><ArrowRight size={16} /> Book Appointment</Button>
              <Button href={`https://wa.me/${clinic.whatsapp.replace(/[^\d]/g, '')}`} variant="secondary" className="w-full sm:w-auto"><MessageCircle size={16} /> WhatsApp</Button>
              <Button href={`tel:${clinic.phone}`} variant="ghost" className="w-full sm:w-auto"><PhoneCall size={16} /> Call Now</Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto max-w-screen-2xl container-padding">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }}>
          <Card className="grid items-center gap-5 border-brand-100 bg-white/85 sm:grid-cols-[auto_1fr] sm:gap-6">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-700"><Clock3 size={24} /></span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">Clinic Timing</p>
              <h2 className="mt-2 text-xl font-semibold text-slate-900 sm:text-2xl">Monday – Saturday</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">10:00 AM – 1:00 PM <span className="hidden sm:inline">&nbsp;•&nbsp;</span><span className="block sm:inline">5:00 PM – 10:00 PM</span></p>
            </div>
          </Card>
        </motion.div>
      </section>

      <section className="section-spacing container mx-auto max-w-screen-2xl container-padding">
        <SectionHeading eyebrow="Doctor Information" title="Meet Dr. Pravin Mohite" description="Professional family care with a clear, compassionate approach and easy ways to connect." />
        <Card className="grid gap-6 md:grid-cols-[minmax(250px,360px)_1fr] md:gap-8">
          <div className="overflow-hidden rounded-[1.75rem] bg-slate-100">
            <img src="/doctor.png" alt="Dr. Pravin Mohite" loading="lazy" decoding="async" className="aspect-[4/5] h-full w-full object-cover object-center" />
          </div>
          <div className="flex min-w-0 flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-600">Dr. Pravin Mohite</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">BHMS (MUHS Nashik), PGDEMS, PGDCC</h2>
            <p className="mt-3 text-base text-slate-600 sm:text-lg">{doctor.specialization}</p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">{doctor.bio}</p>
            <div className="mt-6 grid gap-3 rounded-3xl bg-brand-50 p-5 text-sm text-slate-700 sm:grid-cols-2">
              <ContactDetail icon={<PhoneCall size={17} />} label="Phone" value={clinic.phone} href={`tel:${clinic.phone}`} />
              <ContactDetail icon={<Mail size={17} />} label="Email" value={clinic.email} href={`mailto:${clinic.email}`} />
              <ContactDetail icon={<MapPin size={17} />} label="Address" value={clinic.address} className="sm:col-span-2" />
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="/appointment" className="w-full sm:w-auto">Book Appointment</Button>
              <Button href={`https://wa.me/${clinic.whatsapp.replace(/[^\d]/g, '')}`} variant="secondary" className="w-full sm:w-auto">WhatsApp</Button>
              <Button href={`tel:${clinic.phone}`} variant="ghost" className="w-full sm:w-auto">Call</Button>
            </div>
          </div>
        </Card>
      </section>

      <section className="section-spacing bg-white/55">
        <div className="container mx-auto max-w-screen-2xl container-padding">
          <SectionHeading eyebrow="Services" title="Family healthcare, made approachable" description="Practical care for the concerns that matter to patients and families every day." />
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">{services.map(({ title, description, icon: Icon }) => <Card key={title} className="h-full"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700"><Icon size={22} /></span><h3 className="mt-5 text-xl font-semibold text-slate-900">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{description}</p></Card>)}</div>
        </div>
      </section>

      <section className="section-spacing container mx-auto max-w-screen-2xl container-padding">
        <SectionHeading eyebrow="Why Choose Us" title="Care that feels clear and personal" />
        <div className="grid gap-5 md:grid-cols-3">{reasons.map(({ title, description, icon: Icon }) => <Card key={title} className="h-full"><Icon className="text-brand-600" size={25} /><h3 className="mt-5 text-xl font-semibold text-slate-900">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{description}</p></Card>)}</div>
      </section>

      <section className="section-spacing bg-white/55">
        <div className="container mx-auto max-w-screen-2xl container-padding">
          <SectionHeading eyebrow="Patient Testimonials" title="Trusted by local families" />
          <div className="grid gap-5 lg:grid-cols-3">{testimonials.map((item) => <Card key={item.name} className="flex h-full flex-col"><div className="flex gap-1 text-brand-500" aria-label="Five-star rating">★★★★★</div><blockquote className="mt-5 text-base leading-7 text-slate-700">“{item.quote}”</blockquote><div className="mt-6"><p className="font-semibold text-slate-900">{item.name}</p><p className="mt-1 text-sm text-slate-500">{item.role}</p></div></Card>)}</div>
        </div>
      </section>

      <section className="section-spacing container mx-auto max-w-screen-2xl container-padding">
        <SectionHeading eyebrow="FAQ" title="Helpful answers before your visit" />
        <div className="mx-auto grid max-w-3xl gap-3">{faqs.map(([question, answer]) => <details key={question} className="group rounded-2xl border border-white/70 bg-white/80 px-5 py-4 shadow-sm backdrop-blur-xl"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-slate-900"><span>{question}</span><ChevronDown className="shrink-0 text-brand-600 transition group-open:rotate-180" size={20} /></summary><p className="pr-8 pt-4 text-sm leading-7 text-slate-600">{answer}</p></details>)}</div>
      </section>

      <section className="section-spacing bg-white/55">
        <div className="container mx-auto max-w-screen-2xl container-padding">
          <SectionHeading eyebrow="Contact" title="Visit or contact the clinic" description="Choose the option that is easiest for you. We are here to help with your next visit." />
          <Card className="grid overflow-hidden p-0 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="flex flex-col justify-center p-6 sm:p-8"><h3 className="text-2xl font-semibold text-slate-900">{clinic.name}</h3><p className="mt-4 text-sm leading-7 text-slate-600">{clinic.address}</p><p className="mt-3 text-sm leading-7 text-slate-600">{clinic.timings}</p><div className="mt-6"><Button href="/contact">Contact the Clinic</Button></div></div>
            <iframe title="Dyaneshwari Clinic location" src={clinic.mapUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="min-h-[280px] w-full border-0 sm:min-h-[360px]" />
          </Card>
        </div>
      </section>
    </>
  );
}

function ContactDetail({ icon, label, value, href, className = '' }: { icon: React.ReactNode; label: string; value: string; href?: string; className?: string }) {
  const content = <><span className="mt-0.5 shrink-0 text-brand-700">{icon}</span><span className="min-w-0"><span className="block text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">{label}</span><span className="mt-1 block break-words text-slate-700">{value}</span></span></>;
  return href ? <a href={href} className={`flex gap-3 rounded-xl transition hover:text-brand-800 ${className}`}>{content}</a> : <div className={`flex gap-3 ${className}`}>{content}</div>;
}
