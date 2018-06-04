import React, {Component} from 'react'
import { Card, Button } from 'react-native-elements'
import { Text, View} from 'react-native'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import Constants from '../../AppConstants'

export default class Balance extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isEditPressed: false,
            amount: ''
        }
    }

    setAmount = (amount) => {
        this.setState({amount})
    }

    onPress = () => {
        if (this.state.isEditPressed) {
            this.props.onSetBalance(this.state.amount)
            this.setState({isEditPressed: false})
        } else {
            this.setState({isEditPressed: true})
        }
    }

    render() {
        return (
            <Card title='Current Balance'
                  containerStyle={{borderColor: Constants.PRIMARY_COLOR_LIGHT, marginTop: 40}}
            >
                {
                    !this.state.isEditPressed ?

                    <Text style={{marginBottom: 10, fontWeight: '800', fontSize: 20, alignSelf: 'center', color: Constants.PRIMARY_COLOR_DARK}}>
                        {this.props.currentBalance + '$'}
                    </Text>
                        :
                    <View style={{maxWidth: 150}}>
                        <FormLabel>New Balance</FormLabel>
                        <FormInput onChangeText={this.setAmount}
                                    inputStyle={{fontWeight: '700', color: Constants.PRIMARY_COLOR}}/>
                    </View>
                }

                <Button
                    raised
                    backgroundColor={Constants.PRIMARY_COLOR}
                    borderRadius={5}
                    icon={{name: 'edit'}}
                    title='Set Balance'
                    onPress={this.onPress}
                />
            </Card>
        )
    }

}
