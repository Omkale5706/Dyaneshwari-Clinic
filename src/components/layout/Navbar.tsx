import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall, MessageCircleMore, Stethoscope } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import { clinic } from '../../data/site';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Doctors', href: '/doctors' },
  { label: 'Appointment', href: '/appointment' },
  { label: 'Contact', href: '/contact' }
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/60 bg-white/75 shadow-[0_8px_30px_rgba(15,118,110,0.04)] backdrop-blur-xl">
      <div className="container mx-auto flex h-[4.5rem] items-center justify-between sm:h-20 container-padding">
        <Link to="/" className="flex min-w-0 items-center gap-3 font-semibold text-slate-900" aria-label={`${clinic.name} home`}>
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-soft">
            <Stethoscope size={20} />
          </span>
          <span>
            <span className="block truncate text-base leading-tight sm:text-lg">{clinic.name}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 ${pathname === link.href ? 'bg-brand-50 text-brand-700' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href={`tel:${clinic.phone}`} variant="secondary">
            <PhoneCall size={16} /> Call Now
          </Button>
          <Button href={`https://wa.me/${clinic.whatsapp.replace(/[^\d]/g, '')}`} variant="primary">
            <MessageCircleMore size={16} /> WhatsApp
          </Button>
        </div>

        <button aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation" className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-brand-50 hover:text-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 lg:hidden" onClick={() => setOpen((value) => !value)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-x-0 bottom-0 top-[4.5rem] z-40 bg-slate-950/15 backdrop-blur-[2px] lg:hidden" onClick={() => setOpen(false)}>
            <motion.nav id="mobile-navigation" initial={{ opacity: 0, y: -18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }} transition={{ duration: 0.2 }} className="border-b border-slate-100 bg-white px-4 py-5 shadow-soft" onClick={(event) => event.stopPropagation()}>
            <div className="mx-auto flex max-w-7xl flex-col gap-2">
              {links.map((link) => (
                <Link key={link.href} to={link.href} onClick={() => setOpen(false)} className="flex min-h-12 items-center rounded-2xl px-4 py-3 text-base font-medium text-slate-700 transition hover:bg-brand-50 hover:text-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600">
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 grid grid-cols-2 gap-3">
                <Button href={`tel:${clinic.phone}`} variant="secondary" fullWidth>
                  <PhoneCall size={16} /> Call
                </Button>
                <Button href={`https://wa.me/${clinic.whatsapp.replace(/[^\d]/g, '')}`} fullWidth>
                  <MessageCircleMore size={16} /> WhatsApp
                </Button>
              </div>
            </div>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
