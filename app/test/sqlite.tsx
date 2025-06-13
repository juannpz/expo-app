import ButtonFactory from "components/ui/button/ButtonFactory";
import {
  ButtonSize,
  ButtonVariant,
} from "components/ui/button/button.definition";
import { SqliteManager } from "manager/sqlite/Sqlite.manager";
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const PrimaryButton = ButtonFactory(ButtonVariant.Primary, ButtonSize.Large);

const SecondaryButton = ButtonFactory(
  ButtonVariant.Secondary,
  ButtonSize.Large,
);

async function handleSetProps() {
    const setDataResponse = await SqliteManager.set({
       userData: {
        userId: 3
       }
    });

    if (!setDataResponse.success)
        alert(`Was unable to set data to SQLite. Error: ${setDataResponse.message}`);

    else
        alert(JSON.stringify(setDataResponse.data));
}

async function handleGetProps() {
    const getDataResponse = await SqliteManager.get(["userData", "deviceData"]);

    if (!getDataResponse.success)
        alert(`Was unable to get data from SQLite. Error: ${getDataResponse.message}`);

    else
        alert(JSON.stringify(getDataResponse.data));
}

export default function SQLite() {
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
                title="SET PROPS"
                onPress={handleSetProps}
            />

            <PrimaryButton
                title="GET PROPS"
                onPress={handleGetProps}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
