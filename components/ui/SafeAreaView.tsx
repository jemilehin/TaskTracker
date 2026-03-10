import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"


interface SafeAreaViewPrps{
    background?: string,
    children?: any
}
const SafeAreaViewContainer = ({background = 'white', children}: SafeAreaViewPrps) => {

    return (
        <SafeAreaView style={{backgroundColor: background, flex: 1}}>
            {children}
        </SafeAreaView>
    )
}

export default SafeAreaViewContainer