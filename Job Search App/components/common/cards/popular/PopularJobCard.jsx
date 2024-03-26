import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { checkImageURL } from '../../../../utils';
import styles from './popularjobcard.style';

const PopularJobCard = ({item,selectedJob}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container(selectedJob,item)}
      onPress={()=>navigation.navigate("jobDetail",{value:item})} >
        <TouchableOpacity style={styles.logoContainer(selectedJob,item)}>
          <Image 
          source={{uri: checkImageURL(item.employer_logo)
          ? item.employer_logo
        :'https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/intro-your-partners-hero%402x.jpg'}}
          resizeMode='contain'
          style={styles.logoImage}/>

        </TouchableOpacity>
        <Text style={styles.companyName} numberOfLines={1}>{item.employer_name}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.jobName(selectedJob,item)} numberOfLines={1}>
            {item.job_title}
          </Text>
          <Text style={styles.location}>{item.job_country}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard