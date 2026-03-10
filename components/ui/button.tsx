import React from "react";
import { StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from "react-native";

interface buttonProps{
    onPressed?: (arg?: any) => void
    children?: any,
    customStyle?: StyleProp<ViewStyle>
}

const Button = ({onPressed, children, customStyle, ...props}:buttonProps) => {

    return(
        <TouchableOpacity style={[styles.container,customStyle]} onPress={onPressed}
        {...props}
        >
            {children}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 4,
        maxWidth: '100%',
    }
})

export default Button