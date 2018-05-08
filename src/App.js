import React, { Component } from 'react'
import { Home } from './home/containers'
import { StackNavigator } from 'react-navigation'
import RecordsContainer from './records/containers/RecordsContainer'
import CategoriesContainer from './categories/containers/CategoriesContainer'

export default class App extends Component {
  render() {
      return <RootStack />
  }
}

const RootStack = StackNavigator(
    {
        Home: {
            screen: Home
        },
        RecordsContainer: {
            screen: RecordsContainer
        },
        CategoriesContainer: {
            screen: CategoriesContainer
        }
    },
    {
        initialRouteName: 'Home'
    }
);
