import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import Header from '../common/Header'
import Button from '../common/Button'
import ModalExample from '../common/Modal'
// import { Overlay } from 'react-native-elements'

export default class Home extends Component {

    onButtonPress = () => {
        console.log('Pressed')
        Actions.recordsContainer()
    }

    navigateTo = () => {
        Actions.recordsContainer()
    }

    render() {
        return(
            <View style={{ flex: 1 }}>
                <Header headerText={'Budget Tracking'}
                navigateTo = {this.navigateTo}/>
                <View style={styles.container}>
                    <Text>Home Page</Text>
                    <ModalExample></ModalExample>
                    {/*<Overlay*/}
                        {/*isVisible={true}*/}
                        {/*windowBackgroundColor="rgba(255, 255, 255, .5)"*/}
                        {/*overlayBackgroundColor="red"*/}
                        {/*width="auto"*/}
                        {/*height="auto">*/}
                        {/*<Text>Hello from Overlay!</Text>*/}
                    {/*</Overlay>*/}
                    <Button onPress={this.onButtonPress}>
                        See Reports!
                    </Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }})

