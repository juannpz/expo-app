import { Link } from 'expo-router';
import { View } from 'react-native';
import '../global.css';

export default function Index() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Link href="/test/sqlite">SQLITE</Link>
            <Link href="/dashboard/settings">FIREBASE</Link>
        </View>
    );
}
