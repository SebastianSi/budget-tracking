import React, { Component } from 'react'
import { Home } from './home/containers'
import { StackNavigator } from 'react-navigation'
import RecordsContainer from './records/containers/RecordsContainer'
import CategoriesContainer from './categories/containers/CategoriesContainer'
import {
    ImageBackground
} from 'react-native'

export default class App extends Component {
  render() {
      return (
          /*<ImageBackground*/
              /*source={require('./img/cash.png')}*/
              // imageStyle={{resizeMode: 'stretch'}}
              // width={200}
              // height={280}
              // style={{
              //     // flex: 1,
              //     // width: '100%',
              //     // height: '100%',
              //     // alignItems: 'center',
              //     // justifyContent: 'center',
              //     // padding: 300
              // }}>
              <RootStack />
          /*</ImageBackground>*/
      )
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
