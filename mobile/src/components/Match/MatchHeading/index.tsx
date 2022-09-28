import { HeadingProps } from '../../Heading';

import { TextSubTitle, 
         TextTitle, 
         View
} from './styles'

export function MatchHeading ({ title, subtitle } : HeadingProps) {
    return (
        <View>
            <TextTitle>
                {title}
            </TextTitle>
            <TextSubTitle>
                {subtitle}
            </TextSubTitle>
        </View>
    )
}