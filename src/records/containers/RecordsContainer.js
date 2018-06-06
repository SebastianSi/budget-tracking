import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    ImageBackground
} from 'react-native'
import ExpensesContainer from './ExpensesContainer'
import restCalls from '../../utils/restCalls'
import Constants from '../../AppConstants'

export default class RecordsContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            expenses: []
        }
    }

    static navigationOptions = {
        title: 'BudgetTracker',
        headerStyle: { backgroundColor: '#000' , paddingTop: 15},
        headerTintColor: '#fff',
        headerTitleStyle: { color: '#fff' },
        drawerLabel: 'Home'
    }

    componentDidMount() {
        this.updateExpensesState()
    }

    onExpenseEdit = (newExpense) => {
        restCalls.editExpense(newExpense)
            .then(() => {
                this.updateExpensesState()
                console.log('newExpense:', newExpense)
                restCalls.updateBalance(newExpense.prevAmount - newExpense.amount).then(()=>{
                    this.props.navigation.state.params.refresh()
                })

            })
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
                <ImageBackground
                    source={require('../../img/cash_coins.jpg')}
                    imageStyle={{resizeMode: 'stretch'}}
                    width={200}
                    height={280}
                    style={{
                        flex: 1
                    }}>
                    <ExpensesContainer
                        userExpenses = {this.state.expenses}
                        editExpense = {this.onExpenseEdit}
                        removeExpense = {this.onExpenseRemove}>
                    </ExpensesContainer>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
        // backgroundColor: Constants.APP_BACKGROUND
    }})

