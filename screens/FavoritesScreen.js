import { StyleSheet, View, Text, FlatList } from 'react-native'
import React, { useContext} from 'react'
import { FavoritesContext } from '../store/context/favorites-context'
import { MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem'
//import IngredientAndSteps from '../components/IngredientAndSteps'

const FavoritesScreen = () => {

  const favoriteMealsCtx = useContext(FavoritesContext)

  let favMealsData = []
  favoriteMealsCtx.ids.map( (favId) => {
    const mealData = MEALS.find( (meal) => {
      return meal.id === favId
    })
    favMealsData = [...favMealsData, mealData]
  })

  const renderMealItem = (itemData) => {
    return (
      <MealItem 
        id={ itemData.item.id }
        title={ itemData.item.title }
        affordability={ itemData.item.affordability }
        complexity={ itemData.item.complexity }
        imageUrl={ itemData.item.imageUrl }
        duration={itemData.item.duration}
        ingredients={ itemData.item.ingredients }
        steps={ itemData.item.steps }
      />
    )
  }

  if (favMealsData.length <= 0 ) {
    return (
      <View style={styles.noFavoritesContainer}>
          <Text style={styles.noFavoritesText}>You have no favorite meals yet!</Text>
          <Text style={styles.noFavoritesText}>Peruse the meal ctegories and select your favourites.</Text>
      </View>
    )
  }
  else {
    return (
      <View style={styles.container}>
        <FlatList 
          data={ favMealsData }
          keyExtractor={ (item) => item.id }
          renderItem={ renderMealItem }
        />
      </View>
    )
  }

} /** end of favoriteScreen() */

export default FavoritesScreen

const styles = StyleSheet.create({
  favoritesContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  noFavoritesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },  
  noFavoritesText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  }, 
})