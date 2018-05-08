import utils from './utils'
import Constants from '../AppConstants'
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
        let storedExpenses = await this.getExpenses()
        let storedExpense = decorateExpenseFromForm(expense)

        storedExpenses.push(storedExpense)

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
        //expenseToEdit = {...expenseToEdit, ...newExpense}

        let index = storedExpenses.findIndex((expense) => newExpense.id === expense.id)
        storedExpenses[index] = newExpense

        try {
            await AsyncStorage.setItem('expenses', JSON.stringify(storedExpenses))
            console.log('edited expense with id: :  ', newExpense.id)
        } catch(err) {
            console.log('Error when saving array ', err)
        }
    },
    addCategory: async function (categoryName) {
        let storedCategoteries = await this.getCategories()

        if (storedCategoteries.includes(categoryName)) {
            storedCategoteries.push(categoryName)
            try {
                await AsyncStorage.setItem('categories', JSON.stringify(storedCategoteries))
                return true
            } catch(err) {
                console.log('Error when saving array ', err)
            }
        } else {
            console.info(`Warning: Category ${categoryName} already exists!`)
        }
    },
    removeCategory: async function (categoryName) {
        let storedCategoteries = await this.getCategories()

        let categories = storedCategoteries.filter((category) => category!== categoryName)

        try {
            await AsyncStorage.setItem('categories', JSON.stringify(categories))
            return true
        } catch(err) {
            console.log('Error when saving array ', err)
        }
    },
    getCategories: async function () {
        try {
            const categories = await AsyncStorage.getItem('categories');
            if (categories !== null){
                console.log('getCategories result: ', categories);
                return JSON.parse(categories)
            } else {
                //Categories don't exist yet, let's set predefined ones
                this.setInitialCategories().then(this.getCategories())
            }
        } catch (error) {
            console.log('getCategories Error: ', error)
        }
    },
    setInitialCategories: async function () {
        let categories = Constants.CATEGORIES

        try {
            await AsyncStorage.setItem('categories', JSON.stringify(categories))
            return true
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
