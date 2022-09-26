import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',    
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        paddingHorizontal: 32,
        marginTop: 28
    },
    logo: {
        width: 72,
        height: 40
    },
    right: {
        width: 20,
        height: 20
    },
    gameImg: {
        width: 311,
        height: 160,
        marginTop: 32,
        marginBottom: 32,
        borderRadius: 8
    },
    containerList: {
        width: '100%'
    },
    contentList: {
        paddingLeft: 32,
        paddingRight: 64,
        alignItems: 'flex-start'
    }

})