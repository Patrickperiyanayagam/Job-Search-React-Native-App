import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../../constants';
import useFetch from '../../../hook/useFetch';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';
import styles from './nearbyjobs.style';
const NearbyJobs = () => {
  const {data,isLoading,error} = useFetch
  ('search',{
    query:'React Developer',
    num_pages:1
  })

  // console.log(data)
  const arr = [1,2,3,4,5,6,7,8,9]
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' colors={COLORS.primary} />
        ):error?(
          <Text>Something went wrong</Text>
        ):(
          data.map((job)=>(
            <NearbyJobCard
              job={job}
              key={`nearby-job-${job?.job_id}`}
              handleNavigate={()=>{}}
            />
          ))
        )}
      </View>
    </View>
  )
}

export default NearbyJobs