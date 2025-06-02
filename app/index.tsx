import { Link } from 'expo-router';
import { View } from 'react-native';
import '../global.css';

export default function Index() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Link href="/auth/login">LOGIN</Link>
            <Link href="/dashboard/settings">SETTINGS</Link>
        </View>
    );
}
