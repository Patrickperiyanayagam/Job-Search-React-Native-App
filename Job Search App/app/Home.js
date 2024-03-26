import { SafeAreaView, ScrollView, View } from 'react-native';
import { Nearbyjobs, Popularjobs, Welcome } from '../components';
import { COLORS, SIZES } from '../constants';

const Home = ()=>{
    return(
        <SafeAreaView style={{flex:1,backgroundColor:COLORS.lightWhite}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flex:1,padding:SIZES.medium}}>
                    <Welcome/>
                    <Popularjobs/>
                    <Nearbyjobs/>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;