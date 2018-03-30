import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import Header from '../common/Header'
import Button from '../common/Button'
import ExpensesContainer from './ExpensesContainer'
import * as userMockExpenses from '../mock_data/user.json'

export default class RecordsContainer extends Component {

    onButtonPress = () => {
        console.log('Pressed')
        Actions.home()
    }

    navigateTo = () => {
        Actions.home()
    }

    render() {
        let userExpenses = userMockExpenses.expenses
        return(
            <View style={{ flex: 1 }}>
                <Header headerText={'Budget Tracking'}
                navigateTo = {this.navigateTo}/>
                <View style={styles.container}>
                    <Text>Records Container Page</Text>
                    <Button onPress={this.onButtonPress}>
                        Go to Home
                    </Button>
                    <ExpensesContainer
                    userExpenses = {userExpenses}>
                    </ExpensesContainer>
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

