import { Controller } from 'react-hook-form';
import { TextInput, View, Text } from 'react-native';

import { getInputClassName } from './InputFactory';
import type { InputProps } from './input.definition';

export function Input({
  name,
  control,
  label,
  error,
  variant = 'default',
  className,
  disabled = false,
  focused = false,
  ...props
}: InputProps) {
  const inputClass = getInputClassName(variant, disabled, focused);

  return (
    <View className="vg mb-4 w-full">
      {label && <Text className="mb-2 text-gray-700">{label}</Text>}

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextInput
            {...field}
            placeholder={props.placeholder}
            className={`${inputClass} ${className}`}
            editable={!disabled}
            {...props}
          />
        )}
      />

      {error && <Text className="text-sm text-red-500">{error}</Text>}
    </View>
  );
}
