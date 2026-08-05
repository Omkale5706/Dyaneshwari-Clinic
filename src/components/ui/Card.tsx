import { HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('card-ui rounded-3xl border border-white/70 bg-white/80 p-5 shadow-soft backdrop-blur-xl transition duration-300 sm:p-6', className)} {...props} />;
}
