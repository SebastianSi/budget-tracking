import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Octicons'

const Header = (props) => {
    const { textStyle, viewStyle } = styles

    return (
        <View style={viewStyle}>
            {/*<Icon*/}
                {/*name = 'three-bars'*/}
                {/*size = {28}*/}
                {/*color = 'white'*/}
                {/*style = {{paddingLeft : 20}}*/}
                {/*onPress = {props.navigateTo}*/}
            {/*/>*/}
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    )
}

const styles = {
    viewStyle: {
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        // paddingTop: 15,
        shadowColor: '#fff',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        elevation: 3,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
        color: '#fff'
    }
}

export default Header
