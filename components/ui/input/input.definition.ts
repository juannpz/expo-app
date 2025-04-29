import { Control } from 'react-hook-form';
import type { TextInputProps } from 'react-native';

export type InputVariant = 'default' | 'outlined' | 'underlined' | 'ghost';

export interface InputProps extends TextInputProps {
  variant?: InputVariant;
  error?: string | null;
  label?: string;
  className?: string;
  disabled?: boolean;
  focused?: boolean;
  control?: Control<any>;
  name: string;
}
