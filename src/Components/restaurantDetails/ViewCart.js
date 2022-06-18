import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from "react-redux";


const styles = StyleSheet.create({
    buttonPosition: {
        flex: 1,
        position: 'absolute',
        bottom: 20,
        zIndex: 999,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {

        width: '80%',
        backgroundColor: 'black',
        fontColor: 'white',
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
    },
    btnText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
    }
})

const ViewCart = () => {
    const cartItems = useSelector(
        (state) => state.cartReducer.selectedItems.items
    );
    console.log(cartItems)
    let totalPrice = 0
    cartItems.forEach((item) => {
        totalPrice += Number(item.price.split('$')[1])
    })
    return (
        <View style={styles.buttonPosition}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.btnText}>View cart</Text>
                    <Text style={{
                        top: 15,
                        right: 20,
                        position: 'absolute',
                        color: 'white',
                        fontSize: 15
                    }}>
                        {totalPrice} $
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ViewCart