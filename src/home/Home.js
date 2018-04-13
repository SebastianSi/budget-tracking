import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    Picker
} from 'react-native'
import Header from '../common/Header'
import Button from '../common/Button'
import ModalExample from '../common/Modal'

export default class Home extends Component {

    static navigationOptions = {
        title: 'BudgetTracker',
        headerStyle: { backgroundColor: '#000' , paddingTop: 15},
        headerTintColor: '#fff',
        headerTitleStyle: { color: '#fff' },
        drawerLabel: 'Home'
        // drawerIcon: ({ tintColor }) => (
        //     <Image
        //         source={'../img/icons8-menu.png'}
        //         style={[styles.icon, {tintColor: 'white'}]}
        //     />
        // )
    };

    onButtonPress = () => {
        console.log('Pressed')
        this.props.navigation.navigate('RecordsContainer')
    }

    navigateTo = () => {
        // Actions.recordsContainer()
    }

    render() {
        return(
            <View style={{ flex: 1 }}>
                {/*<Header headerText={'Budget Tracking'}*/}
                        {/*style={{alignItems: 'center', justifyContent: 'center'}}*/}
                        {/*navigateTo = {this.navigateTo}/>*/}
                <View style={styles.container}>
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

                    {/*<Picker*/}
                        {/*selectedValue={1}*/}
                        {/*style={{ height: 30, width: 150 }}*/}
                        {/*onValueChange={(qtyVal, itemIndex) => this.setState({qtyVal: qtyVal})}>*/}
                        {/*<Picker.Item label="1" value="1" />*/}
                        {/*<Picker.Item label="2" value="2" />*/}
                    {/*</Picker>*/}
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
        backgroundColor: '#EEEEEE'
    }})

