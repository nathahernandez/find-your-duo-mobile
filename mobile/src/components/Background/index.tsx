import { ImageBackground } from './styles'
import BackgroundGalaxy from '../../assets/background-galaxy.png'

interface Props {
    children: React.ReactNode;
}

export function BackgroundIMG ({ children } : Props) {
    return (
        <ImageBackground 
            source={BackgroundGalaxy} 
            defaultSource={BackgroundGalaxy}
            >
            {children}
        </ImageBackground>
    )
}
