import React from 'react'
import {Text, TouchableOpacity} from 'react-native'
import Button from '../../common/Button'
import Constants from '../../AppConstants'

const ExpenseItem = (props) => {
    let { expense } = props
    return (
        <TouchableOpacity style={styles.expense}>
            <Text style={styles.expenseText}>{expense.qty} {expense.item} ({expense.category})
            </Text>
            <Text style={{right: 128, position: 'absolute', fontWeight: '700'}}>   {expense.amount} {expense.currency}</Text>

            <Button onPress={() => {props.onPress(expense, Constants.EDIT_EXPENSE)}}
                    styles={styles.editButton}>
                Edit
            </Button>
            <Button onPress={() => {props.onPress(expense, Constants.REMOVE_EXPENSE)}}
                    styles={styles.removeButton}>
                Remove
            </Button>
        </TouchableOpacity>
    )
}


const styles = {
    expense: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#ddd',
        height: 50
    },
    expenseText: {
        fontWeight: '700',
        color: '#673AB7',
        left: 9
    },
    editButton: {
        textStyle: {
            color: '#007aff',
            fontSize: 12,
            fontWeight: '700'
        },
        buttonStyle: {
            height: 28,
            width: 50,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#007aff',
            right: 68,
            position: 'absolute'
        }
    },
    removeButton: {
        textStyle: {
            color: '#000',
            fontSize: 12,
            fontWeight: '700'
        },
        buttonStyle: {
            height: 28,
            width: 51,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F44336',
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#007aff',
            marginRight: 9
        }
    }

}

export default ExpenseItem
