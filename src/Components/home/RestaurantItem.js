import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const RestaurantItem = () => {
    return (
        <TouchableOpacity activeOpacity={0.8}>
            <View style={{ padding: 10, backgroundColor: 'white', marginTop: 7 }}>
                <RestaurantImage />
                <RestaurantInfo />
            </View>
        </TouchableOpacity>
    )
}
export default RestaurantItem

const RestaurantImage = () => (
    <>
        <Image source={require('../../../assets/images/restaurantItemImge.jpg')} style={{ width: '100%', height: 180, borderRadius: 10 }} />
        <TouchableOpacity style={{ position: 'absolute', right: 20, top: 17 }}>
            <MaterialCommunityIcons name="heart-outline" size={30} color="white" />
        </TouchableOpacity>
    </>
)

const RestaurantInfo = () => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
        <View>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Farmhouse Kitchen Thai Cusine</Text>
            <Text style={{ fontSize: 13, color: 'gray' }}>30-45  min</Text>
        </View>
        <View style={{ backgroundColor: '#eee', height: 35, width: 35, borderRadius: 30, alignItems: 'center', justifyContent: 'center' }}>
            <Text>4.8</Text>
        </View>
    </View>
)