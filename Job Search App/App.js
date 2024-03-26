
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import Home from './app/Home';
import JobDetails from './app/JobDetails';
import JobSearch from './app/JobSearch';
import { ScreenHeaderBtn } from './components';
import { COLORS, icons, images } from './constants';

const Stack = createNativeStackNavigator();

export default function App() {
  // useEffect(()=>{
  //       const getFonts = ()=> Font.loadAsync({
  //         DMBold:require('./asseets/fonts/DMSans-Bold.ttf'),
  //         DMMedium:require('./asseets/fonts/DMSans-Medium.ttf'),
  //         DMRegular:require('./asseets/fonts/DMSans-Regular.ttf')
  //       })
    
  //   })

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home}
          options={{
            headerStyle:{backgroundColor:COLORS.lightWhite},
            headerShadowVisible:false,
            headerLeft:()=>(
              <ScreenHeaderBtn iconUrl={icons.menu} dimensions="60%"/>
            ),
            headerRight:()=>(
              <ScreenHeaderBtn iconUrl={images.profile} dimensions="100%"/>
            ),
            headerTitle:""
          }}/>
          <Stack.Screen name='jobDetail' component={JobDetails}
          options={{
            headerStyle:{backgroundColor:COLORS.lightWhite},
            headerShadowVisible:false,
            headerBackVisible:true,
            headerRight:()=>(
              <ScreenHeaderBtn
              iconUrl={icons.share}
              dimension="60%"
              />
            ),
            headerTitle:""
          }}
          />
          <Stack.Screen name='jobsearch' component={JobSearch}
          options={{
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: false,
            headerTitle: "",
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
