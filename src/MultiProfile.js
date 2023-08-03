import {Text, TouchableOpacity, View} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import React from "react";
import Profile from "./Profile";
import {friendProfiles} from "./data";


export default (props) =>{
    return(
        <View style={{flexDirection:"column",}}>
            <View style={{flexDirection:"row",
                justifyContent:"space-between"}}>
                <Text style={{color:"grey"}}>내 멀티 프로필</Text>
            </View>
            <Profile name={"친구별로 다른 프로필을 설정해 보세요"}
                     uri={"https://static-00.iconduck.com/assets.00/profile-circle-icon-512x512-zxne30hp.png"}/>
        </View>
    )
}