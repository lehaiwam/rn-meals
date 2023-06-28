import { FlatList ,StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {CATEGORIES} from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'

const CategoriesScreen = ({navigation}) => {

    const showCategoryMeals = (id) => {
        navigation.navigate('CategoryMeals', {
            categoryId: id,
        })
    }

    return (    
        <FlatList 
            data={CATEGORIES}
            keyExtractor={(item)=>item.id}
            renderItem={ (itemData) => {
                return (
                    <CategoryGridTile
                        id={ itemData.item.id }
                        title={ itemData.item.title }
                        color={ itemData.item.color }
                        showCategoryMeals={ showCategoryMeals }
                    />  
                )
            }}
            numColumns={2}  
        />
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})