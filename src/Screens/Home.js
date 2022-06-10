import { View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import HeaderTabs from '../Components/home/HeaderTabs'
import SearchBar from '../Components/home/SearchBar'
import Categories from '../Components/home/Categories'
import RestaurantItem from '../Components/home/RestaurantItem'
import BottomTabs from '../Components/home/BottomTabs'

const Home = () => {
    return (
        <SafeAreaView style={{ backgroundColor: '#eee', flex: 1 }}>
            <View style={{ backgroundColor: 'white', padding: 15 }}>
                <HeaderTabs />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItem />
                <RestaurantItem />
                <RestaurantItem />
            </ScrollView>
            <BottomTabs />
        </SafeAreaView>
    )
}

export default Home