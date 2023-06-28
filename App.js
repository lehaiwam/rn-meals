import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import CategoriesScreen from './screens/CategoriesScreen'
import CategoryMealsScreen from './screens/CategoryMealsScreen'
import MealDetailsScreen from './screens/MealDetailsScreen'
import FavoritesScreen from './screens/FavoritesScreen'
import { Ionicons } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#3b2a80'},
        headerTintColor: 'white',
        sceneContainerStyle: {backgroundColor: '#3c4fad'},
        drawerContentStyle: {backgroundColor: '#073082'},
        drawerInactiveTintColor: '#ffffff', 
        drawerActiveTintColor: '#1223ff', 
        drawerActiveBackgroundColor: '#f5f5e1',
      }} >
      <Drawer.Screen 
        name={'Categories'}
        component={CategoriesScreen}
        options= {{
          title: 'All Meal Categories',
          drawerIcon: ({size, color}) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}/>
    <Drawer.Screen 
        name={'Favorites'}
        component={FavoritesScreen}
        options= {{
          title: 'Favourite Meals',
          drawerIcon: ({size, color}) => (
            <Ionicons name="star" size={size} color={color} />
          ),
        }}/>     
    </Drawer.Navigator>
  )
} 

export default function App() {

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Categories" 
          screenOptions={{ 
            headerStyle: {backgroundColor: '#3b2a80'},
            headerTintColor: 'white',
            sceneContainerStyle: {backgroundColor: '#b7bac1'}
          }}
        >

          <Stack.Screen 
            name="DrawerCategories" 
            component={DrawerNavigator} 
            options={{ 
              headerShown: false,
              title: 'All Categories',
            }}
          />

          <Stack.Screen 
            name="CategoryMeals" 
            component={CategoryMealsScreen} 
          />

          <Stack.Screen 
            name="MealDetailsScreen" 
            component={MealDetailsScreen} 
          />
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
