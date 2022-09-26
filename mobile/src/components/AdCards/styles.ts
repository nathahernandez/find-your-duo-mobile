import { StyleSheet } from 'react-native' 
import { THEME } from '../../theme'

export const styles = StyleSheet.create({
    container: {
        width: 180,
        backgroundColor: THEME.COLORS.SHAPE,
        borderRadius: 8,
        padding: 20,
        marginRight: 16
    },
    button: {
        width: '100%',
        height: 36,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: THEME.COLORS.PRIMARY,
        borderRadius: 6,
        paddingHorizontal: 22
    },
    text: {
        marginLeft: 4,
        color: '#ffffff',
        fontSize: 14,
        fontFamily: THEME.FONT_FAMILY.SEMI_BOLD
    }
})