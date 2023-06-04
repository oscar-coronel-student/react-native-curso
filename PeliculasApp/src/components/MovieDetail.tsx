import { Text, View, FlatList, ListRenderItemInfo } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { formatCurrency } from "react-native-format-currency";
import { GetDetails } from '../interfaces/GetDetails';
import { Cast } from '../interfaces/GetCredits';
import { CastingCard } from './CastingCard';


interface Props{
    movieDetail: GetDetails
    cast: Cast[]
}

export const MovieDetail = ({ movieDetail, cast }: Props) => {

    const [budgetFormattedWithSymbol] = formatCurrency({ amount: movieDetail.budget, code: "USD" });

    const renderItem  = (info: ListRenderItemInfo<Cast>) => {
        const { item } = info
        return <>
            <CastingCard key={ item.id } cast={ item } />
        </>
    }

    return (
        <>
            <View style={{ paddingHorizontal: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <FontAwesome5 
                        name='star'
                        size={ 16 }
                        color='grey'
                    />
                    <Text style={{ marginLeft: 7 }}>{ movieDetail.vote_average.toFixed(2) }  -  </Text>
                    <Text>
                        { movieDetail.genres.map(genre => genre.name).join(', ') }
                    </Text>
                </View>
                
                {/* HISTORIA */}
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
                    Historia
                </Text>
                <Text style={{ fontSize: 16, textAlign: 'justify' }}>{ movieDetail.overview }</Text>

                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
                    Presupuesto
                </Text>
                <Text style={{ fontSize: 18 }}>{ budgetFormattedWithSymbol.replace('$', '$ ') }</Text>
            </View>

            <View>
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', paddingHorizontal: 20 }}>
                    Actores
                </Text>
                <FlatList 
                    horizontal
                    showsHorizontalScrollIndicator={ false }
                    data={ cast }
                    keyExtractor={ (item) => `cast_${ item.id }` }
                    renderItem={ renderItem }
                    style={{ paddingLeft: 5 }}
                />
            </View>
        </>
    )
}