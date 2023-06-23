import { Dimensions, StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import MealCard from './MealCard';

const windowDimensions = Dimensions.get('window');

const MealItem = ({id, title, affordability, complexity, imageUrl, ingredients, steps}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>{title}</Text>
    
            <View style={styles.imageContainer}>
                <Image style={styles.mealImage}
                    source={{ uri: imageUrl, }}
                />
            </View>
            <View style={styles.affordComplexContainer}>
                <Text style={styles.affordability}>Affordability: {affordability}</Text>
                <Text style={styles.complexity}>Complexity: {complexity}</Text>
            </View>

            <MealCard header='Ingredients' arrayItems={ingredients}/>
            <MealCard header='Steps' arrayItems={steps}/>
            
            {/* 
            <Text style={styles.ingredientsHeader}>ingredients: </Text>
            <View style={styles.ingredientsContainer}>
                <FlatList 
                    data={ingredients}
                    renderItem={ (ingredientsData) => {
                        return (
                            <Text style={styles.ingredientItem}>{ingredientsData.item}</Text>
                        )    
                    }}   
                />
            </View>
            */}

        </View>
    )
}

export default MealItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f2ab8c',
        flex: 1,
        padding: 12,
        alignItems: 'center',
        marginVertical: 18,
        width: windowDimensions.width * 0.9,
        borderRadius: 12,
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    affordComplexContainer: {
        width: '100%',
        justifyContent: 'space-between',
        padding: 8,
    },
    imageContainer: {
        width: windowDimensions.width * 0.75, 
        height: windowDimensions.height * 0.25,
        alignItems: 'center',
        marginVertical: 12,
        borderRadius: 16,
    },
    mealImage: {
        width: windowDimensions.width * 0.75, 
        height: windowDimensions.height * 0.25,
        borderRadius: 16,
        marginHorizontal: 8,
    },
    affordability: {
        fontSize: 16,
        fontWeight: '800',
        textTransform: 'capitalize',
        marginLeft: 12,
    },
    complexity: {
        fontSize: 16,
        fontWeight: '800',
        textTransform: 'capitalize',
        marginLeft: 12,
    },

})