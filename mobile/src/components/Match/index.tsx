import { ButtonClose, DiscordBox, DiscordText, LabelText, ViewContainer, ViewContent } from "./styles"
import { Modal, ModalProps, Alert, ActivityIndicator } from "react-native"
import { MaterialIcons, AntDesign } from '@expo/vector-icons'
import { THEME } from '../../theme'
import { MatchHeading } from "./MatchHeading"
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
            <ViewContainer>
                <ViewContent>
                    
                    <ButtonClose onPress={onClose}>
                        <MaterialIcons name='close' size={20} color={THEME.COLORS.CAPTION_500} />
                    </ButtonClose>
                    
                    <AntDesign name="checkcircleo" size={64} color={THEME.COLORS.SUCCESS} />
                    
                    <MatchHeading title="Let's play !" subtitle="Agora é só começar a jogar!" />
                    
                    <LabelText>
                        Adicione o Discord
                    </LabelText>
                    <DiscordBox
                            onPress={handleCopyDiscordUser}
                            disabled={isCopying}
                    >
                        <DiscordText>
                                { isCopying ? <ActivityIndicator color={THEME.COLORS.PRIMARY} /> : discord }
                        </DiscordText>
                    </DiscordBox>
                </ViewContent>
            </ViewContainer>
        </Modal>
    )
}