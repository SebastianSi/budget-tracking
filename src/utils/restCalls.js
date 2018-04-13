import * as userMockExpenses from '../mock_data/user.json'
import utils from './utils'

const restCalls =  {
    getExpenses: function () {
        console.log('getting All Expenses')
        return userMockExpenses.expenses
    },
    getExpense: function (expenseId) {
        console.log('edited expense with id: ', expenseId)
    },
    addExpense: function (expense) {
        console.log('added expense: ', decorateExpenseFromForm(expense))
    },
    removeExpense: function (expenseId) {
        console.log('removed expense with id: : ', expenseId)
    },
    editExpense: function (expenseId, newExpense) {
        console.log('edited expensewith id: :  ', expenseId)
    },

}

function decorateExpenseFromForm(expense) {
    let newExpense = expense
    //generate UUID for expense
    newExpense.id = utils.generateUuid()

    let currDate = new Date()
    newExpense.date = currDate.toDateString()
    newExpense.time = currDate.toTimeString()
    return newExpense
}

export default restCalls
