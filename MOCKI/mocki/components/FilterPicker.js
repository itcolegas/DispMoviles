import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import RNPickerSelect from 'react-native-picker-select';

export default function FilterPicker(props) {
    let placeholder = props.placeholder? props.placeholder : 'Select';
    let items = props.items? props.items : [];

    const getItems = (items) => {
        return items.map(item => {
            return { label: item, value: item.toLowerCase(), key: item.toLowerCase() }
        })
    }

    return (
        <>
        { props.setSelected ?
            <RNPickerSelect
                placeholder={{label: placeholder, value: null, color: '#9FA0B9'}}
                onValueChange={(value) => props.setSelected(value)}
                items={getItems(items)}
            />: null
        }
        </>
    )
}
