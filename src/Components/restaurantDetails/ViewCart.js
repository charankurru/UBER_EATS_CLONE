import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native'
import React from 'react'
import { useSelector } from "react-redux";
import OrderItem from './OrderItem'


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
    },
    modalContainer: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0,0,0,0.7)",
    },

    modalCheckoutContainer: {
        backgroundColor: "white",
        padding: 16,
        height: 500,
        borderWidth: 1,
    },

    restaurantName: {
        textAlign: "center",
        fontWeight: "600",
        fontSize: 18,
        marginBottom: 10,
    },

    subtotalContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 15,
    },

    subtotalText: {
        textAlign: "left",
        fontWeight: "600",
        fontSize: 15,
        marginBottom: 10,
    },
})

const ViewCart = ({ navigation }) => {

    const [modalVisible, setModalVisible] = React.useState(false)

    const cartItems = useSelector(
        (state) => state.cartReducer.selectedItems.items
    )
    const restaurantName = useSelector(
        (state) => state.cartReducer.selectedItems.restaurantName
    )
    let totalPrice = 0
    cartItems.forEach((item) => {
        totalPrice += Number(item.price.split('$')[1])
    })

    const CheckoutModalContent = () => {
        return (

            <View style={styles.modalContainer}>
                <View style={styles.modalCheckoutContainer}>

                    {/* restaurant Name */}
                    <Text style={styles.restaurantName}>{restaurantName}</Text>

                    {/* Ordering food items list w.r.t prices */}
                    {cartItems.map((item, index) => (
                        <OrderItem key={index} item={item} />
                    ))}

                    {/* Total bill Amount */}
                    <View style={styles.subtotalContainer}>
                        <Text style={styles.subtotalText}>Subtotal</Text>
                        <Text>{totalPrice} $</Text>
                    </View>

                    {/* Chcekout button with total price in it */}
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "center"
                    }}>
                        <TouchableOpacity
                            style={{
                                marginTop: 20,
                                backgroundColor: "black",
                                alignItems: "center",
                                padding: 13,
                                borderRadius: 30,
                                width: 300,
                                position: "relative",
                            }}
                            onPress={() => {
                                navigation.navigate('OrderCompleted')
                                setModalVisible(false)
                            }}
                        >
                            <Text style={{ color: "white", fontSize: 20 }}>Checkout</Text>
                            <Text
                                style={{
                                    position: "absolute",
                                    right: 20,
                                    color: "white",
                                    fontSize: 15,
                                    top: 17,
                                }}
                            >
                                {totalPrice} $
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <>
            <Modal
                animationType="slide"
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                {CheckoutModalContent()}
            </Modal>
            <View style={styles.buttonPosition}>
                <View style={styles.container}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => setModalVisible(true)}
                    >
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
        </>
    )
}

export default ViewCart