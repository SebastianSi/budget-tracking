import React from 'react'
import {Text, TouchableOpacity} from 'react-native'
import Button from '../../common/Button'
import Constants from '../../AppConstants'

const ExpenseItem = (props) => {
    let { expense } = props
    return (
        <TouchableOpacity style={styles.expense}>
            <Text style={styles.expenseText}>{expense.qty} {expense.item} ({expense.category})
                <Text style={{fontWeight: '800'}}>   {expense.amount} {expense.currency}</Text>
            </Text>

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
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        justifyContent: 'flex-end',
        borderColor: '#ddd',
        padding: 5,
        height: 50
    },
    expenseText: {
        fontWeight: '700',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        color: '#673AB7',
        marginTop: 7,
        flex: 1
    },
    editButton: {
        textStyle: {
            alignSelf: 'center',
            color: '#007aff',
            fontSize: 12,
            fontWeight: '700',
            paddingTop: 5,
            paddingBottom: 5
        },
        buttonStyle: {
            flex: 1,
            maxHeight: 28,
            maxWidth: 55,
            backgroundColor: '#fff',
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#007aff',
            marginTop: 3,
            marginLeft: 5,
            marginRight: 5
        }
    },
    removeButton: {
        textStyle: {
            alignSelf: 'center',
            color: '#000',
            fontSize: 12,
            fontWeight: '700',
            paddingTop: 5,
            paddingBottom: 5
        },
        buttonStyle: {
            flex: 1,
            maxHeight: 28,
            maxWidth: 55,
            backgroundColor: '#F44336',
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#007aff',
            marginTop: 3,
            marginLeft: 5,
            marginRight: 5
        }
    }

}

export default ExpenseItem
