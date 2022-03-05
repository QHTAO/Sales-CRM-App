import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import tw from '../../libs/tailwind';

const Title = ({bodyText, rightText}) => {
  return (
    <View style={tw`fle flex-row justify-between mb-4`}>
      <Text style={tw`text-lg text-black font-urbanist `}>{bodyText}</Text>
      <TouchableOpacity style={tw`flex-col justify-center`}>
        <Text style={tw`text-base text-gray-400 font-urbanist`}>
          {rightText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Title;
