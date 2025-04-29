// app/register.tsx
import { View, Text } from 'react-native';

import { RegisterForm } from '../../components/forms/RegisterForm';

export default function RegisterScreen() {
  return (
    <View className="flex-1 items-center justify-center px-4">
      <Text className="mb-6 text-3xl font-semibold">Create an Account</Text>
      <RegisterForm />
    </View>
  );
}
