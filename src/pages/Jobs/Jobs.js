import React from 'react';
import { View, Text,FlatList, Button, TouchableOpacity, TouchableOpacityBase } from 'react-native';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from "./Jobs.style";
import Jobcard from '../../components/jobcard/jobcard';
import { SafeAreaView } from 'react-native';
import useFetch from '../../hooks/useFetch';
import { useState } from 'react';
import Details from '../Details/Details';
import { ScrollView } from 'react-native';


const Jobs=({navigation})=>{

  const handleSelect= id=>{
    navigation.navigate('Details',{id});
  };

    const URL="https://www.themuse.com/api/public/jobs?page=12";
    const {data} = useFetch(URL);

    const renderJob = ({ item })=> (
 <Jobcard job={item} onSelect={()=>{
  handleSelect(item.id)}}/>
);

    return(
        <SafeAreaView>
              <View style={{alignItems:"center" ,flexDirection:"row"}}>
              <Icon name='star' size={60} color={"black"} />
              <Icon name='star' size={60} color={"black"} />
              </View>
            <FlatList
            data={data.results}
            renderItem={renderJob}
          />  
        </SafeAreaView>
    )
};

export default Jobs;