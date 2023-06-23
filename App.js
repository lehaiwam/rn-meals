import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import CategoriesScreen from './screens/CategoriesScreen'
import CategoryMealsScreen from './screens/CategoryMealsScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

export default function App() {
  console.log('\n   App()...')
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Categories" >
          <Stack.Screen name="Categories" component={CategoriesScreen} />
          <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },

  


});
