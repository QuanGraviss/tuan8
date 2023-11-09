import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { Image, Pressable, Text, TextInput, View } from "react-native"

const Home = () => {
    const nav = useNavigation()
    const [name,setName] = useState('')
    return(
        <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
            <View style={{alignItems:'center'}}>
                <Image style={{width:271,height:271}} source={require('../assets/Image 95.png')} />
            </View>
            <View style={{alignItems:'center'}}>
                <Text style={{color:'#8353E2',fontSize:24,fontWeight:'bold'}}>
                    MANAGE YOUR
                </Text>
                <Text style={{color:'#8353E2',fontSize:24,fontWeight:'bold'}}>
                    TASK
                </Text>
            </View>
            <View style={{marginTop:20,width:334,height:43,alignItems:'center',flexDirection:"row",borderWidth:1,borderRadius:10,marginLeft: 25}}>
                <Image style={{width:20,height:20}} source={require('../assets/gmail.png')}/>
                <TextInput  placeholder="enter your name" value={name} onChangeText={setName} />
            </View>
            <Pressable onPress={()=>nav.navigate('view1',{name:name})}>
                <View style={{marginTop:20,width:190,height:44,background:'#00BDD6',alignItems:'center',justifyContent: 'center',borderRadius:10}}>
                    <Text style={{fontSize:20,color:'white'}}>GET STARTED {'->'}</Text>
                </View>
            </Pressable>
        </View>
    )
}
export default Home