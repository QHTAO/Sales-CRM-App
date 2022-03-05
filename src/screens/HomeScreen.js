import React from 'react';
import {View, Text} from 'react-native';
import tw from '../libs/tailwind';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Contianer from '../components/Contianer';
import Header from '../components/Header';
import SalesStatsChart from '../components/SalesStatsChart';
import LinearGradient from 'react-native-linear-gradient';
import {tasksData} from '../constants/data';
import Title from '../components/Title';
const HomeScreen = () => {
  return (
    <Contianer>
      <LinearGradient
        start={{x: 0, y: 0.2}}
        end={{x: 0.8, y: 1}}
        locations={[0, 0.3, 1]}
        colors={['#FFFFFF', '#F5F7FD', '#EAEEF9']}
        style={tw`flex-1 px-6`}>
        <Header title={'Home'} />
        <Text style={tw`text-lg text-black font-urbanist mb-5 `}>
          Hi, Jeffrey!
        </Text>
        <Title
          bodyText={'Here are your tasks for today'}
          rightText={'See all'}
        />

        {tasksData.map((item, index) => (
          <View
            style={tw`fle flex-row mb-4 bg-white shadow-md rounded-xl `}
            key={item.id}>
            <LinearGradient
              start={{x: 1, y: 0}}
              end={{x: 0.3, y: 1}}
              locations={[0, 1]}
              colors={item.colors}
              style={tw`rounded-xl h-13 w-13 flex flex-row justify-center items-center`}>
              <Ionicons name={item.icon} size={24} color="#FFFFFF" />
            </LinearGradient>
            <View style={tw`flex-col justify-center ml-4`}>
              <Text style={tw`text-md text-black font-urbanist`}>
                {item.title}
              </Text>
            </View>
          </View>
        ))}

        <SalesStatsChart />
      </LinearGradient>
    </Contianer>
  );
};

export default HomeScreen;
