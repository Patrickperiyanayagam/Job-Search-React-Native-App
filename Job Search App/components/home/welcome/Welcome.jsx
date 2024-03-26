import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SIZES, icons } from '../../../constants';
import styles from './welcome.style';

const jobTypes = ["Full-time","Part-time","Contractor"];

const Welcome = () => {
  const [text,settext] = useState('')
  const [searchTerm,setsearchTerm] = useState('');
  const [activeJobType,setactiveJobType] = useState('Full-time')
  const navigation = useNavigation();
  const callfun = ()=>{
    
  }
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Patrick!!!</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={setsearchTerm}
            placeholder='What are you looking for?'/>
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={()=>{navigation.navigate("jobsearch",{search:searchTerm})}}>
          <Image
          source={icons.search}
          resizeMode='contain'
          style={styles.searchBtnImage}/>
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({item})=>(
            <TouchableOpacity
            style={styles.tab(activeJobType,item)}
            onPress={()=>{
              setactiveJobType(item),
              navigation.navigate("jobsearch",{search:activeJobType})
              
            }}
            >
              {/* <TouchableOpacity onPress={}> */}

              <Text style={styles.tabText(activeJobType,item)}>{item}</Text>
              {/* </TouchableOpacity> */}
            </TouchableOpacity>
  )}
          keyExtractor={item=>item}
          contentContainerStyle={{columnGap:SIZES.small}}
          horizontal
        />

      </View>
    </View>
  )
}

export default Welcome