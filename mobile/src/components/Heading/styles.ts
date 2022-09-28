import { THEME } from '../../theme';
import styled from 'styled-components/native';

export const View = styled.View`
    width: 100%;
    padding: 32px;
`;
export const TextTitle = styled.Text`
    color: ${THEME.COLORS.TEXT};
    font-size: ${THEME.FONT_SIZE.LG};
    font-family: ${THEME.FONT_FAMILY.BLACK};
`;
export const TextSubTitle = styled.Text`
    color: ${THEME.COLORS.CAPTION_400};
    font-size: ${THEME.FONT_SIZE.MD};
    font-family: ${THEME.FONT_FAMILY.REGULAR};
`;