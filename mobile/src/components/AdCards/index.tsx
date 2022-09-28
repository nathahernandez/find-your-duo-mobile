import { ViewContainer, Button, Text } from '../AdCards/styles'
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
        <ViewContainer>
            <CardInfo 
                label='NOME'
                value={data.name}
                colorValue={THEME.COLORS.TEXT}
            />
            <CardInfo 
                label='Tempo de Jogo'
                value={`${data.yearsPlaying} anos`}
                colorValue={THEME.COLORS.TEXT}
            />
            <CardInfo 
                label='Disponibilidade'
                value={`${data.weekDays.length} dias\u2022${data.hourStart}-${data.hourEnd}`}
                colorValue={THEME.COLORS.TEXT}
            />
            <CardInfo 
                label='Chamada de áudio ?'
                value={data.useVoice ? 'Sim' : 'Não'}
                colorValue={data.useVoice ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
            />
            <Button
                onPress={onConnect}
            >
                <SimpleLineIcons name="game-controller" size={20} color={THEME.COLORS.TEXT} />
                <Text>
                    Conectar
                </Text>
            </Button>
        </ViewContainer>
    )
}