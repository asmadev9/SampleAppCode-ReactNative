import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import {Entypo} from '@expo/vector-icons'

const HeaderMenuButton = ({onPress, icon}) => {
    return (
        <TouchableOpacity onPress={onPress} style={{marginLeft: 12}}>
            <Entypo name={icon} color='#0C3C60' size={icon === 'grid' ? 32 : 38} />
        </TouchableOpacity>
    )
}

export default HeaderMenuButton
