import { View, StyleSheet, Image, Text } from 'react-native';

import { Cast } from "../interfaces/GetCredits";
import { getImageUrl } from '../utils/utils';


interface Props {
    cast: Cast
}

export const CastingCard = ( { cast }: Props ) => {

    const profilePath = cast.profile_path ? getImageUrl( cast.profile_path ) : 'https://alternative.me/media/256/unsplash-icon-ajbla17bldc2lh5m-c.png'

    return (
        <>
            <View style={[ styles.cardContent ]}>
                <View>
                    <Image 
                        source={{
                            uri: profilePath ?? '',
                            height: 60,
                            width: 60,
                        }}
                        style={{
                            borderTopLeftRadius: 10,
                            borderBottomLeftRadius: 10,
                        }}
                    />
                </View>
                <View style={{ paddingHorizontal: 10, justifyContent: 'space-evenly', paddingVertical: 5 }}>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 17 }}>{ cast.original_name }</Text>
                    </View>
                    <View>
                        <Text>{ cast.character }</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    cardContent: {
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
        flexDirection: 'row',
        marginBottom: 20, 
        marginTop: 10, 
        marginLeft: 15
    }
})