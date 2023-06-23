import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native'
import React from 'react'

const windowDimensions = Dimensions.get('window');

const MealCard = ({header, arrayItems}) => {

    return (
        <View style={styles.cardContainer}>
            <Text style={styles.header}>{header}: </Text>
            <View style={styles.arrayItemsContainer}>
                <FlatList 
                    data={arrayItems}
                    renderItem={ (arrayData) => {
                        return (
                            <Text style={styles.arrayItem}>{arrayData.item}</Text>
                        )    
                    }}   
                />
            </View>
        </View>
    )
}

export default MealCard

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        width: windowDimensions.width * 0.75,
        backgroundColor: '#fade7b',
        borderColor: '#434141',
        borderWidth: 2,
        borderRadius: 12,
        marginVertical: 8,
    },
    header: {
        paddingHorizontal: 4,
        textAlign: 'left',
        fontSize: 20,
        fontWeight: '800',
        textTransform: 'capitalize',
        marginVertical: 4,
        //width: windowDimensions.width * 0.9,
    },
    arrayItemsContainer: {
        borderColor: '#434141',
        borderWidth: .5,
        elevation: 2,
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    arrayItem: {
        color: '#4c2133',
        fontWeight: 800,
        
    }
})