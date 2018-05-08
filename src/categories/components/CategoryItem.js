import React from 'react'
import {Text, TouchableOpacity} from 'react-native'
import Button from '../../common/Button'
import Constants from '../../AppConstants'

const CategoryItem = (props) => {
    let { category } = props
    return (
        <TouchableOpacity style={styles.category}>
            <Text style={styles.categoryText}>{category}</Text>
            <Button onPress={() => {props.onPress(category, Constants.EDIT_CATEGORY)}}
                    styles={styles.editButton}>
                Edit
            </Button>
            <Button onPress={() => {props.onPress(category, Constants.REMOVE_CATEGORY)}}
                    styles={styles.removeButton}>
                Remove
            </Button>
        </TouchableOpacity>
    )
}


const styles = {
    category: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#ddd',
        height: 50
    },
    categoryText: {
        fontWeight: '700',
        color: '#673AB7',
        left: 9
    },
    editButton: {
        textStyle: {
            color: '#007aff',
            fontSize: 12,
            fontWeight: '700'
        },
        buttonStyle: {
            height: 28,
            width: 50,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#007aff',
            right: 68,
            position: 'absolute'
        }
    },
    removeButton: {
        textStyle: {
            color: '#000',
            fontSize: 12,
            fontWeight: '700'
        },
        buttonStyle: {
            height: 28,
            width: 51,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F44336',
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#007aff',
            marginRight: 9
        }
    }

}

export default CategoryItem
