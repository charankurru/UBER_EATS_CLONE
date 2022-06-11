import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

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
    return (
        <View style={styles.buttonPosition}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.btnText}>View cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ViewCart