import React, { Component } from 'react'
import {
    ScrollView, StyleSheet
} from 'react-native'
import { ExpenseItem } from '../components'
import EditExpenseModal from './EditExpenseModal'
import Constants from '../../AppConstants'
import restCalls from '../../utils/restCalls'

export default class ExpensesContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isBlurred: false,
            editModalVisible: false,
            editedExpense: null
        }
    }


    getCategories = (callback) => {
        restCalls.getCategories().then(callback)
    }

    editExpense = (newExpense) => {
        this.props.editExpense(newExpense)
    }

    openEditExpenseModal = (expense) => {
        this.setState({editModalVisible: true})
        this.setState({editedExpense: expense})
    }

    blurBackground = (isBlurred) => {
        this.setState({isBlurred})
    }

    removeExpense = (expenseId) => {
        this.props.removeExpense(expenseId)
    }

    handleExpensePressed = (expense, action) => {
        if (action === Constants.EDIT_EXPENSE) {
            this.openEditExpenseModal(expense)
        } else if (action === Constants.REMOVE_EXPENSE) {
            this.removeExpense(expense.id)
        }
    }

    closeEditModal = () => {
        this.setState({editModalVisible: false})
    }

    render() {

        let { userExpenses } = this.props

        let expenses = userExpenses && userExpenses.map((exp) => {
            return (
                <ExpenseItem
                    expense={exp}
                    onPress={this.handleExpensePressed}
                    key={exp.id}
                />
            )
        })

        return(
            <ScrollView style={this.state.isBlurred ? styles.container : styles.containerBlurred}>
                {expenses}
                {
                    this.state.editModalVisible &&
                        <EditExpenseModal
                            blurBackground={this.blurBackground}
                            expense={this.state.editedExpense}
                            editExpense={this.editExpense}
                            closeEditModal = {this.closeEditModal}
                            getCategories={this.getCategories}
                        >
                        </EditExpenseModal>
                }

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Constants.PRIMARY_COLOR_DARK
    },
    containerBlurred: {
        flex: 1,
        backgroundColor: Constants.APP_BACKGROUND
    }})
