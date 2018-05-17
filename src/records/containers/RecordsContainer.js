import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Image
} from 'react-native'
import ExpensesContainer from './ExpensesContainer'
import restCalls from '../../utils/restCalls'

export default class RecordsContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            expenses: []
        }
    }

    // static navigationOptions = {
    //     title: 'BudgetTracker',
    //     headerStyle: { backgroundColor: '#000' , paddingTop: 15},
    //     headerTintColor: '#fff',
    //     headerTitleStyle: { color: '#fff' },
    //     drawerLabel: 'Home'
    // }
    static navigationOptions = {
        drawerLabel: 'Notifications',
        headerStyle: { backgroundColor: '#000' , paddingTop: 15},
        drawerIcon: () => (
            <Image
                source={require('../../img/icons8-menu.png')}
                style={[{width: 100, height: 100}, {tintColor: 'green'}]}
            />
        ),
    }

    componentDidMount() {
        this.updateExpensesState()
    }

    onExpenseEdit = (newExpense) => {
        restCalls.editExpense(newExpense)
            .then(this.updateExpensesState)
    }

    onExpenseRemove = (expenseId) => {
        restCalls.removeExpenseById(expenseId)
            .then(this.updateExpensesState)
    }

    updateExpensesState = () => {
        restCalls.getExpenses().then(expenses => {
            this.setState({
                expenses
            })
        })
    }

    render() {
        return(
            <View style={styles.container}>
                    <ExpensesContainer
                        userExpenses = {this.state.expenses}
                        editExpense = {this.onExpenseEdit}
                        removeExpense = {this.onExpenseRemove}>
                    </ExpensesContainer>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE'
    }})

