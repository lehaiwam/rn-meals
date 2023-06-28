import { Dimensions, StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import MealDetails from './MealDetails';

const windowDimensions = Dimensions.get('window');


const MealItem = ({id, title, affordability, complexity, imageUrl, duration, ingredients, steps }) => {
   
    const navigation = useNavigation()

    const migrateToTheMealScreen = () => {
        console.log('\n   Migrating to The Meal Screen...')
        navigation.navigate('MealDetailsScreen', { 
            id: id,
            title: title,
            imageUrl: imageUrl,
            affordability: affordability,
            complexity: complexity,
            duration: duration,
            ingredients: ingredients,
            steps: steps,
        })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>{title}</Text>
            <Pressable
                onPress={ migrateToTheMealScreen }
                android_disableSound={true}
                android_ripple={{ color:'#817f7e' }} >
                <View style={styles.imageContainer}>
                    <Image style={styles.mealImage}
                        source={{ uri: imageUrl}}
                    />
                </View>
            </Pressable>

            <MealDetails 
                affordability={affordability}
                complexity={complexity}
                duration={duration}
            />
        </View>
    )
}

export default MealItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3b2a80',
        padding: 12,
        alignItems: 'center',
        marginVertical: 12,
        width: windowDimensions.width * 0.9,
        borderRadius: 12,
    },

    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#f7f1f1',
    },

    imageContainer: {
        width: windowDimensions.width * 0.75, 
        height: windowDimensions.height * 0.25,
        alignItems: 'center',
        marginVertical: 8,
        borderRadius: 16,
        elevation: 6,
    },
    mealImage: {
        width: windowDimensions.width * 0.75, 
        height: windowDimensions.height * 0.25,
        borderRadius: 16,
        marginHorizontal: 8,
    },
})