import ExpoLogo from 'assets/logo/logo';
import ButtonFactory from 'components/ui/button/ButtonFactory';
import { ButtonSize, ButtonVariant } from 'components/ui/button/button.definition';
import { authenticateAsync } from 'expo-local-authentication';
import { View, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PrimaryButton = ButtonFactory(ButtonVariant.Primary, ButtonSize.Large);

const SettingsScreen = () => {
    async function handleConfigBiometrics() {
        await authenticateAsync();
    }

    return (
        <SafeAreaView className="flex-1 bg-slate-50 dark:bg-slate-900">
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}>
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
                    className="px-6"
                    keyboardShouldPersistTaps="handled">
                    <View className="mb-8 items-center">
                        <ExpoLogo className="" width={120} height={120} />
                        <Text className="text-3xl font-bold text-slate-800 dark:text-slate-100">
                            Settings
                        </Text>
                    </View>

                    <View className="mb-4">
                        <PrimaryButton
                            onPress={handleConfigBiometrics}
                            isLoading={false}
                            className="min-w-[220px] self-center">
                            Config biometrics
                        </PrimaryButton>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default SettingsScreen;
