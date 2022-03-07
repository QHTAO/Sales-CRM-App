import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import tw from '../../libs/tailwind';
const Contianer = ({children}) => {
  return (
    <SafeAreaView style={tw`flex-1`}>
      <ScrollView contentContainerStyle={tw`flex-grow px-6`}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Contianer;
