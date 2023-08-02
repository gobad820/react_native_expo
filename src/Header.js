import React from "react";
import {Icon} from "./Icon";
import {Text, View} from "react-native";

export const Header = () => {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10}}>
            <Text style={{fontSize: 22, fontWeight: 'bold'}}>친구</Text>
            <View style={{flexDirection: 'row',}}>
                <Icon name={"search-outline"} />
                <Icon name={"person-add-outline"} />
                <Icon name={"md-musical-note-outline"} />
                <Icon name={"settings-outline"} />
            </View>
        </View>
    )
}
