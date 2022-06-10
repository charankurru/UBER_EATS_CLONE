import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'

const items = [
    {
        image: require("../../assets/images/shopping-bag.png"),
        text: "Pick-up"
    },
    {
        image: require("../../assets/images/soft-drink.png"),
        text: "Soft Drinks"
    },
    {
        image: require("../../assets/images/bread.png"),
        text: "Bakery Items"
    },
    {
        image: require("../../assets/images/fast-food.png"),
        text: "Fast Foods"
    },
    {
        image: require("../../assets/images/deals.png"),
        text: "Deals"
    }
]

const Categories = () => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style=
            {{
                flexDirection: 'row',
                paddingHorizontal: 6,
                marginTop: 5,
                backgroundColor: 'white',
                paddingVertical: 10
            }}>
            {items.map((item, index) => (
                <View
                    key={index}
                    style={{ alignItems: 'center', marginRight: 25 }}
                >
                    <Image
                        source={item.image}
                        style={{
                            width: 50,
                            height: 45,
                            resizeMode: "contain"
                        }}
                    />
                    <Text style={{ fontSize: 13, fontWeight: "900" }}>{item.text}</Text>
                </View>
            ))}
        </ScrollView>
    )
}

export default Categories