import React, { Component } from 'react'
import {
    Text,
    View
} from 'react-native'

import ExpenseItem from '../components/ExpenseItem'

export default class ExpensesContainer extends Component {

    render() {
        let userExpenses = this.props.userExpenses.map(function(exp) {
            return (
                <ExpenseItem
                    category = {exp.category}
                    item = {exp.item}
                    amount = {exp.amount}
                    currency = {exp.currency}
                    qty = {exp.qty} />
            )
        })
        return(
            <View style={styles.container}>
                {userExpenses}
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        flexDirection: 'column'
    }
}
