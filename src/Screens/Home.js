import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import HeaderTabs from '../Components/HeaderTabs'
import SearchBar from '../Components/SearchBar'
import Categories from '../Components/Categories'
const Home = () => {
    return (
        <SafeAreaView>
            <View style={{ backgroundColor: 'white', padding: 15 }}>
                <HeaderTabs />
                <SearchBar />
            </View>
            <Categories />
        </SafeAreaView>
    )
}

export default Home