/* eslint-disable react-native/no-inline-styles */
import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({label, variant = 'primary'}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: variant === 'primary' ? 'white' : 'grey',
        paddingHorizontal: 15,
        paddingVertical: 10,
        alignSelf: 'flex-start',
        borderRadius: 10,
      }}>
      <Text
        style={{
          fontWeight: '600',
          color: variant === 'primary' ? 'black' : 'white',
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
