import '../global.css';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { getUniqueId } from 'react-native-device-info';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { SqliteManager } from '../manager/sqlite/Sqlite.manager';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepareAppResourcesAndData() {
            try {
                await SqliteManager.set({
                    deviceData: {
                        deviceId: await getUniqueId(),
                    },
                });
            } catch (error) {
                console.error('RootLayout: Error durante la preparación de la app:', error);
            } finally {
                setAppIsReady(true);
            }
        }

        prepareAppResourcesAndData();
    }, []);

    useEffect(() => {
        if (appIsReady) {
            SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    return (
        <SafeAreaProvider>
            <Stack
                screenOptions={{
                    headerShown: false,
                }}
            />
        </SafeAreaProvider>
    );
}
