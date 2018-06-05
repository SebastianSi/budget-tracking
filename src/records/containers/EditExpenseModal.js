import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, TextInput, Picker, Platform} from 'react-native';
// import { Button } from 'native-base'
import { Button } from 'react-native-elements'
import Constants from '../../AppConstants'
import FormInput from '../../common/FormInput'

export default class EditExpenseModal extends Component {

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
            currency: this.props.expense.currency || '',
            prevAmount: this.props.expense.amount || '',
            categories: []
        }
    }

    componentDidMount() {
        this.getCategories()
    }

    getCategories = () => {
        this.props.getCategories(categories => {
            this.setState({
                categories
            })
            this.setInitialCategory(categories[0])
        })
    }

    setInitialCategory = (category) => {
        this.setCategory(category)
    }

    setCategory = (itemValue) => {
        this.setState({category: itemValue})
    }



    render() {
        let { categories } = this.state
        let modalContainerStyle, pickerStyle, submitButtonStyle
        if (Platform.OS === 'ios') {
            modalContainerStyle = {
                marginTop: 120,
                marginLeft: 8,
                height: 420,
                width: 360,
                backgroundColor: '#fff',
                borderRadius: 20,
                elevation: 10
            }
            pickerStyle = {
                top: -52,
                height: 40,
                width: 110,
                paddingBottom: 10
            }
            submitButtonStyle = {
                maxWidth: 120,
                alignSelf: 'flex-end',
                // paddingLeft: 18,
                marginLeft: 10,
                marginTop: 42,
                // paddingRight: 9,
                marginRight:12,
                marginBottom: 15
            }
        } else {
            modalContainerStyle = {
                marginTop: 80,
                marginLeft: 10,
                paddingBottom: 10,
                height: 420,
                width: 340,
                backgroundColor: '#fff',
                borderRadius: 20,
                elevation: 10
            }
            pickerStyle = {
                marginTop: 38,
                height: 40,
                width: 180,
                paddingBottom: 0
            }
            submitButtonStyle = {
                maxWidth: 120,
                alignSelf: 'flex-end',
                // paddingLeft: 18,
                marginTop: 20,
                // paddingRight: 9,
                marginRight:12,
                marginBottom: 25,
                marginLeft: 14
            }
        }

        let pickerItems = categories && categories.map((category) => {
            return <Picker.Item label={category} value={category} key={category}/>
        })

        return (
            <View>
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={this.props.modalVisible}
                    >
                    <View style={modalContainerStyle}>
                        <View>
                            {
                                this.props.expense &&
                                <View>
                                    <TouchableHighlight
                                        style={{alignSelf: 'flex-end', paddingTop: 10, paddingBottom: 10, paddingLeft: 10}}
                                        onPress={() => {
                                            this.props.closeEditModal()
                                        }}>
                                        <Text style={{fontSize: 23, color: Constants.PRIMARY_COLOR_DARK}}>x</Text>
                                    </TouchableHighlight>
                                    <View style={{flexDirection:'row', flexWrap:'wrap', paddingBottom: 10}}>
                                        <Text style={{alignSelf: 'flex-start', paddingRight:44}}>Qty</Text>
                                        <TextInput
                                            style={{alignSelf: 'center', height: 36, width: 150, borderColor: 'grey', borderWidth: 0,
                                                backgroundColor: Constants.PRIMARY_COLOR, color: 'white', fontWeight: '800'}}
                                            onChangeText={(qty) => this.setState({qty})}
                                            value={this.state.qty}
                                            underlineColorAndroid='transparent'
                                        />
                                    </View>
                                    <View style={{flexDirection:'row', flexWrap:'wrap', paddingBottom: 10}}>
                                        <Text style={{alignSelf: 'flex-start', paddingRight:40}}>Item</Text>
                                        <TextInput
                                            style={{alignSelf: 'center', height: 36, width: 150, borderColor: 'grey', borderWidth: 0,
                                                backgroundColor: Constants.PRIMARY_COLOR, color: 'white', fontWeight: '800'}}
                                            onChangeText={(item) => this.setState({item})}
                                            value={this.state.item}
                                            underlineColorAndroid='transparent'
                                        />
                                    </View>
                                    <View style={{flexDirection:'row', flexWrap:'wrap', paddingBottom: 10}}>
                                        <Text style={{alignSelf: 'flex-start', paddingRight:19}}>Amount</Text>
                                        <TextInput
                                            style={{alignSelf: 'center', height: 36, width: 150, borderColor: 'grey', borderWidth: 0,
                                                backgroundColor: Constants.PRIMARY_COLOR, color: 'white', fontWeight: '800'}}
                                            onChangeText={(amount) => this.setState({amount})}
                                            value={this.state.amount}
                                            underlineColorAndroid='transparent'
                                        />
                                    </View>
                                    {/*<View style={{flexDirection:'row', flexWrap:'wrap', paddingBottom: 10}}>*/}
                                        {/*<Text style={{alignSelf: 'flex-start', paddingRight:10}}>Category</Text>*/}
                                        {/*<TextInput*/}
                                            {/*style={{alignSelf: 'center', height: 30, width: 150, borderColor: 'grey', borderWidth: 0, backgroundColor: '#fff'}}*/}
                                            {/*onChangeText={(category) => this.setState({category})}*/}
                                            {/*value={this.state.category}*/}
                                        {/*/>*/}
                                    {/*</View>*/}
                                    <View style={{flexDirection:'row', flexWrap:'wrap', paddingBottom: 20, marginTop: 20}}>
                                        <Text style={{alignSelf: 'flex-start', paddingRight:10, paddingLeft: 10, paddingTop: 48}}>Category</Text>
                                        <Picker
                                            itemStyle={{color: Constants.PRIMARY_COLOR_DARK}}
                                            selectedValue={this.state.category}
                                            style={pickerStyle}
                                            onValueChange={(itemValue, itemIndex) => this.setCategory(itemValue, itemIndex)}>
                                            {pickerItems}
                                        </Picker>
                                    </View>
                                </View>
                            }
                            <Button
                                onPress={() => {
                                    this.props.editExpense(this.state)
                                    this.props.closeEditModal()
                                }}
                                raised
                                containerViewStyle={submitButtonStyle}
                                backgroundColor={Constants.PRIMARY_COLOR_DARK}
                                borderRadius={5}
                                rightIcon={{name: 'send'}}
                                title='Submit'>
                            </Button>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}
