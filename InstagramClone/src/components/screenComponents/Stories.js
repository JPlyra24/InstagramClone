import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

const Stories = () => {
  const navigation = useNavigation();

  const storyInfo = [
    {
      id: 1,
      name: 'Your Story',
      image: require('../storage/images/perfil.jpg'),
    },
    {
      id: 0,
      name: 'Ahri KDA',
      image: require('../storage/images/perfil2.jpg'),
    },
    {
      id: 0,
      name: 'Basic Ahri',
      image: require('../storage/images/perfil3.jpg'),
    },
    {
      id: 0,
      name: 'Ahri Blossom',
      image: require('../storage/images/perfil4.jpg'),
    },
    ,
    {
      id: 0,
      name: 'Ahri Star G.',
      image: require('../storage/images/perfil5.jpg'),
    },
    ,
    {
      id: 0,
      name: 'Ahri Coven',
      image: require('../storage/images/perfil6.jpg'),
    },
  ];

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{paddingVertical: 20}}>
        {storyInfo.map((data, index) => {
            return (
            <TouchableOpacity key={index} onPress={() => navigation.push('Status', {name: data.name, image: data.image,})}>
                <View style={{
                    flexDirection: 'column', 
                    paddingHorizontal: 8, 
                    position: 'relative'
                    }}>
                {data.id == 1 ? (
                    <View style={{
                        position: 'absolute', 
                        bottom: 15,
                        right: 10, 
                        zIndex: 1
                        }}>
                    <Entypo
                        name="circle-with-plus"
                        style={{
                        fontSize: 20,
                        color: 'blue',
                        backgroundColor: 'white',
                        borderRadius: 100,
                        }}
                    />
                    </View>
                ) : null}
                <View
                    style={{
                    width: 68,
                    height: 68,
                    backgroundColor: 'white',
                    borderWidth: 1.8,
                    borderRadius: 100,
                    borderColor: '#c13584',
                    justifyContent: 'center',
                    alignItems: 'center',
                    }}>
                    <Image
                    source={data.image}
                    style={{
                        resizeMode: 'cover',
                        width: '92%',
                        height: '92%',
                        borderRadius: 100,
                        backgroundColor: 'orange',
                    }}
                    />
                </View>
                <Text
                    style={{
                    textAlign: 'center',
                    fontSize: 10,
                    opacity: data.id == 0 ? 1 : 0.5,
                    }}>
                    {data.name}
                </Text>
                </View>
            </TouchableOpacity>
            );
        })}
        </ScrollView>
    );
    };

export default Stories;