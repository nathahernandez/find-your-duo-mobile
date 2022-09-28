import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'

export const ViewHeader = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-right: 32px;
    padding-left: 32px;
    margin-top: 28px;
`;
export const ImageLogo = styled.Image`
    width: 72px;
    height: 40px;
`;
export const ViewAux = styled.View`
    width: 44px;
    height: 44px;
`;
export const GameImage = styled.Image`
    width: 311px;
    height: 160px;
    margin-top: 32px;
    margin-bottom: 32px;
    border-radius: 8px;
`;
export const ContainerList = styled.FlatList`
    width: 100%;
`;
export const GoBack = styled.TouchableOpacity`
    padding: 12px;
`;
export const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',    
    },
    containerList: {
        paddingLeft: 32,
        paddingRight: 64,
        alignItems: 'flex-start'
    }
});