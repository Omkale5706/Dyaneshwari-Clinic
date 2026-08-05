import { ArrowUp, CalendarDays, PhoneCall, MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { clinic } from '../../data/site';

export function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <a aria-label="Call clinic" href={`tel:${clinic.phone}`} className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white shadow-soft transition hover:scale-105 sm:flex lg:bottom-8 lg:right-8">
        <PhoneCall size={20} />
      </a>
      <a aria-label="WhatsApp clinic" href={`https://wa.me/${clinic.whatsapp.replace(/[^\d]/g, '')}`} className="fixed bottom-24 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-soft transition hover:scale-105 sm:flex lg:bottom-28 lg:right-8">
        <MessageCircle size={20} />
      </a>
      {visible ? (
        <button aria-label="Scroll to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-40 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-soft transition hover:bg-slate-50 sm:flex lg:bottom-48 lg:right-8">
          <ArrowUp size={20} />
        </button>
      ) : null}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/70 bg-white/90 px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 shadow-[0_-10px_30px_rgba(15,118,110,0.12)] backdrop-blur-xl sm:hidden">
        <Link to="/appointment" aria-label="Book an appointment" className="flex min-h-12 flex-col items-center justify-center gap-1 rounded-2xl text-xs font-semibold text-brand-700 transition active:scale-95"><CalendarDays size={19} /><span>Book</span></Link>
        <a href={`tel:${clinic.phone}`} aria-label="Call clinic" className="flex min-h-12 flex-col items-center justify-center gap-1 rounded-2xl text-xs font-semibold text-brand-700 transition active:scale-95"><PhoneCall size={19} /><span>Call</span></a>
        <a href={`https://wa.me/${clinic.whatsapp.replace(/[^\d]/g, '')}`} aria-label="WhatsApp clinic" className="flex min-h-12 flex-col items-center justify-center gap-1 rounded-2xl bg-brand-600 text-xs font-semibold text-white shadow-soft transition active:scale-95"><MessageCircle size={19} /><span>WhatsApp</span></a>
      </div>
    </>
  );
}
