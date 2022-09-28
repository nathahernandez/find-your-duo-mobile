import { ViewContainer, TextLabel, TextValue } from '../CardInfo/styles'
import { THEME } from '../../theme'

interface CardInfoProps {
    label: string
    value: string
    colorValue?: string
}

export function CardInfo ({ label, value, colorValue = THEME.COLORS.TEXT } : CardInfoProps) {

    return (
        <ViewContainer>
            <TextLabel>
                {label}
            </TextLabel>
            <TextValue style={{color: colorValue}}
                numberOfLines={1}
            >
                {value}
            </TextValue>
        </ViewContainer>
    )
}