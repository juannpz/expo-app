import { cva } from 'class-variance-authority';
import { cn } from 'utils/cn.util';

import { ButtonVariant } from './button.definition';

const buttonVariants = cva(
  'flex items-center justify-center rounded-xl px-4 py-2 font-semibold transition-all active:scale-[0.98]',
  {
    variants: {
      variant: {
        primary: 'bg-sky-400 text-white hover:bg-sky-500',
        secondary: 'bg-white text-black border border-gray-300 hover:bg-gray-100',
        ghost: 'bg-transparent text-black hover:bg-gray-200',
        danger: 'bg-red-500 text-white hover:bg-red-600',
      },
      disabled: {
        true: 'opacity-50 pointer-events-none',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

export function getButtonClassName(
  variant: ButtonVariant = 'primary',
  disabled = false,
  extraClass = ''
) {
  return cn(buttonVariants({ variant, disabled }), extraClass);
}
