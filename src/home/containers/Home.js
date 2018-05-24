import React, { Component } from 'react'
import {
    Button,
    StyleSheet,
    View,
} from 'react-native'
import AddExpenseModal from './AddExpenseModal'
import Balance from '../components/Balance'
// import SetBudgetModal from '../components/SetBudgetModal'
import restCalls from '../../utils/restCalls'


export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isBlurred: false,
            currentBalance: null
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
        this.setBalance(7000)
        this.getCurrentBalance()
    }

    onSeeRecordsButtonPress = () => {
        this.props.navigation.navigate('RecordsContainer')
    }

    onSeeCategoriesButtonPress = () => {
        this.props.navigation.navigate('CategoriesContainer')
    }

    getCategories = (callback) => {
        restCalls.getCategories().then(callback)
    }

    addExpense = (expense) => {
        restCalls.addExpense(expense).then(this.updateBalance(expense.amount))
    }

    addNewCategory = (category) => {
        restCalls.addCategory(category)
    }

    blurBackground = (isBlurred) => {
        this.setState({isBlurred})
    }

    getCurrentBalance = () => {
        restCalls.getBalance().then((balance) => this.setState({currentBalance: balance}))
    }

    updateBalance = (amount) => {
        this.setBalance(this.state.currentBalance - amount)
    }

    setBalance = (amount) => {
        restCalls.setBalance(amount).then(() => this.getCurrentBalance())
    }

    // toggleSetBudgetModal = (isShown) => {
    //     this.blurBackground(isShown)
    //     this.setState({isSetBudgetOpen: isShown})
    // }


    render() {
        return(
            <View style={{ flex: 1 }}>
                <View style={this.state.isBlurred ? styles.container : styles.containerBlurred}>
                    <Balance
                        currentBalance={this.state.currentBalance}
                    />
                    <AddExpenseModal
                        blurBackground={this.blurBackground}
                        addExpense={this.addExpense}
                        addNewCategory={this.addNewCategory}
                        getCategories={this.getCategories}>
                    </AddExpenseModal>
                    <Button
                        onPress={this.onSeeRecordsButtonPress}
                        title='See Records!'>
                    </Button>
                    <Button
                        onPress={this.onSeeCategoriesButtonPress}
                        title='See Categories!'
                        color='#3F51B5'>
                    </Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#78909C'
    },
    containerBlurred: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }})

