import React, {Component} from 'react'
import {Modal, Text, TouchableHighlight, View, TextInput, Picker, Platform} from 'react-native'
import { Button } from 'native-base'
import Constants from '../../AppConstants'
import FormInput from '../../common/FormInput'


export default class AddExpenseModal extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            itemText: '',
            qtyVal: '1',
            amountText: '',
            categoryText: Constants.CATEGORIES.FOOD,
            addCateg: ''
        }

        this.initialState = this.state
    }

    addExpense = (expense) => {
        this.props.addExpense(expense)
    }

    setModalVisible = (visible)=> {
        this.setState({modalVisible: visible})
    }

    setCategory = (itemValue) => {
        this.setState({addCateg: itemValue})
        if (itemValue !== 'addCategory') {
            this.setState({categoryText: itemValue})
        }
    }

    render() {
        let modalContainerStyle = {
            marginTop: 140,
            marginLeft: 8,
            height: 420,
            width: 360,
            backgroundColor: '#455A64',
            borderRadius: 20,
            elevation: 10
        }

        let { CATEGORIES } = Constants
        console.log(Platform.OS)

        let addCategoryPickerItem = <Picker.Item label={'Add New +'} value={'addCategory'}
                                         key={'addNew'} color='#43A047'/>
        let pickerItems = Object.values(CATEGORIES).map((category) => {
            return <Picker.Item label={category} value={category} key={category}/>
        })

        pickerItems.splice(1, 0, addCategoryPickerItem)

        return (
            <View>
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
                                    //clear state - will also reset modalVisible to false
                                    this.setState(this.initialState)
                                }}>
                                <Text style={{fontSize: 20}}>x</Text>
                            </TouchableHighlight>
                            <FormInput
                                distanceToLabel={44}
                                labelText={'Qty'}
                                setFormState={(qtyVal) => this.setState({qtyVal})}
                                qtyVal={this.state.qtyVal}
                            />
                            <FormInput
                                distanceToLabel={40}
                                labelText={'Item'}
                                setFormState={(itemText) => this.setState({itemText})}
                                qtyVal={this.state.itemText}
                            />
                            <FormInput
                                distanceToLabel={19}
                                labelText={'Amount'}
                                setFormState={(amountText) => this.setState({amountText})}
                                qtyVal={this.state.amountText}
                            />

                            <View style={{flexDirection:'row', flexWrap:'wrap', paddingBottom: 20, marginTop: 20}}>
                                <Text style={{alignSelf: 'flex-start', paddingRight:10, paddingLeft: 10, paddingTop: 48}}>Category</Text>
                                <Picker
                                    itemStyle={{color: 'white'}}
                                    selectedValue={this.state.addCateg}
                                    style={{ top: -52, height: 40, width: 110, paddingBottom: 10 }}
                                    onValueChange={(itemValue, itemIndex) => this.setCategory(itemValue, itemIndex)}>
                                    {pickerItems}
                                </Picker>
                                {
                                    this.state.addCateg === 'addCategory' &&
                                    <TextInput
                                        style={{height: 30, width: 90, borderColor: 'grey',
                                            borderWidth: 0, backgroundColor: '#fff', marginTop: 40,
                                        marginLeft: 20}}
                                        onChangeText={(categoryText) => this.setState({categoryText})}
                                        value={this.state.categoryText}
                                    />
                                }
                            </View>

                                <Button
                                    onPress={() => {
                                        let expense = {
                                            category: this.state.categoryText,
                                            amount: this.state.amountText,
                                            currency: 'RON',
                                            item: this.state.itemText,
                                            qty: this.state.qtyVal
                                        }
                                        this.addExpense(expense)
                                        //clear state - will also reset modalVisible to false
                                        this.setState(this.initialState)
                                    }}
                                    light style={{alignSelf: 'flex-end', paddingLeft: 5, marginTop: 50, paddingRight: 5, marginRight:12, marginBottom: 10}}>
                                    <Text>Submit </Text>
                                </Button>
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
