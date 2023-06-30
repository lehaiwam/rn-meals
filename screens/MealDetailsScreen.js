import { StyleSheet, FlatList, View, SafeAreaView } from 'react-native'
import React, { useLayoutEffect, useContext } from 'react'
import {MEALS, CATEGORIES} from '../data/dummy-data'
import MealItem from '../components/MealItem'
import IconButton from '../components/IconButton'
import IngredientAndSteps from '../components/IngredientAndSteps'
import { ScrollView } from 'react-native-gesture-handler'
import { FavoritesContext } from '../store/context/favorites-context'


const MealDetailsScreen = ({route, navigation}) => {

  const favoriteMealsCtx = useContext(FavoritesContext)

  const { 
    id, title, imageUrl, affordability, complexity, 
    duration, ingredients, steps } = route.params 
 
/*
  const displayedMeals = MEALS.filter( (mealItem) => {
    return (mealItem.categoryIds.includes( id, 0 ))
  })
*/
  const mealIsFavorite = favoriteMealsCtx.ids.includes(id)

  const toggleFavoriteStatusHandler = () => {
    console.log('\n  Change meal favorite status!!!')

    if (mealIsFavorite) {
      favoriteMealsCtx.removeFavorite(id)
    } else {
      favoriteMealsCtx.addFavorite(id)
    }
  }

  useLayoutEffect (() => {
    /*
    const categoryData = CATEGORIES.find((category) => {
      return category.id === id
    })
    */

    navigation.setOptions({
      title: title,
      headerRight: () => {
        return (
          <IconButton 
            iconName={ mealIsFavorite ? 'star' : 'star-o'}
            size={24} 
            color={'white'} onPpressStarIcon={ toggleFavoriteStatusHandler }/>
        )
      }
    })

  }, [id, navigation, toggleFavoriteStatusHandler])

  // Experimenting
  return (
    <ScrollView >
        <View style={styles.container}>
            <MealItem 
                title={ title }
                affordability={ affordability }
                complexity={ complexity }
                imageUrl={ imageUrl }
                duration={ duration } />
                
            <IngredientAndSteps
                ingredients={ ingredients }
                steps={ steps } />
        </View>
    </ScrollView>
  )





  // This below here works but has the WARNING
  /*
  return (
    <ScrollView >
        <View style={styles.container}>
            <MealItem 
                title={ title }
                affordability={ affordability }
                complexity={ complexity }
                imageUrl={ imageUrl }
                duration={ duration } />
                
            <IngredientAndSteps
                ingredients={ ingredients }
                steps={ steps } />
        </View>
    </ScrollView>
  )
  */

}

export default MealDetailsScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
})