import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import tw from '../../libs/tailwind';

const Header = ({title}) => {
  return (
    <View style={tw`bg-w pt-5 pb-1 fle flex-row justify-between `}>
      <Text style={tw`text-3xl text-black font-urbanistBold `}>{title}</Text>
      <TouchableOpacity
        style={tw`w-10 h-10 rounded-xl bg-white shadow-md flex flex-row justify-center items-center `}>
        <Ionicons name="notifications-outline" size={24} color="#221F40" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
