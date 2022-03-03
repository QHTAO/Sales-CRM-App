import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Icon = ({name, ...props}) => {
  const options = {
    size: 24,
    color: '#221F40',
    ...props,
  };

  switch (name) {
    case 'notifications':
      return <Ionicons name={'ios-notifications-outline'} {...options} />;
    default:
      return null;
  }
};

export default Icon;
