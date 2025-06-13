import ButtonFactory from "components/ui/button/ButtonFactory";
import {
  ButtonSize,
  ButtonVariant,
} from "components/ui/button/button.definition";
import {
  View,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const PrimaryButton = ButtonFactory(ButtonVariant.Primary, ButtonSize.Large);

const SecondaryButton = ButtonFactory(
  ButtonVariant.Secondary,
  ButtonSize.Large,
);

export default function Firebase() {
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
          <View className="flex items-center justify-center gap-3">
            <SecondaryButton
              title="set props"
              onPress={() =>
                Alert.alert("Redirigir", "A la pantalla de registro")
              }
            />

            <PrimaryButton
              title="get props"
              onPress={() =>
                Alert.alert("Redirigir", "A la pantalla de registro")
              }
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
