import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, TextInput} from 'react-native';

export default class ModalWithForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.expense.id,
            date: this.props.expense.date,
            time: this.props.expense.time,
            qty: this.props.expense.qty || '',
            item: this.props.expense.item || '',
            amount: this.props.expense.amount || '',
            category: this.props.expense.category || '',
            currency: this.props.expense.currency || ''
        }
    }

    render() {
        let modalContainerStyle = {
            marginTop: 82,
            marginLeft: 18,
            height: 320,
            width: 340,
            backgroundColor: '#455A64',
            borderRadius: 20
        }

        let formContainerStyle = {
            marginTop: 242,
            marginLeft: 30,
            marginBottom: 30,
            height: 260,
            width: 310
        }

        let submitButtonStyle = {
            marginTop: 42,
            marginLeft: 160,
            marginRight: 30,
            backgroundColor: 'green'
        }

        return (
            <View style={modalContainerStyle}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.props.modalVisible}
                    onRequestClose={() => {
                        alert('Modal has been closed.');
                    }}>
                    <View style={formContainerStyle}>
                        <View>
                            {
                                this.props.expense &&
                                <View>
                                    <TouchableHighlight
                                        style={{alignSelf: 'flex-end', paddingTop: 10, paddingBottom: 10, paddingLeft: 10}}
                                        onPress={() => {
                                            this.props.closeEditModal()
                                        }}>
                                        <Text style={{fontSize: 25}}>x</Text>
                                    </TouchableHighlight>
                                    <View style={{flexDirection:'row', flexWrap:'wrap', paddingBottom: 10}}>
                                        <Text style={{alignSelf: 'flex-start', paddingRight:10}}>Qty</Text>
                                        <TextInput
                                            style={{alignSelf: 'center', height: 30, width: 150, borderColor: 'grey', borderWidth: 0, backgroundColor: '#fff'}}
                                            onChangeText={(qty) => this.setState({qty})}
                                            value={this.state.qty}
                                        />
                                    </View>
                                    <View style={{flexDirection:'row', flexWrap:'wrap', paddingBottom: 10}}>
                                        <Text style={{alignSelf: 'flex-start', paddingRight:10}}>Item</Text>
                                        <TextInput
                                            style={{alignSelf: 'center', height: 30, width: 150, borderColor: 'grey', borderWidth: 0, backgroundColor: '#fff'}}
                                            onChangeText={(item) => this.setState({item})}
                                            value={this.state.item}
                                        />
                                    </View>
                                    <View style={{flexDirection:'row', flexWrap:'wrap', paddingBottom: 10}}>
                                        <Text style={{alignSelf: 'flex-start', paddingRight:10}}>Amount</Text>
                                        <TextInput
                                            style={{alignSelf: 'center', height: 30, width: 150, borderColor: 'grey', borderWidth: 0, backgroundColor: '#fff'}}
                                            onChangeText={(amount) => this.setState({amount})}
                                            value={this.state.amount}
                                        />
                                    </View>
                                    <View style={{flexDirection:'row', flexWrap:'wrap', paddingBottom: 10}}>
                                        <Text style={{alignSelf: 'flex-start', paddingRight:10}}>Category</Text>
                                        <TextInput
                                            style={{alignSelf: 'center', height: 30, width: 150, borderColor: 'grey', borderWidth: 0, backgroundColor: '#fff'}}
                                            onChangeText={(category) => this.setState({category})}
                                            value={this.state.category}
                                        />
                                    </View>
                                </View>
                            }
                            <TouchableHighlight style={submitButtonStyle}
                                                onPress={() => {
                                                    this.props.editExpense(this.state)
                                                    this.props.closeEditModal()
                                                }}>
                                <Text>Submit</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}
