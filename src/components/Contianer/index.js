import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
const Contianer = ({children}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>{children}</ScrollView>
    </SafeAreaView>
  );
};

export default Contianer;
