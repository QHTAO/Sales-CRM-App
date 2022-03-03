import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import tw from './libs/tailwind';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Icon from './components/Icon';

const App = () => {
  return (
    <SafeAreaView>
      <Icon name="notifications" size={40} />
      <View style={[tw`bg-black`, {paddingVertical: 24}]}>
        <Text style={tw`text-2xl text-white font-urbanist `}>Home</Text>
      </View>

      <View style={tw`py-6 bg-slate-500`}>
        <Text style={tw`text-2xl text-black font-urbanist `}>Home</Text>
      </View>

      <Text style={{fontSize: 24}}>Home</Text>
    </SafeAreaView>
  );
};

export default App;
