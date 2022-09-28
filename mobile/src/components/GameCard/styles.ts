import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';
import styled from 'styled-components/native'

export const TouchContainer = styled.TouchableOpacity`
    display: flex;
    flex: 0;
    align-items: center;
    margin-right: 24px;
`;
export const CardBgImage = styled.ImageBackground`
    width: 240.24px;
    height: 320px;
    justify-content: flex-end;
    border-radius: 8px;
    overflow: hidden;
`;
export const TextName = styled.Text`
    color: ${THEME.COLORS.TEXT};
    font-size: ${THEME.FONT_SIZE.MD};
    font-family: ${THEME.FONT_FAMILY.BOLD};
`;
export const TextAds = styled.Text`
    color: ${THEME.COLORS.CAPTION_300};
    font-size: ${THEME.FONT_SIZE.MD};
    font-family: ${THEME.FONT_FAMILY.REGULAR};
`;

export const styles = StyleSheet.create({
    footer: {
        width: '100%',
        height: 120,
        padding: 16,
        justifyContent: 'flex-end'
    }
})