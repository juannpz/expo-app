import { ActivityIndicator, Pressable, Text } from 'react-native';

import { getButtonClassName } from './ButtonFactory';
import { ButtonProps } from './button.definition';

export function Button({
  title,
  variant = 'primary',
  onPress,
  disabled = false,
  loading = false,
  className,
}: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      className={getButtonClassName(variant, disabled || loading, className)}>
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text className="text-base font-semibold">{title}</Text>
      )}
    </Pressable>
  );
}
