import React from "react";
import {StyleSheet, Text, View} from "react-native";
import styled from "styled-components/native";

const StyledMargin = styled.View`
  height: ${(props)=>props.height}px;
  width: 100%;
  background-color: white;
`
export const Margin = ({height}) => { // 구조 분해 할당
    return (
        <StyledMargin height={height}/>
    )
}

const TextStyled = styled.Text`
font-size: 16px;
`;

const test = () => {
  return(
      <View>
          <Text style={{fontSize:16,}}>12345</Text>
          <Text style={styles.Text}>8765</Text>
          <TextStyled>8765</TextStyled>
      </View>
  )
}

const styles = StyleSheet.create({
    Text:{
        fontSize:20,
    }
})