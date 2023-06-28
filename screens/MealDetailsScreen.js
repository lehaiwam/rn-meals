import { StyleSheet, FlatList, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import {MEALS, CATEGORIES} from '../data/dummy-data'
import MealItem from '../components/MealItem'
import IconButton from '../components/IconButton'
import IngredientAndSteps from '../components/IngredientAndSteps'
import { ScrollView } from 'react-native-gesture-handler'

const MealDetailsScreen = ({route, navigation}) => {

    const { id, title, imageUrl, affordability, complexity, duration, ingredients, steps } = route.params

    const displayedMeals = MEALS.filter( (mealItem) => {
        return (mealItem.categoryIds.includes( id, 0 ))
    })

    const iconPressHandler = () => {
        console.log('\n   Pressed the icon star!!!')
      // add this screen to an array list of my favorite screens


    }

    useLayoutEffect (() => {
        const categoryData = CATEGORIES.find((category) => {
        return category.id === id
    })
  
    navigation.setOptions({
      title: title,
      headerRight: () => {
        return (
          <IconButton 
            iconName={'star-o'} 
            size={24} 
            color={'white'} onPpressStarIcon={iconPressHandler}/>
        )
      }
    })

  }, [id, navigation])

  return (
    <ScrollView scrollEnabled >
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
}

export default MealDetailsScreen

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
})