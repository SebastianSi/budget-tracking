import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    ScrollView
} from 'react-native'
import { CategoryItem } from '../components'
import restCalls from '../../utils/restCalls'
import Constants from "../../AppConstants";

export default class CategoriesContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            categories: []
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
        this.updateCategoriesState()
    }

    handleCategoryPressed = (category, action) => {
        if (action === Constants.EDIT_EXPENSE) {
            // this.openEditExpenseModal(expense)
        } else if (action === Constants.REMOVE_EXPENSE) {
            this.onCategoryRemove(category)
        }
    }

    onCategoryRemove = (categoryName) => {
        restCalls.removeCategory(categoryName)
            .then(this.updateCategoriesState)
    }

    updateCategoriesState = () => {
        restCalls.getCategories().then(categories => {
            this.setState({
                categories
            })
        })
    }

    render() {
        let { categories } = this.state
        let renderedCategories = categories.map((el) => {
            return <CategoryItem
                category = {el}
                onPress={this.handleCategoryPressed}/>
        })
        return(
                <ScrollView style={styles.container}>
                    {renderedCategories}
                </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE'
    }})

