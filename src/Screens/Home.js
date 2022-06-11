import { View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import HeaderTabs from '../Components/home/HeaderTabs'
import SearchBar from '../Components/home/SearchBar'
import Categories from '../Components/home/Categories'
import RestaurantItems from '../Components/home/RestaurantItems'
import BottomTabs from '../Components/home/BottomTabs'

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={{ backgroundColor: '#eee', flex: 1 }}>
            <View style={{ backgroundColor: 'white', padding: 15 }}>
                <HeaderTabs />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems navigation={navigation} />
            </ScrollView>
            <BottomTabs />
        </SafeAreaView>
    )
}

export default Home