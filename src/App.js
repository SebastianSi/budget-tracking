import React, { Component } from 'react'
import Home from './home/containers/Home'
import { StackNavigator } from 'react-navigation'
import RecordsContainer from './records/containers/RecordsContainer'

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
        }
    },
    {
        initialRouteName: 'Home'
    }
);
