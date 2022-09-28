import { THEME } from '../../theme'
import styled from 'styled-components/native'

export const ViewContainer = styled.View`
    width: 180px;
    background-color: ${THEME.COLORS.SHAPE};
    border-radius: 8px;
    padding: 20px;
    margin-right: 16px;
`;
export const Button = styled.TouchableOpacity`
    width: 100%;
    height: 36px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${THEME.COLORS.PRIMARY};
    border-radius: 6px;
    padding-left: 22px;
    padding-right: 22px;
`;
export const Text = styled.Text`
    margin-left: 4px;
    font-size: 14px;
    font-family: ${THEME.FONT_FAMILY.SEMI_BOLD};
    color: ${THEME.COLORS.TEXT};
`;