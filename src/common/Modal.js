import React, {Component} from 'react'
import {Modal, Text, TouchableHighlight, View, TextInput} from 'react-native'
// import FloatLabelTextInput from 'react-native-floating-label-text-input'
import InlineLabelExample from './InlineLabelExample'

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
            borderRadius: 22
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
                                style={{paddingLeft: 10}}
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible)
                                }}>
                                <View>
                                    <Text style={{alignSelf: 'flex-end', paddingRight:10, paddingTop: 10, marginBottom: 20}}>
                                        x</Text>
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
                                            onChangeText={(itemText) => this.setState({itemText})}
                                            value={this.state.itemText}
                                        />
                                    </View>
                                    <View style={{flexDirection:'row', flexWrap:'wrap', paddingBottom: 20}}>
                                        <Text style={{alignSelf: 'flex-start', paddingRight:10}}>Category</Text>
                                        <TextInput
                                            style={{alignSelf: 'center', height: 30, width: 150, borderColor: 'grey', borderWidth: 0, backgroundColor: '#fff'}}
                                            onChangeText={(itemText) => this.setState({itemText})}
                                            value={this.state.itemText}
                                        />
                                    </View>
                                </View>
                            </TouchableHighlight>
                            {/*<Text></Text>*/}
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