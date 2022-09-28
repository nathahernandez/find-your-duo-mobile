import { THEME } from '../../../theme/index';
import styled from 'styled-components/native';

export const View = styled.View`
    display: flex;
    width: 100%;
    padding: 32px;
    align-items: center;
    margin-top: 24px;
`;
export const TextTitle = styled.Text`
    color: #FFFFFF;
    font-size: 24px;;
`;
export const TextSubTitle = styled.Text`
    color: ${THEME.COLORS.CAPTION_400};
    font-size: 16px;
`;