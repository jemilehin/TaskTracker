import React from 'react'
import { Text } from 'react-native'

interface textProps{
    text?: string,
    size?: string|any
    color?: string,
    numberOfLine?: number,
    textAlign?: 'center'|'justify'|'left'|'right'
}
const TextComp = ({text,size = 15,color = 'black', numberOfLine, textAlign}:textProps) => {


    return(
        <Text ellipsizeMode='tail' numberOfLines={numberOfLine} style={{fontSize: size, color, textAlign}}>
            {text}
        </Text>
    )
}

export default TextComp