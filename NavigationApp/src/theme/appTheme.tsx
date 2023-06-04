import { StyleSheet } from 'react-native'

export const colors = {
    primary: '#5856D6'
}

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    },
    title:{
        fontSize: 30,
        marginBottom: 10
    },
    bigButton:{
        width: 100,
        height: 40,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bigButtonText: {
        color: 'white'
    },
    drawerContent: {
        marginVertical: 20
    },
    avatarContent: {
        alignItems: 'center',
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 999
    },
    drawerItemsContent: {
        paddingTop: 20,
    },
    drawerItemButton: {
        paddingVertical: 10,
        paddingHorizontal: 30,
    },
    drawerItemText: {
        color: 'black',
        fontSize: 17,
        fontWeight: '400'
    },
})