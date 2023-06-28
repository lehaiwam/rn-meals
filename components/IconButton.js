import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

const IconButton = ({iconName, size, color, onPpressStarIcon}) => {
    return (
        <Pressable onPress={onPpressStarIcon}>
            <FontAwesome name={iconName} size={size} color={color} />
        </Pressable>
    )
}

export default IconButton

const styles = StyleSheet.create({


})