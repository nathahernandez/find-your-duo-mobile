import { THEME } from '../../theme';
import styled from 'styled-components/native';

export const View = styled.View`
    width: 100%;
    padding: 32px;
`;
export const TextTitle = styled.Text`
    color: #FFFFFF;
    font-size: 24px;;
`;
export const TextSubTitle = styled.Text`
    color: ${THEME.COLORS.CAPTION_400};
    font-size: 16px;
`;