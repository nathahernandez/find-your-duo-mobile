import { StyleSheet } from "react-native";
import styled from 'styled-components/native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alginItems: 'center'
    },
})

export const ContentList = styled.FlatList`
    padding-left: 32px;
    padding-right: 64px;
`;
export const ImageLogo = styled.Image`
    width: 213.78px;
    height: 120px;
    margin-top: 120px;
    margin-left: 81px;
`;