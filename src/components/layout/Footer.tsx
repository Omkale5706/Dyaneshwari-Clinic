import { MapPin, Phone, Mail, Clock3, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { clinic } from '../../data/site';

export function Footer() {
  return (
    <footer className="border-t border-white/70 bg-slate-950 text-white">
      <div className="container mx-auto grid gap-10 py-12 sm:py-16 lg:grid-cols-[1.4fr_1fr_1fr] container-padding">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-500 text-white shadow-soft">+</span>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-brand-200">Clinic Logo</p>
              <h2 className="text-2xl font-semibold">{clinic.name}</h2>
            </div>
          </div>
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">Modern family healthcare with a calm, reassuring experience for patients of every age.</p>
          <div className="mt-6 flex gap-3 text-slate-200">
            <a aria-label="WhatsApp" href={`https://wa.me/${clinic.whatsapp.replace(/[^\d]/g, '')}`} className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition hover:bg-white/10"><MessageCircle size={18} /></a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <div className="mt-5 grid gap-3 text-sm text-slate-300">
            {['/','/doctors','/appointment','/contact','/privacy-policy'].map((link) => (
              <Link key={link} to={link} className="rounded transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-300">{link.replace('/', '').replace('-', ' ').replace(/\b\w/g, (char) => char.toUpperCase()) || 'Home'}</Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Contact</h3>
          <div className="mt-5 space-y-4 text-sm text-slate-300">
            <p className="flex gap-3"><MapPin size={18} className="mt-0.5 shrink-0 text-brand-300" /> {clinic.address}</p>
            <p className="flex gap-3"><Phone size={18} className="mt-0.5 shrink-0 text-brand-300" /> <a href={`tel:${clinic.phone}`} className="rounded hover:text-white">{clinic.phone}</a></p>
            <p className="flex gap-3 break-all"><Mail size={18} className="mt-0.5 shrink-0 text-brand-300" /> <a href={`mailto:${clinic.email}`} className="rounded hover:text-white">{clinic.email}</a></p>
            <p className="flex gap-3"><Clock3 size={18} className="mt-0.5 text-brand-300" /> {clinic.timings}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} {clinic.name}. All rights reserved.
      </div>
    </footer>
  );
}
