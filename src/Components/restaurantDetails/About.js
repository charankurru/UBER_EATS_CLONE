import { View, Text, Image, SafeAreaView } from 'react-native'
import React from 'react'

const About = ({ restaurantData }) => {
    return (
        <View style={{ backgroundColor: 'white', marginTop: 25, }}>
            <AboutImage image={restaurantData.image_url} />
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 25, fontWeight: "700", fontStyle: 'italic' }}>{restaurantData.name}</Text>
                <Text style={{ marginTop: 5 }}>Thai Comfort food 4* (2000+) ratings</Text>
            </View>
        </View>
    )
}
export default About

const AboutImage = ({ image }) => (
    <Image source={{ uri: image }}
        style={{ width: '100%', height: 200 }}
    />
)