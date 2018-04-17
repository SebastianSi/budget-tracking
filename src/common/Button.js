import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const Button = ({ onPress, children, styles }) => {

    const buttonStyle = styles.buttonStyle || defaultStyles.buttonStyle
    const textStyle = styles.textStyle || defaultStyles.textStyle


    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    )
}

const defaultStyles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 10,
        fontWeight: '600',
        paddingTop: 5,
        paddingBottom: 5
    },
    buttonStyle: {
        flex: 1,
        maxHeight: 25,
        maxWidth: 45,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
}

export default Button
