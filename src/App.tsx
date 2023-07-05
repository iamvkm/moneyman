/* eslint-disable react-native/no-inline-styles */
import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import Button from './components/Button';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="black" />
      <View
        style={{
          flex: 1,
          paddingVertical: 200,
          paddingHorizontal: 40,
          backgroundColor: 'black',
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: '700'}}>
          your top 3 spends this month are
        </Text>
        <View style={{marginTop: 30, flexDirection: 'row'}}>
          <Text style={{color: 'white', fontSize: 15, fontWeight: '700'}}>
            20,000
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 15,
              fontWeight: '700',
              marginLeft: 15,
            }}>
            groceries
          </Text>
        </View>
        <View style={{marginTop: 10, flexDirection: 'row'}}>
          <Text style={{color: 'white', fontSize: 15, fontWeight: '700'}}>
            30,000
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 15,
              fontWeight: '700',
              marginLeft: 15,
            }}>
            entertainment
          </Text>
        </View>
        <View style={{marginTop: 10, flexDirection: 'row'}}>
          <Text style={{color: 'white', fontSize: 15, fontWeight: '700'}}>
            25,000
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 15,
              fontWeight: '700',
              marginLeft: 15,
            }}>
            traveling
          </Text>
        </View>
        <View style={{marginTop: 25, flexDirection: 'row'}}>
          <Button label="add new spend" />
          <View style={{marginLeft: 20}}>
            <Button label="view all spends" variant="secondary" />
          </View>
        </View>
      </View>
    </>
  );
};

export default App;
