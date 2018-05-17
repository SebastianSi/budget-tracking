import React, {Component} from 'react'
import { Card, Button } from 'react-native-elements'
import { Text } from 'react-native'

export default class Balance extends Component {

    render() {
        return (
            <Card title='Current Budget' style={{flex: 1
            }}>
                <Text style={{marginBottom: 10, alignSelf: 'center'}}>
                    {this.props.currentBalance}
                </Text>
            </Card>
        )
    }

}
