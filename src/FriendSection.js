import React from "react";
import {View, Text,  TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default (props)=> {

    return(
        <View style={{flexDirection:"row",
            justifyContent:"space-between"}}>
            <Text style={{color:"grey"}}>친구{props.friendProfileLen}</Text>
            <TouchableOpacity onPress={props.onPressArrow}>
                <MaterialIcons name={
                    props.isOpened ? "keyboard-arrow-down" : "keyboard-arrow-up"}
                               size={24} color="grey" />
            </TouchableOpacity>

        </View>
    )
}