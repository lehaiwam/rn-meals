import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

const windowDimensions = Dimensions.get('window');

const MealDetails = ({affordability, complexity, duration}) => {

  return (
    <View style={styles.mealInfo}>
        <View style={styles.affordComplexContainer}>
            <Text style={styles.affordComplex}>{affordability}</Text>
            <Text style={styles.affordComplex}>{complexity}</Text>
        </View>
        <Text style={styles.duration}>Preparation time: <Text style={styles.durationTimeText}>{duration}</Text> minutes</Text>
    </View>
  )
}

export default MealDetails

const styles = StyleSheet.create({
    mealInfo: {
        width: windowDimensions.width * 0.75,
        backgroundColor: '#e7e5df',
        borderRadius: 8,
        paddingVertical: 8,
        borderColor: '#434141',
        elevation: 6,
        marginVertical: 8,
    },
    affordComplexContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 8,
    },
    affordComplex: {
        fontSize: 16,
        fontWeight: '800',
        textTransform: 'capitalize',
        marginLeft: 12,
        textTransform: 'uppercase',
        color: '#302e2e',
    },
    duration: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '800',
        color: '#302e2e',
    },
    durationTimeText: {
        color: '#f00'
    },
})