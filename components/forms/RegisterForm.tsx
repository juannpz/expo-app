import { useForm } from 'react-hook-form';
import { View } from 'react-native';

import { Button } from '../ui/button/Button';
import { Input } from '../ui/input/Input';

type RegisterData = {
  email: string;
  password: string;
  confirmPassword: string;
};

export function RegisterForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>();

  const onSubmit = (data: RegisterData) => {
    console.log('Register data:', data);
  };

  return (
    <View className="w-full">
      <Input
        name="email"
        control={control}
        label="Email"
        placeholder="Enter your email"
        error={errors.email?.message} // Aquí pasamos el mensaje de error
      />
      <Input
        name="password"
        control={control}
        label="Password"
        placeholder="Enter your password"
        secureTextEntry
        error={errors.password?.message} // Aquí pasamos el mensaje de error
      />
      <Input
        variant="underlined"
        name="confirmPassword"
        control={control}
        label="Confirm Password"
        placeholder="Confirm your password"
        secureTextEntry
        error={errors.confirmPassword?.message} // Aquí pasamos el mensaje de error
      />

      <Button
        variant="primary"
        title="Register"
        onPress={handleSubmit(onSubmit)}
        className="mt-4"
      />
    </View>
  );
}
