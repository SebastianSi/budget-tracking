import React, {Component} from 'react'
import {Text, TouchableOpacity} from 'react-native'
import Button from '../../common/Button'

//TODO: should change this to a stateless func component
export default class ExpenseItem extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        let { expense } = this.props
        return (
            <TouchableOpacity style={styles.expense}>
                <Text style={styles.expenseText}>{expense.qty} - {expense.category} - {expense.item} - {expense.amount} - {expense.currency}</Text>
                <Button onPress={() => {this.props.onPress(expense, 'EDIT')}}
                        styles={styles.editButton}>
                    Edit
                </Button>
                <Button onPress={() => {this.props.onPress(expense, 'REMOVE')}}
                        styles={styles.removeButton}>
                    Remove
                </Button>
            </TouchableOpacity>
        )
    }
}

const styles = {
    expense: {
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'row',
        paddingTop: 5,
        paddingBottom: 5
    },
    expenseText: {
        fontWeight: '700',
        color: '#673AB7',
        flex: 1,
        alignSelf: 'stretch'
    },
    editButton: {
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
            // alignSelf: 'stretch',
            maxHeight: 25,
            maxWidth: 45,
            backgroundColor: '#fff',
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#007aff',
            marginLeft: 5,
            marginRight: 5
        }
    },
    removeButton: {
        textStyle: {
            alignSelf: 'center',
            color: '#000',
            fontSize: 10,
            fontWeight: '600',
            paddingTop: 5,
            paddingBottom: 5
        },
        buttonStyle: {
            flex: 1,
            // alignSelf: 'stretch',
            maxHeight: 28,
            maxWidth: 55,
            backgroundColor: '#F44336',
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#007aff',
            marginLeft: 5,
            marginRight: 5
        }
    }

}
