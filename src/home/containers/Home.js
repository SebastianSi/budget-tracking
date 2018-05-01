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
        this.state = {
            isBlurred: false
        }
    }

    static navigationOptions = {
        title: 'BudgetTracker',
        headerStyle: { backgroundColor: '#000' , paddingTop: 15},
        headerTintColor: '#fff',
        headerTitleStyle: { color: '#fff' },
        drawerLabel: 'Home'
    }

    onSeeRecordsButtonPress = () => {
        this.props.navigation.navigate('RecordsContainer')
    }

    addExpense = (expense) => {
        restCalls.addExpense(expense).then(this.forceUpdate())
    }

    blurBackground = (isBlurred) => {
        this.setState({isBlurred})
    }

    render() {
        return(
            <View style={{ flex: 1 }}>
                <View style={this.state.isBlurred ? styles.container : styles.containerBlurred}>
                    <AddExpenseModal
                        blurBackground={this.blurBackground}
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
        backgroundColor: '#78909C'
    },
    containerBlurred: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }})

