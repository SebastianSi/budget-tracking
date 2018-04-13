import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'

const ExpenseItem = (props) => {

    return (
        <TouchableOpacity style={styles.expense}>
            <Text style={styles.expenseText}>{props.qty} - {props.category} - {props.item} - {props.amount} - {props.currency}</Text>
            {/*<Text>{props.item}</Text>*/}
            {/*<Text>{props.amount}</Text>*/}
            {/*<Text>{props.currency}</Text>*/}
            {/*<Text>{props.qty}</Text>*/}
        </TouchableOpacity>
    )
}

const styles = {
    expense: {
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'row',
        // backgroundColor: '#673AB7',
        paddingTop: 5,
        paddingBottom: 5
    },
    expenseText: {
        fontWeight: '700',
        color: '#673AB7',
        // justifyContent: 'space-around',
        flex: 1,
        alignSelf: 'stretch'
    }

}

export default ExpenseItem
