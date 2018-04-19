import React, { Component } from 'react'
import {
    Button,
    StyleSheet,
    View,
} from 'react-native'
import AddExpenseModal from './AddExpenseModal'
import restCalls from '../../utils/restCalls'


export default class Home extends Component {

    constructor(props) {
        super(props)
    }

    static navigationOptions = {
        title: 'BudgetTracker',
        headerStyle: { backgroundColor: '#000' , paddingTop: 15},
        headerTintColor: '#fff',
        headerTitleStyle: { color: '#fff' },
        drawerLabel: 'Home'
    }

    onSeeRecordsButtonPress = () => {
        console.log('Pressed')
        this.props.navigation.navigate('RecordsContainer')
    }

    addExpense = (expense) => {
        restCalls.addExpense(expense)
    }

    render() {
        return(
            <View style={{ flex: 1 }}>
                <View style={styles.container}>
                    <AddExpenseModal
                        addExpense={this.addExpense}>
                    </AddExpenseModal>
                    <Button
                        onPress={this.onSeeRecordsButtonPress}
                        title='See Records!'>
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
        backgroundColor: '#EEEEEE'
    }})

