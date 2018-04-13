import React, { Component } from 'react'
import {
    StyleSheet,
    View
} from 'react-native'
import ExpensesContainer from './ExpensesContainer'
import restCalls from '../../utils/restCalls'

export default class RecordsContainer extends Component {

    static navigationOptions = {
        title: 'BudgetTracker',
        headerStyle: { backgroundColor: '#000' , paddingTop: 15},
        headerTintColor: '#fff',
        headerTitleStyle: { color: '#fff' },
        drawerLabel: 'Home'
    }

    constructor(props) {
        super(props)
        this.state = {
            expenses: []
        }
    }



    componentDidMount() {
        this.setState({expenses: restCalls.getExpenses()})
    }

    onButtonPress = () => {
        console.log('Pressed')
        this.props.navigation.goBack()
    }

    navigateTo = () => {
        // Actions.home()
    }

    render() {
        return(
            <View style={styles.container}>
                {/*<Header headerText={'Budget Tracking'}*/}
                {/*navigateTo = {this.navigateTo}/>*/}
                {/*<View style={styles.container}>*/}
                    {/*<Button onPress={this.onButtonPress}>*/}
                        {/*Go to Home*/}
                    {/*</Button>*/}
                    <ExpensesContainer
                    userExpenses = {this.state.expenses}>
                    </ExpensesContainer>
                {/*</View>*/}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignSelf: 'flex-start',
        flexDirection: 'column',
        backgroundColor: '#EEEEEE'
    }})

