import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useApplicationAndroidInstallReferrer } from '@use-expo/application';


export default function App() {

  const [installReferrer] = useApplicationAndroidInstallReferrer();

  return (
    <View style={styles.container}>
      <Text style={{flexShrink: 1}}>Install referrer: {installReferrer || '-'}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 1
  },
});
