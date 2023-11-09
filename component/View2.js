import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { Pressable } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const View2 = () => {
    const nav = useNavigation()
    const rou = useRoute()
    const [job, setJob] = useState()
    return (
        <View>
            <View style={{ width: Dimensions.get('window').width, flexDirection: 'row-reverse', justifyContent: 'space-between', alignItems: 'center' }}>
                <Pressable style={{ marginLeft: 10 }} onPress={() => nav.goBack()}>
                    <Feather name="arrow-left" size={24} color="black" />
                </Pressable>
                <View style={{ flexDirection: 'row', marginRight: 10 }}>
                    <Image style={{ marginRight: 10, width: 50, height: 50, backgroundColor: 'black', borderRadius: 50 }} source={require('../assets/logo.png')} />
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Hi {rou.params?.name}</Text>
                        <Text style={{ fontSize: 15, color: '#9095A0' }}>Have agrate day a head</Text>
                    </View>
                </View>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 25, marginTop: 30, marginBottom: 40 }}>
                    ADD YOUR JOB
                </Text>
                <View style={{ marginVertical: 20, flexDirection: 'row', alignItems: 'center', width: 334, height: 44, borderRadius: 5, borderWidth: 1, borderColor: "#aaa" }}>
                    <MaterialCommunityIcons name="note-edit-outline" size={24} color="black" style={{ marginHorizontal: 10 }} />
                    <TextInput style={{}} placeholder='Input your job' value={job} onChangeText={setJob} />
                </View>
            </View>
            <Pressable onPress={() => nav.navigate('view1', { job: job })}>
                <View style={{ marginTop: 90, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: 190, height: 44, backgroundColor: 'cyan', alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                        <Text style={{ color: 'white',fontWeight:'bold' }}>FINISH  {'->'} </Text>
                    </View>
                </View>
            </Pressable>
            <View style={{ marginTop: 90, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('../assets/Image 95.png')} style={{ width: 150, height: 150, resizeMode: 'contain' }} />
            </View>
        </View>
    )
}

export default View2

const styles = StyleSheet.create({})
