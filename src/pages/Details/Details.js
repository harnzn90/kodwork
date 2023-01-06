import React, { useState } from "react";
import { SafeAreaView,View,Text,TouchableOpacity, useWindowDimensions, ScrollView,Alert} from "react-native";
import styles from "./Details.style";
import Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import RenderHTML from "react-native-render-html";
import useFetch from "../../hooks/useFetch";
import { useDispatch} from "react-redux";


const Details =({route})=>{

    const URL="https://www.themuse.com/api/public/jobs";
    const {id} = route.params;
    const {data} = useFetch(`${URL}/${id}`);
    const {width} = useWindowDimensions();
    const [status, setStatus] = useState(false);
    const dispatch = useDispatch();
    

    const handleClick=()=>{
        if(status==false){
          setStatus(true);
          dispatch({type:'ADD_WORK', payload: {favoriteJob: data}})
          Alert.alert('Works','İş Favorilere Eklendi !')
        }else{
          
          Alert.alert('Works','İş Zaten Favoriler Listenizde Mevcut !')
        }
      }
    
    const handleSubmit = () => {
        Alert.alert("Thanks, Succesfully Submited!!!")
    }

   
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container1}>
                <Text style={styles.category}>{data.name}</Text>
            </View>
            <View style={styles.container2}>
                <Text style={{fontSize:20, color:"tomato",fontWeight:"bold",}}>Locations: </Text>
                <Text style={styles.location}>{data.locations && data.locations.length > 0 ? data.locations[0].name
                : 'Unknown Location'}</Text>
            </View>
            <View style={styles.container3}>
                <Text style={{fontSize:20, color:"tomato" ,fontWeight:"bold",}}>Job Level: </Text>
                <Text style={styles.level}>{data.levels && data.levels.length > 0 ? data.levels[0].name
                    : ''}</Text>

            </View>
            <View style={styles.container4}>
                <Text style={{fontSize:30,fontWeight:"bold",textAlign:"center"}}>Job Detail </Text>
                <ScrollView>
                <RenderHTML source={{html:`${data.contents}`}} contentWidth={width}></RenderHTML>
                </ScrollView>
              </View>
            <View style={styles.containerbtn}>
                <TouchableOpacity onPress={handleSubmit}>
                    <View style={{margin:5,flexDirection:"row" ,backgroundColor:"firebrick",borderRadius:20,paddingHorizontal:10}}>
                    <Icon name="login" color={"white"} size={30}/>
                    <Text style={{fontWeight:"bold",color:"white", fontSize:25,marginRight:20}}>Submit</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleClick}>
                    <View style={{margin:5,flexDirection:"row",backgroundColor:"firebrick",borderRadius:20,paddingHorizontal:10}}>
                   <Icon name="heart" color={"white"} size={30}/>
                    <Text style={{fontWeight:"bold",color:"white", fontSize:25,marginRight:20}}>Favorite Job</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Details;