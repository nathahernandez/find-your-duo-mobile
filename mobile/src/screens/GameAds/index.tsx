import { styles, ViewHeader, ImageLogo, ViewAux, GameImage, ContainerList, GoBack } from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BackgroundIMG } from "../../components/Background/index"
import { useRoute, useNavigation } from '@react-navigation/native'
import { GameParams } from '../../@types/navigation'
import { TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import LogoImg from '../../assets/logo-nlw-esports.png'
import { THEME } from '../../theme'
import { Heading } from '../../components/Heading'
import { AdCards } from '../../components/AdCards'
import { api } from '../../services/api'
import { Match } from '../../components/Match'

import { useState, useEffect } from 'react';

export interface AdsProps {
    createdAt: string
    hourEnd: string
    hourStart: string
    id: string
    name: string
    useVoice: boolean
    weekDays: string[]
    yearsPlaying: number
}

export function GameAds () {

    const route = useRoute()
    const params = route.params as GameParams;
    const navigation = useNavigation();

    const [ Ads, setAds ] = useState<AdsProps[]>()
    const [ discordSelected, setDiscordSelected ] = useState('') 

    function handleGoBack () {
        navigation.goBack()
    }

    const onClose = () => setDiscordSelected('')

    const getDiscordUser = async (AdID : string) => {
        api.get(`/ads/${AdID}/discord`).then(response => setDiscordSelected(response.data.discordUser)) 
    }
    
    useEffect(()=>{
        api.get(`/games/${params.id}/ads`)
        .then( response => setAds(response.data) )
    }, [])

    return (
        <BackgroundIMG>
            <SafeAreaView style={styles.container}>

                <ViewHeader>
                    <GoBack
                        onPress={handleGoBack}
                    >
                        <Entypo 
                            name="chevron-thin-left"
                            color={THEME.COLORS.CAPTION_300}
                            size={20}
                        />
                    </GoBack>
                    <ImageLogo
                        source={LogoImg}
                    />
                    <ViewAux />
                </ViewHeader>

                <GameImage
                    source={{
                        uri: params.bannerURL
                    }}
                    resizeMode='cover'
                />

                <Heading 
                    title={params.title}
                    subtitle='Conecte-se e comece a jogar!'
                />
                
                <ContainerList 
                    horizontal
                    data={Ads}
                    keyExtractor={(item : any)=> item.id}
                    contentContainerStyle={styles.containerList}
                    renderItem={ ({ item } : any) => <AdCards onConnect={() => getDiscordUser(item.id)} data={item} /> }
                    showsHorizontalScrollIndicator={false}
                />
                
                <Match 
                    onClose={onClose}
                    visible={discordSelected.length > 0 }
                    discord={discordSelected}
                />
            </SafeAreaView>
        </BackgroundIMG>
    )
}
