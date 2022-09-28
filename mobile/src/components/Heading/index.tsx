import { ViewProps } from 'react-native';

import { TextSubTitle, 
         TextTitle, 
         View
} from './styles'

interface HeadingProps extends ViewProps {
    title: string,
    subtitle: string,
}

export function Heading ({ title, subtitle, ...rest } : HeadingProps) {
    return (
        <View {...rest}>
            <TextTitle>
                {title}
            </TextTitle>
            <TextSubTitle>
                {subtitle}
            </TextSubTitle>
        </View>
    )
}