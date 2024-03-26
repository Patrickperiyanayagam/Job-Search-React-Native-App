import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { checkImageURL } from '../../../../utils';
import styles from './nearbyjobcard.style';
const NearbyJobCard = ({job}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate("jobDetail",{value:job})} >
        <TouchableOpacity style={styles.logoContainer}>
          <Image
          source={{uri: checkImageURL(job.employer_logo)
          ? job.employer_logo
        :'https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/intro-your-partners-hero%402x.jpg'}}
          resizeMode='contain'
          style={styles.logoImage}/>

        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.jobName} numberOfLines={1}>
            {job.job_title}
          </Text>
          <Text style={styles.jobType}>{job.job_employment_type}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard