import 'react-native-gesture-handler'
import './src/styles/global.css';

import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter';

import { Header } from './src/components/Header';
import { Calendar } from './src/components/Calendar';
import { Container } from './src/components/Container';


export default function App() {
  const [fontLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold
  })

  if (!fontLoaded) {
    return <></>
  }


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Container>
        <StatusBar style="auto" backgroundColor='transparent' />

        <Header>
          <Calendar />
        </Header>
      </Container>
    </GestureHandlerRootView>
  );
}
