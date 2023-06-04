import { TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



export const BackButton = () => {

    const navigation = useNavigation<NavigationProp<any>>()
    
    return (
        <>
            <TouchableOpacity
                activeOpacity={ 0.7 }
                style={{
                    position: 'absolute',
                    backgroundColor: 'white',
                    borderRadius: 999,
                    height: 40,
                    width: 40,
                    top: 20,
                    left: 20,
                    zIndex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                onPress={ () => navigation.goBack() }
            >
                <FontAwesome5 
                    name='arrow-left'
                    size={ 18 }
                    color='black'
                />
            </TouchableOpacity>
        </>
    )
}