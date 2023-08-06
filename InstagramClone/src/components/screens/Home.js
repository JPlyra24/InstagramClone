import React from 'react';
import {View, Text, StatusBar, ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Stories from '../screenComponents/Stories';
import Post from '../screenComponents/Post';

const Home = () => {
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <StatusBar backgroundColor="white" barStyle="dark-content" animated={true}/>
      <View style={{justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 15}}>
        <Text style={{fontFamily: 'lobster', fontSize: 25, fontWeight: '500'}}>
          Instagram
        </Text>
        <Feather name="navigation" style={{fontSize: 24}} />
      </View>

      <ScrollView>
        <Stories />
        <Post />
        <View
          style={{justifyContent: 'center', alignItems: 'center', padding: 20}}>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;