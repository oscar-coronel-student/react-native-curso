import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: 'black',
    },
    calculatorContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'flex-end'
    },
    resultFeedback: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 25,
        textAlign: 'right',
        fontWeight: '300',
    },
    result: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
        fontWeight: '300',
        marginBottom: 10
    },
    button: {
        borderRadius: 999,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 6
    },
    buttonText: {
        fontSize: 30,
    },
    buttonsRow:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10
    }
})