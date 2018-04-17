import utils from './utils'
import { AsyncStorage } from 'react-native'


const restCalls =  {
    getExpenses: async function () {
        try {
            const expenses = await AsyncStorage.getItem('expenses');
            if (expenses !== null){
                console.log('getExpenses result: ', expenses);
                return JSON.parse(expenses)
            } else {
                return []
            }
        } catch (error) {
            console.log('getExpenses Error: ', error)
        }
    },
    getExpenseById: async function (expenseId) {
        console.log('got expense with id: ', expenseId)
    },
    addExpense: async function (expense) {
        //get current stored expenses array
        let storedExpenses = await this.getExpenses()

        //decorate the expense received from UI
        let storedExpense = decorateExpenseFromForm(expense)

        //push the decorated expense to the stored expenses
        storedExpenses.push(storedExpense)

        //store the new expenses array
        try {
            await AsyncStorage.setItem('expenses', JSON.stringify(storedExpenses))
            return true
        } catch(err) {
            console.log('Error when saving array ', err)
        }
    },
    removeExpenseById: async function (expenseId) {
        let storedExpenses = await this.getExpenses()
        let newExpenses = storedExpenses.filter((expense) => expenseId !== expense.id)

        //store the new expenses array
        try {
            await AsyncStorage.setItem('expenses', JSON.stringify(newExpenses))
            console.log('Removed expense with id: :  ', expenseId)
        } catch(err) {
            console.log('Error when saving array ', err)
        }
    },
    editExpense: async function (newExpense) {
        //Note: due to async storage's inability to update nested values,
        //we operate on the current expenses array and then re-store it;
        //Another alternative would be to removeExpenseById, and then re-add new expense with the same id

        let storedExpenses = await this.getExpenses()
        // really sad I no longer need this goodie.. expenseToEdit = {...expenseToEdit, ...newExpense}

        let index = storedExpenses.findIndex((expense) => newExpense.id === expense.id)
        storedExpenses[index] = newExpense

        //store the new expenses array
        try {
            await AsyncStorage.setItem('expenses', JSON.stringify(storedExpenses))
            console.log('edited expense with id: :  ', newExpense.id)
        } catch(err) {
            console.log('Error when saving array ', err)
        }

    }

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
