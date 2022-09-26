import { View, TouchableOpacity, Text } from 'react-native'
import { styles } from '../AdCards/styles'
import { CardInfo } from '../CardInfo'
import { AdsProps } from '../../screens/GameAds'
import { THEME } from '../../theme'
import { SimpleLineIcons } from '@expo/vector-icons'; 

interface Props {
    data: AdsProps
    onConnect: () => void
}

export function AdCards ({ data, onConnect } : Props) {

    return (
        <View style={styles.container}>
            <CardInfo 
                label='NOME'
                value={data.name}
                colorValue='#FFFFFF'
            />
            <CardInfo 
                label='Tempo de Jogo'
                value={`${data.yearsPlaying} anos`}
                colorValue='#FFFFFF'
            />
            <CardInfo 
                label='Disponibilidade'
                value={`${data.weekDays.length} dias\u2022${data.hourStart}-${data.hourEnd}`}
                colorValue='#FFFFFF'
            />
            <CardInfo 
                label='Chamada de áudio ?'
                value={data.useVoice ? 'Sim' : 'Não'}
                colorValue={data.useVoice ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={onConnect}
            >
                <SimpleLineIcons name="game-controller" size={20} color='#ffffff' />
                <Text style={styles.text}>
                    Conectar
                </Text>
            </TouchableOpacity>
        </View>
    )
}