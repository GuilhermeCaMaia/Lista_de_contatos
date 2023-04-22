import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppTab from './src/components/AppTab';
import Cadastro from './src/components/Cadastro';
import AppCamera from './src/components/AppCamera';



export default function App() {
  return (
    < >
      <AppTab />
      {/* <AppCamera /> */}
      <StatusBar style="dark" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
