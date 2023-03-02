import { View, Text, StyleSheet, Dimensions, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const { width, height } = Dimensions.get('screen');
export default function KeyCal({
    handleClick,
    setvalues,
    values
}) {
    return (
        <View style={styles.container}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                <View style={{ justifyContent: 'space-between', width: '75%' }} >
                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginTop: 5, }}>
                        <View style={{ justifyContent: "space-between", height: height / 2, padding: 10 }}>
                            {/* <Text style={{ fontSize: 30, color: "white", padding: 10 }} onPress={() => setvalues(0)}>C</Text> */}
                            <Icon style={{ fontSize: 30, color: "white", padding: 10 }} name="backspace-outline" onPress={() => {
                                if (values.length >= 0) {
                                    console.log('click')
                                    setvalues(values.slice(0, values.length - 1));
                                } else {
                                    console.log(values.length)
                                }
                            }} />
                            <TouchableOpacity onPress={() =>handleClick('7')}>
                                <Text style={{ fontSize: 30, color: "white", padding: 10 }} >7</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleClick('4')}>
                                <Text style={{ fontSize: 30, color: "white", padding: 10 }} >4</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleClick('1')}>
                                <Text style={{ fontSize: 30, color: "white", padding: 10 }} >1</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleClick('.')}>
                                <Text style={{ fontSize: 30, color: "white", padding: 10 }} >.</Text>
                            </TouchableOpacity>

                        </View>

                        <View style={{ justifyContent: "space-between", height: height / 2, padding: 10 }}>
                            <TouchableOpacity onPress={() => setvalues('')}>
                                <Text style={{ fontSize: 30, color: "white", padding: 10 }} >C</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleClick('8')}>
                                <Text style={{ fontSize: 30, color: "white", padding: 10 }} >8</Text>

                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleClick('5')}>
                                <Text style={{ fontSize: 30, color: "white", padding: 10 }} >5</Text>

                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleClick('2')}>
                                <Text style={{ fontSize: 30, color: "white", padding: 10 }} >2</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleClick('0')}>
                                <Text style={{ fontSize: 30, color: "white", padding: 10 }} >0</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ justifyContent: "space-between", height: height / 2, padding: 10 }}>
                            <TouchableOpacity onPress={() => handleClick('%')}>
                                <Text style={{ fontSize: 30, color: "white", padding: 10 }} >%</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => handleClick('9')}>
                                <Text style={{ fontSize: 30, color: "white", padding: 10 }} >9</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleClick('6')}>
                                <Text style={{ fontSize: 30, color: "white", padding: 10 }} >6</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleClick('3')}>
                                <Text style={{ fontSize: 30, color: "white", padding: 10 }} >3</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setvalues('')}>
                                <Text style={{ fontSize: 30, color: "white", padding: 10 }} >00</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ justifyContent: "space-between", margin: 10, padding: 10, position: 'relative', borderRadius: 100, backgroundColor: "#191825" }}>
                    <TouchableOpacity onPress={() => handleClick('/')}>
                        <Text style={{ fontSize: 30, color: "white", padding: 10 }} >/</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleClick('*')}>
                        <Text style={{ fontSize: 30, color: "white", padding: 10 }} >X</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleClick('-')}>
                        <Text style={{ fontSize: 30, color: "white", padding: 10 }} >-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleClick('+')}>
                        <Text style={{ fontSize: 30, color: "white", padding: 10 }} >+</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 30, color: "white", padding: 10 }} ></Text>

                    <View style={{ position: 'absolute', bottom: 0, backgroundColor: "red", borderRadius: 200 }}>
                        <Text style={{ fontSize: 30, color: "white", width: 58, height: 58, textAlign: 'center', paddingTop: 5 }} onPress={() => {
                            try {
                                const value = eval(values)
                                console.log(typeof value);
                                setvalues(String(value))
                            } catch (err) {
                                Alert.alert("Input is not valid")
                            }
                        }}>=</Text>

                    </View>
                </View>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2E3840',
        paddingBottom: 100

    }
})