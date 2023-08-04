import {View} from "react-native";
import styled from "styled-components/native";

const StyledDivision = styled.View`
  width: 100%;
  height: 0.5px;
  background-color: lightgrey;
`

// 홑따옴표가 필요가 없다.

export const Division = () => {
    return (
        <StyledDivision />
    )
};