import { AntDesign, Feather } from "@expo/vector-icons"
import { useNavigation, useRoute } from "@react-navigation/native"
import axios from "axios"
import { useEffect, useState } from "react"
import { Dimensions, Image, Pressable, Text, TextInput, View } from "react-native"

const View1 = () => {
    const nav = useNavigation()
    const rou = useRoute()
    const [data,setData] = useState([])
    useEffect(()=>{
        const getData = async()=>{
            const response = await axios.get('https://654cab4277200d6ba8593104.mockapi.io/job')
            console.log(response.data)
            if(rou.params?.job == null) {
                setData(response.data)
                console.log(data)
            }
            else{
                setData([...data,{id:data.length,job: rou.params?.job}])
                console.log(data)
            }
        }
        getData()
    },[rou.params?.job])
    return(
        <View style={{alignItems:'center',justifyContent:'center'}}>
            <View style={{width:Dimensions.get('window').width,flexDirection:'row',justifyContent: 'space-between',alignItems:'center'}}>
                <Pressable style={{marginLeft:10}} onPress={()=> nav.goBack()}>
                    <Feather name="arrow-left" size={24} color='black'/>
                </Pressable>
                <View style={{flexDirection:'row'}}>
                    <Image style={{width:45,height:45,marginRight:10,backgroundColor:'black'}} source={require('../assets/logo.png')} />
                    <View>
                        <Text style={{fontSize:20,fontWeight:'bold',}}>Hi{rou.params?.name}</Text>
                        <Text style={{fontSize:15,color:'#9095A0'}}>Have agrate day a head</Text>
                    </View>
                </View>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',borderWidth:1,borderRadius:3,width:334,height:44}}>
                <AntDesign name="search1" size={24} color='black' />
                <TextInput placeholder="search" />
            </View>
            <View style={{marginTop:50}}>
                {
                    data.map((item, index)=>(
                        <View key={index} style={{flexDirection:'row',justifyContent:'space-between',width:355,height:40,backgroundColor:'#9095A0',borderRadius:20,alignItems:'center',marginVertical:10}}>
                            <Feather name="check-square" size={24} color='green'></Feather>
                            <Text>{item.job}</Text>
                            <Feather name="edit" size={24} color='red'></Feather>
                        </View>

                    ))
                }
            </View>
            <Pressable onPress={()=>nav.navigate('view2')}>
                <View style={{backgroundColor:'cyan',borderRadius:100,alignItems:'center',justifyContent:'center',width:70,height:70}}>
                    <Text style={{fontSize:60,color:'white'}}>+</Text>
                </View>
            </Pressable>
        </View>
    )
}
export default View1