import React, { Component } from 'react'
import {
    ScrollView
} from 'react-native'
import ExpenseItem from '../components/ExpenseItem'
import EditExpenseModal from './EditExpenseModal'
import Constants from '../../AppConstants'

export default class ExpensesContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            editModalVisible: false,
            editedExpense: null
        }
    }

    editExpense = (newExpense) => {
        this.props.editExpense(newExpense)
    }

    openEditExpenseModal = (expense) => {
        this.setState({editModalVisible: true})
        this.setState({editedExpense: expense})
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
            <ScrollView style={styles.container}>
                {expenses}
                {
                    this.state.editModalVisible &&
                        <EditExpenseModal
                            expense={this.state.editedExpense}
                            editExpense={this.editExpense}
                            closeEditModal = {this.closeEditModal}
                        >
                        </EditExpenseModal>
                }

            </ScrollView>
        )
    }
}

const styles = {
    container: {
        flex: 1
    }
}
