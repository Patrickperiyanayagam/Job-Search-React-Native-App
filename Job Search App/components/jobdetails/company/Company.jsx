import React from 'react'
import { Image, Text, View } from 'react-native'
import { icons } from '../../../constants'
import { checkImageURL } from '../../../utils'
import styles from './company.style'

const Company = ({companyLogo,jobTitle,companyName,Location}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
        source={{uri:checkImageURL(companyLogo)
        ? companyLogo
      : 'https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/intro-your-partners-hero%402x.jpg'}}
      style={styles.logoImage}/>

      </View>
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>

      </View>
      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName}</Text>
          <View style={styles.locationBox}>
            <Image
            source={icons.location}
            resizeMode='contain'
            style={styles.locationImage}/>
            <Text style={styles.locationName}>{Location}</Text>
          </View>

      </View>
      
    </View>
  )
}

export default Company