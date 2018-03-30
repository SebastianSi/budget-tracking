import React, {Component} from 'react'
import {Modal, Text, TouchableHighlight, View, TextInput} from 'react-native'

export default class ModalExample extends Component {
    state = {
        modalVisible: false,
        itemText: ''
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible})
    }

    render() {
        let modalContainerStyle = {
            marginTop: 222,
            marginLeft: 40,
            height: 240,
            width: 280,
            backgroundColor: '#D3D3D3',
            borderRadius: 22,
            justifyContent: 'center',
            alignItems: 'center'
        }

        return (
            <View style={{marginTop: 22, justifyContent: 'center', alignItems: 'center'}}>
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
                                style={{paddingLeft: 10}}
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible)
                                }}>
                                <View>
                                    <Text>X</Text>
                                    <Text>Item</Text>
                                    <TextInput
                                        style={{height: 30, width: 100, borderColor: 'black', borderWidth: 1, backgroundColor: '#fff'}}
                                        onChangeText={(itemText) => this.setState({itemText})}
                                        value={this.state.itemText}
                                    />
                                </View>
                            </TouchableHighlight>
                            <Text></Text>
                        </View>
                    </View>
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