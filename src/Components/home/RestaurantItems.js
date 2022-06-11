import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const localRestaurants = [
    {
        name: "Beachside Bar",
        image_url:
            "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
    },
    {
        name: "Benihana",
        image_url:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 3.7,
    },
    {
        name: "India's Grill",
        image_url:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        categories: ["Indian", "Bar"],
        price: "$$",
        reviews: 700,
        rating: 4.9,
    },
];

const RestaurantItems = ({ navigation }) => {
    return (
        <>
            {localRestaurants.map((item, index) => (
                <TouchableOpacity key={index} activeOpacity={0.8}
                    onPress=
                    {() => navigation.navigate('RestaurantInfo', item)}>
                    <View style={{ padding: 10, backgroundColor: 'white', marginTop: 7 }}>
                        <RestaurantImage image={item.image_url} />
                        <RestaurantInfo restaurant={item} />
                    </View>
                </TouchableOpacity>
            ))}
        </>
    )
}
export default RestaurantItems

const RestaurantImage = ({ image }) => (
    <>
        <Image source={{ uri: image }} style={{ width: '100%', height: 180, borderRadius: 10 }} />
        <TouchableOpacity style={{ position: 'absolute', right: 20, top: 17 }}>
            <MaterialCommunityIcons name="heart-outline" size={30} color="white" />
        </TouchableOpacity>
    </>
)

const RestaurantInfo = ({ restaurant }) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
        <View>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{restaurant.name}</Text>
            <Text style={{ fontSize: 13, color: 'gray' }}>30-45  min</Text>
        </View>
        <View style={{ backgroundColor: '#eee', height: 35, width: 35, borderRadius: 30, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{restaurant.rating}</Text>
        </View>
    </View>
)