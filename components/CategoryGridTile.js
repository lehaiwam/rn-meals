import { Pressable, StyleSheet, Text, View, Platform} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import React from 'react'

const CategoryGridTile = ({id, title, color, showCategoryMeals}) => {

    const showCategoryMealsHandler = () => {
        showCategoryMeals(id)
    }

    return (
        <View style={[styles.gridItem]}>
            <Pressable 
                onPress={ showCategoryMealsHandler }
                android_disableSound={true}
                android_ripple={{color:'#000'}}    // seems redundant
                style={ ({pressed}) => 
                    [styles.pressableItem, pressed ? styles.pressedItem : null]}>
                <View style={[ styles.tileContainer, {backgroundColor:color} ]}>   
                    <Text style={styles.tileTitle}>{title}</Text>  
                </View>
            </Pressable>
        </View>
    )
}

export default CategoryGridTile

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 8,
        width: 150,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible', //make shadow property visible 
    },
    pressableItem: {
        flex: 1,
    },
    pressedItem: {
        opacity: 0.5,
    },
    tileContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tileTitle: {
        fontSize: 16,
        fontWeight: 800,
    },
})