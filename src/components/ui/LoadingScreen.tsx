import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Stethoscope } from 'lucide-react';

export function LoadingScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setShow(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-slate-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.92, opacity: 0 }} className="flex flex-col items-center gap-4 text-white">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-500 shadow-soft">
              <Stethoscope size={30} />
            </span>
            <p className="text-sm uppercase tracking-[0.35em] text-brand-200">Loading Dyaneshwari Clinic</p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}