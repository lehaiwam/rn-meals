import { StyleSheet, View, Dimensions } from 'react-native'
import React from 'react'
import MealCard from './MealCard'

const windowDimensions = Dimensions.get('window');

const IngredientAndSteps = ({ ingredients, steps }) => {
  return (
    <View style={styles.container}>
        <MealCard header={'Ingredients'} arrayItems={ingredients}/>
        <MealCard header={'Steps'} arrayItems={steps}/>
    </View>
  )
}

export default IngredientAndSteps

const styles = StyleSheet.create({
    container: {
        width: windowDimensions.width * 0.9,
    },
})