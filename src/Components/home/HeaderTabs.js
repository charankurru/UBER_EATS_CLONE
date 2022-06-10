import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const HeaderTabs = () => {
    const [active, setActive] = React.useState("Delivery")
    return (
        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 12 }}>
            <HeaderButton text="Delivery" active={active} setActive={setActive} />
            <HeaderButton text="Pickup" active={active} setActive={setActive} />
        </View>
    )
}
export default HeaderTabs

const HeaderButton = (props) => (
    <TouchableOpacity
        onPress={() => props.setActive(props.text)}
        style={{
            backgroundColor: props.active === props.text ? 'black' : 'white',
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 30,
        }}
    >
        <Text style={{ color: props.active === props.text ? 'white' : 'black', fontSize: 15, fontWeight: '900' }}>{props.text}</Text>
    </TouchableOpacity>
)