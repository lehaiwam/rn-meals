import { StyleSheet, FlatList, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import {MEALS, CATEGORIES} from '../data/dummy-data'
import MealItem from '../components/MealItem'

const CategoryMealsScreen = ({route, navigation}) => {
  catId = route.params.categoryId

  const displayedMeals = MEALS.filter( (mealItem) => {
    return (mealItem.categoryIds.includes( catId, 0 ))
  })

  useLayoutEffect (() => {
    const categoryData = CATEGORIES.find((category) => {
      return category.id === catId
    })
    navigation.setOptions({
      title: categoryData.title,
    })
  }, [catId, navigation])

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