import { StyleSheet, View } from 'react-native'
import Home from './src/Screens/Home'
import RestaurantDetails from './src/Screens/RestaurantDetails'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import RootNavigation from './navigation'

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <RootNavigation />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee'
  },
});
