import { ActivityIndicator } from "react-native";
import { ViewLoading } from './styles'
import { THEME } from "../../theme";

export function Loading (){
    return (
        <ViewLoading>
            <ActivityIndicator color={THEME.COLORS.PRIMARY} />
        </ViewLoading>

    )
}