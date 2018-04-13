import React, {Component} from 'react'
import {Modal, Text, TouchableHighlight, View, TextInput, Picker} from 'react-native'
// import FloatLabelTextInput from 'react-native-floating-label-text-input'
// import InlineLabelExample from './InlineLabelExample'
import { Button } from 'native-base'
import restCalls from '../utils/restCalls'

export default class ModalExample extends Component {
    state = {
        modalVisible: false,
        itemText: '',
        qtyVal: '1',
        amountText: '',
        categoryText: ''
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible})
    }

    render() {
        let modalContainerStyle = {
            marginTop: 182,
            marginLeft: 18,
            height: 320,
            width: 340,
            backgroundColor: '#455A64',
            borderRadius: 20
        }

        return (
            <View style={{marginTop: 22}}>
                <Modal
                    animationType='fade'
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        alert('Modal has been closed.')
                    }}>
                        <View style={modalContainerStyle}>
                            <View>
                                <TouchableHighlight
                                    style={{alignSelf: 'flex-end', paddingRight:12, paddingTop: 10, paddingBottom: 10, paddingLeft: 10}}
                                    onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible)
                                    }}>
                                    <Text style={{fontSize: 25}}>x</Text>
                                </TouchableHighlight>
                                <View style={{flexDirection:'row', flexWrap:'wrap', paddingBottom: 20}}>
                                    <Text style={{alignSelf: 'flex-start', paddingRight:10}}>Qty</Text>
                                    <TextInput
                                        style={{alignSelf: 'center', height: 30, width: 150, borderColor: 'grey', borderWidth: 0, backgroundColor: '#fff'}}
                                        onChangeText={(qtyVal) => this.setState({qtyVal})}
                                        value={this.state.qtyVal}
                                    />
                                    {/*<Picker*/}
                                        {/*selectedValue={this.state.qtyVal}*/}
                                        {/*style={{ height: 15, width: 150 }}*/}
                                        {/*onValueChange={(qtyVal, itemIndex) => this.setState({qtyVal: qtyVal})}>*/}
                                        {/*<Picker.Item label="1" value="1" />*/}
                                        {/*<Picker.Item label="2" value="2" />*/}
                                    {/*</Picker>*/}
                                </View>
                                <View style={{flexDirection:'row', flexWrap:'wrap', paddingBottom: 20}}>
                                    <Text style={{alignSelf: 'flex-start', paddingRight:10}}>Item</Text>
                                    <TextInput
                                        style={{alignSelf: 'center', height: 30, width: 150, borderColor: 'grey', borderWidth: 0, backgroundColor: '#fff'}}
                                        onChangeText={(itemText) => this.setState({itemText})}
                                        value={this.state.itemText}
                                    />
                                </View>
                                <View style={{flexDirection:'row', flexWrap:'wrap', paddingBottom: 20}}>
                                    <Text style={{alignSelf: 'flex-start', paddingRight:10}}>Amount</Text>
                                    <TextInput
                                        style={{alignSelf: 'center', height: 30, width: 150, borderColor: 'grey', borderWidth: 0, backgroundColor: '#fff'}}
                                        onChangeText={(amountText) => this.setState({amountText})}
                                        value={this.state.amountText}
                                    />
                                </View>
                                <View style={{flexDirection:'row', flexWrap:'wrap', paddingBottom: 20}}>
                                    <Text style={{alignSelf: 'flex-start', paddingRight:10}}>Category</Text>
                                    <TextInput
                                        style={{alignSelf: 'center', height: 30, width: 150, borderColor: 'grey', borderWidth: 0, backgroundColor: '#fff'}}
                                        onChangeText={(categoryText) => this.setState({categoryText})}
                                        value={this.state.categoryText}
                                    />
                                </View>
                                {/*<TouchableHighlight onPress={() => {*/}
                                    {/*this.setModalVisible(!this.state.modalVisible)*/}
                                {/*}}>*/}
                                    <Button
                                        onPress={() => {
                                            let expense = {
                                                category: this.state.categoryText,
                                                amount: this.state.amountText,
                                                currency: 'RON',
                                                item: this.state.itemText,
                                                qty: this.state.qtyVal
                                            }
                                            restCalls.addExpense(expense)
                                            this.setModalVisible(false)
                                        }}
                                        light style={{alignSelf: 'flex-end', paddingLeft: 5, paddingRight: 5, marginRight:12, marginBottom: 10}}>
                                        <Text>Submit </Text>
                                    </Button>
                                {/*</TouchableHighlight>*/}
                            </View>
                        </View>
                    {/*<InlineLabelExample>*/}
                    {/*</InlineLabelExample>*/}
                </Modal>

                <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(true)
                    }}>
                    <Text>Add Expense</Text>
                </TouchableHighlight>
            </View>
        )
    }
}
