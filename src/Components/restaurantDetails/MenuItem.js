import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from "@rneui/themed";
import BouncyCheckbox from 'react-native-bouncy-checkbox';

//🔥 code for styles 

const styles = StyleSheet.create({
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 15
    },
    dishTitle: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 5
    },
    menuInfo: {
        width: 210,
        justifyContent: 'space-evenly'
    },
    menuImage: {
        height: 100,
        width: 100,
        borderRadius: 15
    },
    price: {
        marginTop: 5,
        fontWeight: '400',
        fontSize: 17
    }
})

const MenuItem = ({ foods }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {
                foods.map((food, index) => (
                    <View key={index} >
                        <View style={styles.menuItem}>
                            <BouncyCheckbox />
                            <View style={styles.menuInfo} >
                                <Text style={styles.dishTitle}>{food.title}</Text>
                                <Text>{food.description}</Text>
                                <Text style={styles.price}>{food.price}</Text>
                            </View>
                            <View>
                                <Image
                                    source={{ uri: food.image }}
                                    style={styles.menuImage}
                                />
                            </View>
                        </View>
                        <Divider width={0.5} />
                    </View>

                ))
            }
        </ScrollView>
    )
}

export default MenuItem