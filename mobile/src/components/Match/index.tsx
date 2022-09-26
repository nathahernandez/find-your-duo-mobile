import { styles } from "./styles"
import { Text, View, Modal, ModalProps, TouchableOpacity, Alert, ActivityIndicator } from "react-native"
import { MaterialIcons, AntDesign } from '@expo/vector-icons'
import { THEME } from '../../theme'
import { Heading } from "../Heading"
import * as Clipboard from 'expo-clipboard';

import { useState } from 'react'

interface Props extends ModalProps {
    discord: string
    onClose: () => void
}
export function Match({onClose, discord, ...props} : Props) {

    const [ isCopying, setIsCopying ] = useState(false)

    const handleCopyDiscordUser = async () => {
        setIsCopying(true)
        await Clipboard.setStringAsync(discord)
        Alert.alert('User Copiado.')
        setIsCopying(false)
    }

    return (
        <Modal
            transparent
            statusBarTranslucent
            animationType="fade"
            {...props}
        >
            <View style={styles.container}>
                <View style={styles.content}>
                    
                    <TouchableOpacity style={styles.close} onPress={onClose}>
                        <MaterialIcons name='close' size={20} color={THEME.COLORS.CAPTION_500} />
                    </TouchableOpacity>
                    
                    <AntDesign name="checkcircleo" size={64} color={THEME.COLORS.SUCCESS} />
                    
                    <Heading title="Let's play !" subtitle="Agora é só começar a jogar!" style={styles.heading} />
                    
                    <Text style={styles.label}>
                        Adicione o Discord
                    </Text>
                    <TouchableOpacity 
                            style={styles.discordBox} 
                            onPress={handleCopyDiscordUser}
                            disabled={isCopying}
                    >
                        <Text style={styles.discord}>
                                { isCopying ? <ActivityIndicator color={THEME.COLORS.PRIMARY} /> : discord }
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}