import { ReactNode, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CircleCheck, X } from 'lucide-react';
import { Button } from './Button';

type Props = {
  open: boolean;
  title: string;
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
  children?: ReactNode;
};

export function Modal({ open, title, message, type, onClose, children }: Props) {
  useEffect(() => {
    const handler = (event: KeyboardEvent) => event.key === 'Escape' && onClose();
    if (open) {
      window.addEventListener('keydown', handler);
    }
    return () => window.removeEventListener('keydown', handler);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div role="dialog" aria-modal="true" aria-labelledby="modal-title" className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/50 px-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            className="w-full max-w-md rounded-3xl border border-white/70 bg-white p-6 shadow-soft"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className={`text-sm font-semibold uppercase tracking-[0.25em] ${type === 'success' ? 'text-emerald-600' : 'text-rose-600'}`}>{type === 'success' ? 'Success' : 'Error'}</p>
                <h3 id="modal-title" className="mt-2 text-2xl font-semibold text-slate-900">{title}</h3>
              </div>
              <button aria-label="Close dialog" onClick={onClose} className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900">
                <X size={18} />
              </button>
            </div>
            {type === 'success' ? <CircleCheck aria-hidden="true" className="mt-5 text-emerald-500" size={42} /> : null}
            <p className="mt-4 text-sm leading-6 text-slate-600">{message}</p>
            {children ? <div className="mt-6">{children}</div> : null}
            <div className="mt-6 flex justify-end">
              <Button variant="primary" onClick={onClose}>Close</Button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
