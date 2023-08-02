import {myProfile} from "./data";
import React from "react";
import {Image, SafeAreaView, Text, View} from "react-native";
import {withDevTools} from "expo/build/launch/withDevTools";

export default (props) => {
    return (<View
        style={{flexDirection: 'row', width: '100%', marginLeft: 5, marginTop: 5, marginBottom: 5}}>
        <Image
            source={{uri: props.uri}}
            style={{width: 70, height: 70, borderRadius: 20}}/>
        <View
            style={{flexDirection: 'column', marginLeft: 10, justifyContent: 'center', width: '100%',}}>
            <Text
                style={{fontSize: 16, fontWeight: 'bold'}}>
                {props.name}
            </Text>
            <Text
                style={{fontSize: 12, color: 'grey'}}>
                {props.introduction}
            </Text>
        </View>
    </View>)
}