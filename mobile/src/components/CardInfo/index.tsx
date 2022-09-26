import { View, Text } from 'react-native'
import { styles } from '../CardInfo/styles'
import { THEME } from '../../theme'

interface Props {
    label: string
    value: string
    colorValue?: string
}

export function CardInfo ({ label, value, colorValue = THEME.COLORS.TEXT } : Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                {label}
            </Text>
            <Text style={[ 
                styles.value, 
                {color: colorValue} 
                ]}
                numberOfLines={1}
            >
                {value}
            </Text>
        </View>
    )
}