import React from 'react'
import { Text, View, TextInput } from 'react-native'
import Constants from '../AppConstants'

const FormInput = (props) => {

    let { distanceToLabel } = props
    return (
        <View style={{flexDirection:'row', flexWrap:'wrap', paddingBottom: 21}}>
            <Text style={{alignSelf: 'flex-start', paddingRight:distanceToLabel, paddingLeft: 20}}>{props.labelText}</Text>
            <TextInput
                style={{alignSelf: 'center', height: 36, width: 190, borderColor: 'grey', borderWidth: 0,
                    backgroundColor: Constants.PRIMARY_COLOR, color: 'white', fontWeight: '800',
                    borderRadius: 5, paddingLeft: 3}}
                onChangeText={(qtyVal) => props.setFormState(qtyVal)}
                value={props.qtyVal}
                underlineColorAndroid='transparent'
            />
        </View>
    )
}

export default FormInput
