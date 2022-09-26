import { Image, FlatList } from "react-native";
import { styles } from './styles'
import Logo from '../../assets/logo-nlw-esports.png'
import { Heading } from "../../components/Heading";
import { GameCard } from "../../components/GameCard";
import { useState, useEffect } from 'react'
import { api } from "../../services/api";
import { GameCardProps } from '../../components/GameCard/index'
import { BG } from "../../components/Background";

import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

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
        <BG>
            <SafeAreaView style={styles.container}>
                <Image 
                    source={Logo}
                    style={styles.logo}
                />
                <Heading title="Encontre seu duo!" subtitle="Selecione o game que deseja jogar..." />
                <FlatList 
                    data={games}
                    keyExtractor={game => game.id}
                    renderItem={ ({ item }) => <GameCard onPress={() => handleOpenGame(item)} data={item} />}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    contentContainerStyle={styles.contentList}
                />
            </SafeAreaView>
        </BG>
    )
}
