import Logo from '../../assets/logo-nlw-esports.png';
import { Heading } from "../../components/Heading";
import { GameCard } from "../../components/GameCard";
import { api } from "../../services/api";
import { GameCardProps } from '../../components/GameCard/index';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';

import { ContentList, 
         ImageLogo, 
         styles 
} from './styles';
import { BackgroundIMG } from '../../components/Background/index';

export function Home () {

    const [games, setGames] = useState<GameCardProps[]>()

    useEffect(()=>{
        api.get('/games')
        .then(response => {
            setGames(response.data)
        })
    }, [])
    
    const navigation = useNavigation();

    function handleOpenGame({id, title, bannerURL} : GameCardProps) {
        navigation.navigate('GameAds', {id, title, bannerURL});
    }

    return (
        <BackgroundIMG>
            <SafeAreaView style={styles.container}>
                <ImageLogo
                    source={Logo}
                />
                <Heading title="Encontre seu duo!" subtitle="Selecione o game que deseja jogar..." />
                <ContentList 
                    data={games}
                    keyExtractor={(game : GameCardProps) => game.id}
                    renderItem={ ({ item } : any ) => <GameCard onPress={() => handleOpenGame(item)} data={item} />}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                />
            </SafeAreaView>
        </BackgroundIMG>
    )
}
