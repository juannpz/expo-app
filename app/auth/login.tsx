import { Ionicons } from "@expo/vector-icons";
import Logo from "assets/logo/logo";
import ButtonFactory from "components/ui/button/ButtonFactory";
import {
  ButtonSize,
  ButtonVariant,
} from "components/ui/button/button.definition";
import CardFactory from "components/ui/card/CardFactory";
import { CardVariant } from "components/ui/card/card.definition";
import InputFieldFactory from "components/ui/inputField/InputFieldFactory";
import { InputFieldVariant } from "components/ui/inputField/inputField.definition";
import { useState, useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  Alert,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const PrimaryButton = ButtonFactory(ButtonVariant.Primary, ButtonSize.Large);
const LinkButton = ButtonFactory(ButtonVariant.Link, ButtonSize.Medium);
const StandardInputField = InputFieldFactory(InputFieldVariant.Standard);
const ElevatedCard = CardFactory(CardVariant.Elevated);

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const passwordInputRef = useRef<TextInput>(null);

  const validateEmail = (text: string): string => {
    if (!text.trim()) return "El correo electrónico es obligatorio.";
    if (!/\S+@\S+\.\S+/.test(text))
      return "El correo electrónico no es válido.";
    return "";
  };

  const validatePassword = (text: string): string => {
    if (!text) return "La contraseña es obligatoria.";
    if (text.length < 6)
      return "La contraseña debe tener al menos 6 caracteres.";
    return "";
  };

  const handleLogin = async () => {
    const currentEmailError = validateEmail(email);
    const currentPasswordError = validatePassword(password);

    setEmailError(currentEmailError);
    setPasswordError(currentPasswordError);

    if (currentEmailError || currentPasswordError) {
      return;
    }

    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      Alert.alert("Inicio de Sesión Simulado", `Email: ${email}`);
    } catch (error) {
      setPasswordError("Ocurrió un error al intentar iniciar sesión.");
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-50 dark:bg-slate-900">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
          className="px-6"
          keyboardShouldPersistTaps="handled"
        >
          <View className="mb-8 items-center">
            <Logo className="" width={120} height={120} />
            <Text className="text-3xl font-bold text-slate-800 dark:text-slate-100">
              Bienvenido de Nuevo
            </Text>
            <Text className="mt-1 text-base text-slate-600 dark:text-slate-400">
              Inicia sesión para continuar en FinApp.
            </Text>
          </View>

          <ElevatedCard className="p-6 md:p-8">
            <StandardInputField
              label="Correo Electrónico"
              placeholder="tu@ejemplo.com"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                if (emailError) setEmailError(validateEmail(text));
              }}
              keyboardType="email-address"
              leftIcon={
                <Ionicons
                  name="mail-outline"
                  size={20}
                  className="text-slate-400 dark:text-slate-500"
                />
              }
              errorMessage={emailError}
              returnKeyType="next"
              onSubmitEditing={() => passwordInputRef.current?.focus()}
              editable={!isLoading}
            />

            <StandardInputField
              label="Contraseña"
              placeholder="Tu contraseña"
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                if (passwordError) setPasswordError(validatePassword(text));
              }}
              secureTextEntry={!passwordVisible}
              leftIcon={
                <Ionicons
                  name="lock-closed-outline"
                  size={20}
                  className="text-slate-400 dark:text-slate-500"
                />
              }
              rightIcon={
                <Pressable
                  onPress={() => setPasswordVisible(!passwordVisible)}
                  disabled={isLoading}
                >
                  <Ionicons
                    name={passwordVisible ? "eye-off-outline" : "eye-outline"}
                    size={22}
                    className="text-sky-600 dark:text-sky-500"
                  />
                </Pressable>
              }
              errorMessage={passwordError}
              returnKeyType="done"
              ref={passwordInputRef}
              onSubmitEditing={handleLogin}
              editable={!isLoading}
            />

            <View className="mb-6 mt-2 items-end">
              <LinkButton
                title="¿Olvidaste tu contraseña?"
                onPress={() =>
                  Alert.alert(
                    "Redirigir",
                    "A la pantalla de recuperar contraseña",
                  )
                }
                disabled={isLoading}
              />
            </View>

            <PrimaryButton
              title="Iniciar Sesión"
              onPress={handleLogin}
              fullWidth
              isLoading={isLoading}
              disabled={isLoading}
            />
          </ElevatedCard>

          <View className="mb-4 mt-8 flex-row items-center justify-center">
            <Text className="text-sm text-slate-600 dark:text-slate-400">
              ¿No tienes una cuenta?{" "}
            </Text>
            <LinkButton
              title="Regístrate aquí"
              onPress={() =>
                Alert.alert("Redirigir", "A la pantalla de registro")
              }
              disabled={isLoading}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
