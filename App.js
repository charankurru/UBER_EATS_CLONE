import { StyleSheet, View } from 'react-native';
import Home from './src/Screens/Home';
import RestaurantDetails from './src/Screens/RestaurantDetails';

export default function App() {
  return (
    <View style={styles.container}>
      <RestaurantDetails />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee'
  },
});
