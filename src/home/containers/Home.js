import React, { Component } from 'react'
import {
    Button,
    StyleSheet,
    View,
    Image
} from 'react-native'
import AddExpenseModal from './AddExpenseModal'
import restCalls from '../../utils/restCalls'
import Icon from '../../img/icons8-menu.png'


export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isBlurred: false
        }
    }
    //
    // static navigationOptions = {
    //     title: 'BudgetTracker',
    //     headerStyle: { backgroundColor: '#000' , paddingTop: 15},
    //     headerTintColor: '#fff',
    //     headerTitleStyle: { color: '#fff' },
    //     drawerLabel: 'Home'
    // }

    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: () => (
            <Image
                source={Icon}
                style={[{width: 24, height: 24}, {tintColor: 'green'}]}
            />
        ),
    };

    componentDidMount() {
        // this.props.navigation.toggleDrawer();
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
        restCalls.addExpense(expense).then(this.forceUpdate())
    }

    addNewCategory = (category) => {
        restCalls.addCategory(category)
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
        backgroundColor: 'grey'
    }})

