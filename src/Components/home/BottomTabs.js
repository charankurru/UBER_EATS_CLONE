import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const tabItems = [
    {
        text: "Home",
        icon: <Ionicons name="home" size={35} />
    },
    {
        text: "Browse",
        icon: <Ionicons name="search" size={35} />
    },
    {
        text: "Home",
        icon: <FontAwesome5 name="shopping-bag" size={35} />
    },
    {
        text: "Orders",
        icon: <Ionicons name="document" size={35} />
    },
    {
        text: "Home",
        icon: <FontAwesome5 name="user-alt" size={35} />
    }
]

const BottomTabs = () => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, backgroundColor: 'white' }}>
            {tabItems.map((item, index) => (
                <TouchableOpacity key={index} >
                    <View style={{ alignItems: 'center', color: '#eee' }}>
                        {item.icon}
                        <Text>{item.text}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default BottomTabs