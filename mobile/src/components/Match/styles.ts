import { THEME } from "../../theme"
import styled from "styled-components/native"

export const ViewContainer = styled.View`
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    background-color: ${THEME.COLORS.OVERLAY};
`;
export const ViewContent = styled.View`
    width: 311px;
    background-color: ${THEME.COLORS.SHAPE};
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const DiscordBox = styled.TouchableOpacity`
    width: 231px;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 11px;
    padding-bottom: 11px;
    border-radius: 4px;
    margin-top: 8px;
    margin-bottom: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${THEME.COLORS.BACKGROUND_800};
`;
export const DiscordText = styled.Text`
    color: ${THEME.COLORS.TEXT};
    font-size: ${THEME.FONT_SIZE.MD}px;
    font-family: ${THEME.FONT_FAMILY.REGULAR};
`;
export const LabelText = styled.Text`
    margin-top: 24px;
    color: ${THEME.COLORS.TEXT};
    font-size: ${THEME.FONT_SIZE.MD}px;
    font-family: ${THEME.FONT_FAMILY.BOLD};
`;
export const ButtonClose = styled.TouchableOpacity`
    display: flex;
    align-self: flex-end;
    margin: 20px
`;