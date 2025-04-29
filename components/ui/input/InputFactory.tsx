import { cva } from 'class-variance-authority';
import { cn } from 'utils/cn.util';

import { InputVariant } from './input.definition';

const inputVariants = cva(
  'w-full rounded-lg border px-4 py-2 text-base transition-all focus:outline-none focus:ring-2 focus:ring-blue-500',
  {
    variants: {
      variant: {
        default: 'border-gray-300',
        error: 'border-red-500',
        outlined: 'border-2 border-gray-300',
        underlined: 'border-b-2 border-gray-300',
        ghost: 'border-none',
      },
      disabled: {
        true: 'bg-gray-200 text-gray-400 cursor-not-allowed',
      },
      focused: {
        true: 'ring-2 ring-blue-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export function getInputClassName(
  variant: InputVariant = 'default',
  disabled = false,
  focused = false
) {
  return cn(inputVariants({ variant, disabled, focused }));
}
