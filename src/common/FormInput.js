import React from 'react'
import { Text, View, TextInput } from 'react-native'

const FormInput = (props) => {

    let { distanceToLabel } = props
    return (
        <View style={{flexDirection:'row', flexWrap:'wrap', paddingBottom: 20}}>
            <Text style={{alignSelf: 'flex-start', paddingRight:distanceToLabel, paddingLeft: 10}}>{props.labelText}</Text>
            <TextInput
                style={{alignSelf: 'center', height: 30, width: 150, borderColor: 'grey', borderWidth: 0, backgroundColor: '#fff'}}
                onChangeText={(qtyVal) => props.setFormState(qtyVal)}
                value={props.qtyVal}
            />
        </View>
    )
}

export default FormInput
