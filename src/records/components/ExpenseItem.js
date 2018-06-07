import React from 'react'
import {Text, TouchableOpacity} from 'react-native'
// import Button from '../../common/Button'
import { Button } from 'react-native-elements'
import Constants from '../../AppConstants'

const ExpenseItem = (props) => {
    let { expense } = props
    return (
        <TouchableOpacity style={styles.expense}>
            <Text style={styles.expenseText}
                  // onPress={() => {props.onPress(expense, Constants.EDIT_EXPENSE)}}
            >{expense.qty} {expense.item} ({expense.category})
            </Text>
            <Text style={{right: 122, position: 'absolute', fontWeight: '800', fontSize: 17}}>   {expense.amount} {expense.currency}</Text>

            {/*<Button onPress={() => {props.onPress(expense, Constants.EDIT_EXPENSE)}}*/}
                    {/*styles={styles.editButton}>*/}
                {/*Edit*/}
            {/*</Button>*/}

            {/*<Button*/}
                {/*raised*/}
                {/*containerViewStyle={styles.editButton}*/}
                {/*backgroundColor={Constants.SECONDARY_COLOR_DARK}*/}
                {/*borderRadius={5}*/}
                {/*rightIcon={{name: 'edit'}}*/}
                {/*title='Edit'*/}
                {/*onPress={() => {props.onPress(expense, Constants.EDIT_EXPENSE)}}*/}

            {/*/>*/}
            <Button
                containerViewStyle={{width: 44, height: 44, position: 'absolute', right: 40}}
                backgroundColor={Constants.SECONDARY_COLOR_DARK}
                borderRadius={3}
                icon={{name: 'edit', size: 22, style:{marginRight: 0}}}
                title=''
                onPress={() => {props.onPress(expense, Constants.EDIT_EXPENSE)}}

            />


            {/*<Button onPress={() => {props.onPress(expense, Constants.REMOVE_EXPENSE)}}*/}
                    {/*styles={styles.removeButton}>*/}
                {/*Remove*/}
            {/*</Button>*/}

            <Button
                containerViewStyle={{width: 44, height: 44, position: 'absolute', right: -10}}
                backgroundColor={Constants.PRIMARY_COLOR_DARK}
                borderRadius={3}
                icon={{name: 'delete', size: 22, style:{marginRight: 0}}}
                title=''
                onPress={() => {props.onPress(expense, Constants.REMOVE_EXPENSE)}}

            />

        </TouchableOpacity>
    )
}


const styles = {
    expense: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderColor: Constants.PRIMARY_COLOR_LIGHT,
        height: 50
    },
    expenseText: {
        fontWeight: '800',
        color: Constants.PRIMARY_COLOR_DARK,
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
