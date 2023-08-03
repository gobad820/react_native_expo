import React from 'react';
import {ScrollView, View} from 'react-native';
import {Margin} from './Margin';
import Profile from './Profile';
import {getBottomSpace} from "react-native-iphone-x-helper";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

const bottomSpace = getBottomSpace()
export default (props) => {
    return props.isOpened ? (
        <ScrollView showsVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingBottom: bottomSpace}}>
            {props.data.map((item, index) => {
                    return (<View key={index}>
                        <Profile
                            uri={item.uri}
                            name={item.name}
                            introduction={item.introduction}
                        />
                        <Margin height={13}/>
                    </View>)
                }
            )}

        </ScrollView>) :
        <View
        style={{paddingBottom:bottomSpace}}>

        </View>;
};