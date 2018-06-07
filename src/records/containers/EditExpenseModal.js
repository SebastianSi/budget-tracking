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
        this.props.blurBackground(true)
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
                flex: 1,
                alignItems: 'center',
                marginTop: 80,
                marginLeft: 8,
                marginBottom: 5,
                height: 440,
                width: 360,
                backgroundColor: Constants.APP_BACKGROUND,
                borderRadius: 20,
                elevation: 10
            }
            pickerStyle = {
                top: -52,
                height: 40,
                width: 110,
                paddingBottom: 10,
                // marginLeft: 25
            }
            submitButtonStyle = {
                // maxWidth: 120,
                width: 330,
                // alignSelf: 'center',
                // paddingLeft: 18,
                marginLeft: 12,
                marginTop: 222,
                // paddingRight: 9,
                marginRight:12
            }
        } else {
            modalContainerStyle = {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 80,
                marginLeft: 10,
                marginBottom: 10,
                height: 400,
                width: 340,
                backgroundColor: Constants.APP_BACKGROUND,
                borderRadius: 20,
                elevation: 10
            }
            pickerStyle = {
                marginTop: 38,
                height: 40,
                width: 120,
                paddingBottom: 0,
                // marginLeft: 12
            }
            submitButtonStyle = {
                width: 330,
                // alignSelf: 'flex-end',
                // paddingLeft: 18,
                marginTop: 110,
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
                                        style={{alignSelf: 'flex-end', padding: 15}}
                                        onPress={() => {
                                            this.props.blurBackground(false)
                                            this.props.closeEditModal()
                                        }}>
                                        <Text style={{fontSize: 23, color: Constants.PRIMARY_COLOR_DARK}}>x</Text>
                                    </TouchableHighlight>
                                    <View style={{flexDirection:'row', paddingBottom: 10, paddingLeft: 25}}>
                                        <Text style={{paddingRight:44}}>Qty</Text>
                                        <TextInput
                                            style={{height: 36, width: 190, borderColor: 'grey', borderWidth: 0,
                                                borderRadius: 5, paddingLeft: 14, backgroundColor: Constants.PRIMARY_COLOR, color: 'white', fontWeight: '800'}}
                                            onChangeText={(qty) => this.setState({qty})}
                                            value={this.state.qty}
                                            underlineColorAndroid='transparent'
                                        />
                                    </View>
                                    <View style={{flexDirection:'row', paddingBottom: 10, paddingLeft: 15}}>
                                        <Text style={{alignSelf: 'flex-start', paddingRight:40, marginLeft: 9}}>Item</Text>
                                        <TextInput
                                            style={{height: 36, width: 190, borderColor: 'grey', borderWidth: 0,
                                                borderRadius: 5, paddingLeft: 3, backgroundColor: Constants.PRIMARY_COLOR, color: 'white', fontWeight: '800'}}
                                            onChangeText={(item) => this.setState({item})}
                                            value={this.state.item}
                                            underlineColorAndroid='transparent'
                                        />
                                    </View>
                                    <View style={{flexDirection:'row', paddingBottom: 10, paddingLeft: 15}}>
                                        <Text style={{paddingRight:19, marginLeft: 8}}>Amount</Text>
                                        <TextInput
                                            style={{height: 36, width: 190, borderColor: 'grey', borderWidth: 0,
                                                borderRadius: 5, paddingLeft: 3, backgroundColor: Constants.PRIMARY_COLOR, color: 'white', fontWeight: '800'}}
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
                                    <View style={{flexDirection:'row', paddingLeft: 15, paddingBottom: 20, marginTop: 20}}>
                                        <Text style={{alignSelf: 'flex-start', paddingRight:10, paddingLeft: 9, paddingTop: 48}}>Category</Text>
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
                                    this.props.blurBackground(false)
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
