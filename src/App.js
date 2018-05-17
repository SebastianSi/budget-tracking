import React, { Component } from 'react'
import { Home } from './home/containers'
// import { StackNavigator } from 'react-navigation'
import { DrawerNavigator } from 'react-navigation'
import RecordsContainer from './records/containers/RecordsContainer'
import CategoriesContainer from './categories/containers/CategoriesContainer'

export default class App extends Component {
  render() {
      return <RootStack />
  }
}

const RootStack = DrawerNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                drawer: {
                    label: 'Home'
                }
            }
        },
        RecordsContainer: {
            screen: RecordsContainer,
            navigationOptions: {
                drawer: {
                    label: 'Records'
                }
            }
        }
    }
);
