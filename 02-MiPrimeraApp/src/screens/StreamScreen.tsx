import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { StreamBuilder, Snapshot } from 'react-stream-builder';
import { Observable } from 'rxjs';


export interface CounterProps {
    count: Observable<number>;
}

export const StreamScreen: React.FC<CounterProps> = () => {
    return (
        <View>
            <Text>
                Example
            </Text>
            <Text>
                <StreamBuilder 
                    stream={  }
                    builder={ (snapshot: Snapshot<number>) => {

                    } }
                />
            </Text>  
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})