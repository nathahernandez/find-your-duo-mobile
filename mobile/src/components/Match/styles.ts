import { StyleSheet } from "react-native"
import { THEME } from "../../theme"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: THEME.COLORS.OVERLAY,
    },
    content: {
        width:311,
        backgroundColor: THEME.COLORS.SHAPE,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'

    },
    discord: {
        color: THEME.COLORS.TEXT,
        fontSize: THEME.FONT_SIZE.MD,
        fontFamily: THEME.FONT_FAMILY.REGULAR
    }, 
    close: {
        alignSelf: 'flex-end',
        margin: 16
    },
    heading: {
        alignItems: 'center',
        marginTop: 24
    },
    label: {
        marginTop: 24,
        color: THEME.COLORS.TEXT,
        fontSize: THEME.FONT_SIZE.MD,
        fontFamily: THEME.FONT_FAMILY.SEMI_BOLD
    },
    discordBox: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 231,
        paddingHorizontal: 16,
        paddingVertical: 11,
        backgroundColor: THEME.COLORS.BACKGROUND_800,
        borderRadius: 4,
        marginTop: 8,
        marginBottom: 32
    }

})