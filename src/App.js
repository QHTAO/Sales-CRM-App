import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import tw from './libs/tailwind';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from './components/Icon';

import LinearGradient from 'react-native-linear-gradient';

const App = () => {
  return (
    <SafeAreaView style={tw`flex-1`}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0.7, y: 0.8}}
          locations={[0, 0.2, 1]}
          colors={['#FFFFFF', '#EDF1FA', '#DEE5F9']}
          style={tw`flex-1 px-6`}>
          {/* Header */}
          <View style={tw`bg-w py-6 fle flex-row justify-between`}>
            <Text style={tw`text-2xl text-black font-urbanist `}>Home</Text>
            <TouchableOpacity
              style={tw`w-10 h-10 rounded-lg bg-white flex flex-row justify-center items-center `}>
              <Ionicons
                name="notifications-outline"
                size={24}
                color="#221F40"
              />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
