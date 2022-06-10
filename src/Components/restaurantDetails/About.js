import { View, Text, Image, SafeAreaView } from 'react-native'
import React from 'react'

const About = () => {
    return (
        <View style={{ backgroundColor: 'white', marginTop: 25, }}>
            <AboutImage />
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 25, fontWeight: "900" }}>FarmHouse Kitchen Thai Cusine</Text>
            </View>
        </View>
    )
}
export default About

const AboutImage = () => (
    <Image source={require('../../../assets/images/bg2.jpg')}
        style={{ width: '100%', height: 200 }}
    />
)