import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import tw from '../../libs/tailwind';
const Title = ({styel, bodyText, rightText}) => {
  return (
    <View style={[tw`fle flex-row justify-between mb-4`, styel]}>
      <Text style={tw`text-lg text-black font-urbanist `}>{bodyText}</Text>
      {rightText && (
        <TouchableOpacity style={tw`flex-col justify-center`}>
          <Text style={tw`text-base text-gray-400 font-urbanist`}>
            {rightText}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
export default Title;
