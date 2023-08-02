import React from "react";
import { Ionicons } from '@expo/vector-icons';

export const Icon = (props) => {
    return(
        <Ionicons style={{marginHorizontal:5}} name={props.name} size={24} color="black" />
    )
}