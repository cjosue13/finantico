/* eslint-disable react-native/no-raw-text */
import { Button } from 'native-base'
import React from 'react'
import { View} from 'react-native'
import { useAuth } from '../context/AuthContext'

const HomeScreen = () => {
    const {logout} = useAuth();
    return (
        <View>
        <Button onPress={() => logout()}>Logout</Button>
        </View>
    )
}

export default HomeScreen
