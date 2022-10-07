import { THEME } from '../../theme'
import styled from 'styled-components/native'

export const ViewContainer = styled.View`
    width: 100%;
    margin-bottom: 16px;
`;
export const TextLabel = styled.Text`
    color: ${THEME.COLORS.CAPTION_300};
    font-size: ${THEME.FONT_SIZE.SM}px;
    font-family: ${THEME.FONT_FAMILY.REGULAR};
`;
export const TextValue = styled.Text`
    font-size: ${THEME.FONT_SIZE.SM}px;
    font-family: ${THEME.FONT_FAMILY.BOLD};
`;