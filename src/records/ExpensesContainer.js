import React, { Component } from 'react'
import {
    Text,
    View
} from 'react-native'

export default class ExpensesContainer extends Component {

    render() {
        let userExpense0 = this.props.userExpenses[0]
        return(
            <View>
                <Text>{userExpense0.category}</Text>
                <Text>{userExpense0.amount}</Text>
                <Text>{userExpense0.currency}</Text>
            </View>
        )
    }
}
