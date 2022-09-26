import { ImageBackground, View, Text } from "react-native";
import { styles } from './styles'
import bgImage from '../../assets/background-galaxy.png'

interface Props {
    children: React.ReactNode;
}

export function BG ({ children } : Props) {
    return (
        <ImageBackground 
            source={bgImage} 
            defaultSource={bgImage}
            style={styles.container}
            >
            {children}
        </ImageBackground>
    )
}
