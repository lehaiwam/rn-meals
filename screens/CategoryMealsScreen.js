import { StyleSheet, FlatList, View } from 'react-native'
import React from 'react'
import {MEALS} from '../data/dummy-data'
import MealItem from '../components/MealItem'

const CategoryMealsScreen = ({route}) => {
  catId = route.params.categoryId

  const displayedMeals = MEALS.filter( (mealItem) => {
    return (mealItem.categoryIds.includes( catId, 0 ))
  })

  const renderMealItem = (itemData) => {
    return (
      <MealItem 
        title={ itemData.item.title }
        affordability={ itemData.item.affordability }
        complexity={ itemData.item.complexity }
        imageUrl={ itemData.item.imageUrl }
        ingredients={ itemData.item.ingredients }
        steps={ itemData.item.steps }
      />
    )
  }

  return (
    <View style={styles.container}>
      <FlatList 
        data={ displayedMeals }
        keyExtractor={ (item) => item.id }
        renderItem={ renderMealItem }
      />
    </View>
  )
}

export default CategoryMealsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

})