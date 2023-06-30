import { StyleSheet, Text, View, Dimensions, FlatList, SafeAreaView } from 'react-native'
import React from 'react'

const windowDimensions = Dimensions.get('window');

const MealCard = ({header, arrayItems}) => {

    return (
        <View style={styles.cardContainer}>
            <Text style={styles.header}>{header}: </Text>
            <SafeAreaView style={styles.arrayItemsContainer}>
                <FlatList 
                    data={arrayItems}
                    renderItem={ (arrayData) => {
                        return (
                            <Text style={styles.arrayItem}>{arrayData.item}</Text>
                        )    
                    }}   
                />
            </SafeAreaView>
        </View>
    )
}

export default MealCard

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        backgroundColor: '#3b2a80',
        padding: 8,
        alignItems: 'center',
        marginVertical: 12,
        width: windowDimensions.width * 0.9,
        borderRadius: 12,
    },
    header: {
        paddingHorizontal: 4,
        textAlign: 'left',
        fontSize: 20,
        fontWeight: '800',
        textTransform: 'capitalize',
        marginBottom: 8,
        color: '#ffffff'
        //width: windowDimensions.width * 0.9,
    },

    arrayItemsContainer: {
        width: '100%',
        borderColor: '#a29c9c',
        borderWidth: 1,
        borderRadius: 12,
        alignItems: 'center',
        /*
        elevation: 2,
        paddingHorizontal: 16,
        paddingVertical: 8,
        */
    },
    
    arrayItem: {
        width: windowDimensions.width * 0.75,
        color: '#4b494a',
        fontWeight: 800,

        borderColor: '#f4ecec',
        borderWidth: 1,
        borderRadius: 8,
        textAlign: 'center',
        marginVertical: 4,
        backgroundColor: '#ffffff',
    }
})