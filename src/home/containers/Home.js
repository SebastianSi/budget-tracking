import React, { Component } from 'react'
import {
    Platform,
    StyleSheet,
    View,
} from 'react-native'
import { Button } from 'react-native-elements'
import AddExpenseModal from './AddExpenseModal'
import Balance from '../components/Balance'
// import SetBudgetModal from '../components/SetBudgetModal'
import restCalls from '../../utils/restCalls'
import Constants from '../../AppConstants'


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

    onSetBalancePressed = (amount) => {
        this.setBalance(amount)
    }

    // toggleSetBudgetModal = (isShown) => {
    //     this.blurBackground(isShown)
    //     this.setState({isSetBudgetOpen: isShown})
    // }


    render() {
        let footerButtonsStyleIos = {
            alignSelf: 'flex-end',
            flexDirection: 'row',
            alignItems: 'baseline',
            marginTop: 220,
            alignContent: 'space-between'
        }
        let footerButtonsStyleAndroid = {
            alignSelf: 'flex-end',
            flexDirection: 'row',
            alignItems: 'baseline',
            marginTop: 150,
            alignContent: 'space-between'
        }
        let viewRecordsButtonIos = {marginTop: 20, width: 160, height: 60}
        let viewRecordsButtonAndroid = {marginTop: 20, width: 160, height: 60, left: 20}
        let viewRecordsButtonStyle = Platform.OS === 'ios' ?  viewRecordsButtonIos : viewRecordsButtonAndroid
        let footerButtonsStyle = Platform.OS === 'ios' ?  footerButtonsStyleIos : footerButtonsStyleAndroid
        return(
            <View style={{ flex: 1 }}>
                <View style={this.state.isBlurred ? styles.container : styles.containerBlurred}>
                    <Balance
                        currentBalance={this.state.currentBalance}
                        onSetBalance={this.onSetBalancePressed}
                    />
                    <AddExpenseModal
                        blurBackground={this.blurBackground}
                        addExpense={this.addExpense}
                        addNewCategory={this.addNewCategory}
                        getCategories={this.getCategories}>
                    </AddExpenseModal>
                    {
                        !this.state.isBlurred &&

                        <View style={footerButtonsStyle}>
                            <Button

                                backgroundColor={Constants.PRIMARY_COLOR}
                                borderRadius={5}
                                icon={{name: 'subject'}}
                                title='View Records'
                                onPress={this.onSeeRecordsButtonPress}
                                containerViewStyle={viewRecordsButtonStyle}
                            />
                            <Button

                                backgroundColor={Constants.PRIMARY_COLOR}
                                borderRadius={5}
                                icon={{name: 'list'}}
                                onPress={this.onSeeCategoriesButtonPress}
                                title='View Categories'
                                containerViewStyle={{marginTop: 20, width: 160, height: 60}}
                                // color='#3F51B5'
                            >
                            </Button>
                        </View>
                    }
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
        backgroundColor: Constants.PRIMARY_COLOR_DARK
    },
    containerBlurred: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Constants.APP_BACKGROUND
    }})

