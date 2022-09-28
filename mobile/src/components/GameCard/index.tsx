import { TouchableOpacityProps } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { THEME } from '../../theme'
import { styles, CardBgImage, TouchContainer, TextName, TextAds } from './styles'

export interface GameCardProps {
    id: string
    title: string
    bannerURL: string
    _count: {
        ads: number
    }
}

interface Props extends TouchableOpacityProps {
    data: GameCardProps
}

export function GameCard ( { data, ...props } : Props) {
    return (
        <TouchContainer {...props}>
            <CardBgImage
                source={{
                    uri: data.bannerURL
                }}
            >
                <LinearGradient 
                    colors={THEME.COLORS.FOOTER}
                    style={styles.footer}
                >
                    <TextName>
                        {data.title}
                    </TextName>
                    <TextAds>
                        {data._count.ads} anúncios
                    </TextAds>
                </LinearGradient>
            </CardBgImage>
        </TouchContainer>
    )
}