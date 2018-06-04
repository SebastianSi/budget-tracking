import React, {Component} from 'react'
import {Modal, Text, TouchableHighlight, View, TextInput, Picker, Platform} from 'react-native'
// import { Button } from 'native-base'
import { Button } from 'react-native-elements'
import Constants from '../../AppConstants'
import FormInput from '../../common/FormInput'
import restCalls from '../../utils/restCalls'


export default class AddExpenseModal extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            itemText: '',
            qtyVal: '1',
            amountText: '',
            categoryText: '',
            addCateg: '',
            categories: []
        }

        this.initialState = this.state
    }

    componentDidMount() {
        this.getCategories()
    }

    componentWillReceiveProps() {
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

    addExpense = (expense) => {
        this.addNewCategory(expense.category)
        this.props.addExpense(expense)
    }

    setModalVisible = (visible)=> {
        this.setState({modalVisible: visible})
        this.props.blurBackground(true)
    }

    addNewCategory = (category) => {
        this.props.addNewCategory(category)
    }

    setCategory = (itemValue) => {
        this.setState({addCateg: itemValue})
        if (itemValue !== 'addCategory') {
            this.setState({categoryText: itemValue})
        }
    }

    render() {
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
                marginTop: 30,
                // paddingRight: 9,
                marginRight:12,
                marginBottom: 25,
                marginLeft: 14
            }
        }


        let { categories } = this.state
        console.log(Platform.OS)

        let addCategoryPickerItem = <Picker.Item label={'Add New +'} value={'addCategory'}
                                         key={'addNew'} color={Constants.SECONDARY_COLOR_DARK}/>
        let pickerItems = categories && categories.map((category) => {
            return <Picker.Item label={category} value={category} key={category}/>
        })


        pickerItems && pickerItems.splice(1, 0, addCategoryPickerItem)

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
                                    this.props.blurBackground(false)
                                    //clear state - will also reset modalVisible to false
                                    this.setState(this.initialState)
                                }}>
                                <Text style={{fontSize: 30, color: Constants.PRIMARY_COLOR_DARK}}>x</Text>
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
                                    itemStyle={{color: Constants.PRIMARY_COLOR_DARK}}
                                    selectedValue={this.state.addCateg || this.state.categoryText}
                                    style={pickerStyle}
                                    onValueChange={(itemValue, itemIndex) => this.setCategory(itemValue, itemIndex)}>
                                    {pickerItems}
                                </Picker>
                                {
                                    this.state.addCateg === 'addCategory' &&
                                    <TextInput
                                        style={{height: 30, width: 90, borderColor: 'grey',
                                            borderWidth: 0, backgroundColor: Constants.PRIMARY_COLOR, marginTop: 40,
                                        marginLeft: 20, color: 'white', fontWeight: '800'}}
                                        onChangeText={(categoryText) => this.setState({categoryText})}
                                        value={this.state.categoryText}
                                    />
                                }
                            </View>

                                {/*<Button*/}
                                    {/*onPress={() => {*/}
                                        {/*let expense = {*/}
                                            {/*category: this.state.categoryText,*/}
                                            {/*amount: this.state.amountText,*/}
                                            {/*currency: 'RON',*/}
                                            {/*item: this.state.itemText,*/}
                                            {/*qty: this.state.qtyVal*/}
                                        {/*}*/}
                                        {/*this.addExpense(expense)*/}
                                        {/*//clear state - will also reset modalVisible to false*/}
                                        {/*this.props.blurBackground(false)*/}
                                        {/*this.setState(this.initialState)*/}
                                    {/*}}*/}
                                    {/*primary1 style={{alignSelf: 'flex-end', paddingLeft: 9, marginTop: 45, paddingRight: 9, marginRight:12, marginBottom: 15}}>*/}
                                    {/*<Text style={{color: '#fff', fontWeight: '800'}}>Submit </Text>*/}
                                {/*</Button>*/}
                                <Button
                                    raised
                                    containerViewStyle={submitButtonStyle}
                                    backgroundColor={Constants.PRIMARY_COLOR_DARK}
                                    borderRadius={5}
                                    rightIcon={{name: 'send'}}
                                    title='Submit'
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
                                        this.props.blurBackground(false)
                                        this.setState(this.initialState)
                                    }}
                                />
                        </View>
                    </View>
                </Modal>

                {/*<TouchableHighlight*/}
                    {/*onPress={() => {*/}
                        {/*this.setModalVisible(true)*/}
                    {/*}}>*/}
                    {/*<Text>Add Expense</Text>*/}
                {/*</TouchableHighlight>*/}
                <Button
                    raised
                    backgroundColor={Constants.SECONDARY_COLOR}
                    color={'black'}
                    borderRadius={5}
                    icon={{name: 'add', color: '#000'}}
                    title='Add Expense'
                    onPress={() => {
                        this.setModalVisible(true)
                    }}
                    containerViewStyle={{marginTop: 50}}
                />
            </View>
        )
    }
}
