import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
// https://ionic.io/ionicons
const Icon = ({name, ...props}) => {
  const options = {
    size: 24,
    color: '#221F40',
    ...props,
  };

  switch (name) {
    case 'notifications':
      return <Ionicons name={'notifications-outline'} {...options} />;
    case 'mail':
      return <Ionicons name={'mail-outline'} {...options} />;
    case 'call':
      return <Ionicons name={'call-outline'} {...options} />;
    default:
      return null;
  }
};

export default Icon;
