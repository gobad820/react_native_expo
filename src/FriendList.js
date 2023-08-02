import React from 'react';
import { ScrollView, View } from 'react-native';
import {Margin} from './Margin';
import Profile from './Profile';


export default (props) => {
    return (
        <ScrollView showsVerticalScrollIndicator={true} contentContainerStyle={{ paddingBottom: 'bottomSpace' }}>
            {props.data.map((item, index) => (
                    <View key={index}>
                        <Profile
                            uri={item.uri}
                            name={item.name}
                            introduction={item.introduction}
                        />
                        <Margin height={13} />
                    </View>
                )
            )}

        </ScrollView>
    )};