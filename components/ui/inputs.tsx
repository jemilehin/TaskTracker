import React, { forwardRef, useState } from "react";
import { StyleProp, StyleSheet, TextInput, TextStyle } from "react-native";

interface taskInputProps{
    placeholder?: string,
    setInput: React.Dispatch<React.SetStateAction<string>>,
    extraStyle?: StyleProp<TextStyle>,
    multiline?: boolean
}
const TaskTextInput = forwardRef(({placeholder, setInput, extraStyle, multiline}:taskInputProps,ref:React.Ref<TextInput>) => {
    
    return(
        <TextInput 
            ref={ref}
            onChangeText={(text) => setInput(text)}
            placeholder={placeholder}
            placeholderTextColor={'black'}
            style={[styles.container, extraStyle]}
            multiline={multiline}
        />
    )
})

const styles = StyleSheet.create({
    container: {

        backgroundColor: 'transparent',
    }
})

export default TaskTextInput