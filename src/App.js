import React, { Component } from 'react'
import Home from './home/Home'
import { StackNavigator } from 'react-navigation'
import RecordsContainer from "./records/RecordsContainer";
// import Router from './Router'

export default class App extends Component {
  render() {
      // return(
      return <RootStack />
      // )
  }
}

const RootStack = StackNavigator(
    {
        Home: {
            screen: Home,
        },
        RecordsContainer: {
            screen: RecordsContainer,
        },
    },
    {
        initialRouteName: 'Home',
    }
);