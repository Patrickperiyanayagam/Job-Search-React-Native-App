
import React from 'react';
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, SIZES } from '../../../constants';
import useFetch from '../../../hook/useFetch';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import styles from './popularjobs.style';
const Popularjobs = () => {
  const {data,isLoading,error} = useFetch
  ('search',{
    query:'React Developer',
    num_pages:1
  })

  // console.log(data)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
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
          <FlatList
          data={data}
          renderItem={({item})=>(

              <PopularJobCard item={item}/>
          )}
          keyExtractor={item=>item?.job_id}
          contentContainerStyle={{columnGap:SIZES.medium}}
          horizontal
          />
        )}
      </View>
    </View>
  )
}

export default Popularjobs