import { AnchorHTMLAttributes, ButtonHTMLAttributes, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type BaseProps = {
  variant?: ButtonVariant;
  fullWidth?: boolean;
};

type Props = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement>;

const styles: Record<ButtonVariant, string> = {
  primary: 'bg-brand-600 text-white shadow-soft hover:bg-brand-700',
  secondary: 'bg-white text-brand-700 border border-brand-100 hover:bg-brand-50',
  ghost: 'bg-transparent text-brand-700 hover:bg-brand-50'
};

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(function Button(
  { className, variant = 'primary', fullWidth, href, children, ...props },
  ref
) {
  const classes = cn(
    'button-ui relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-2xl px-5 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft active:translate-y-0 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600',
    styles[variant],
    fullWidth && 'w-full',
    className
  );

  if (href && href.startsWith('/')) {
    return (
      <Link ref={ref as never} to={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a ref={ref as never} href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button ref={ref as never} className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
});
