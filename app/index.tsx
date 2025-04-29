import { Link } from 'expo-router';
import { Text, View } from 'react-native';

import '../global.css';

export default function Index() {
  return (
    <View
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      className="bg-red-500">
      <Text>Home Screen</Text>

      <Link href="/auth/register">register</Link>
    </View>
  );
}
