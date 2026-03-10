import React from "react";
import { StyleSheet, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import Button from "@/components/ui/button";
import SafeAreaViewContainer from "@/components/ui/SafeAreaView";
import TextComp from "@/components/ui/Text";
import { router } from "expo-router";
import NaviagtionHeader from "@/components/Nav";

const Task = () => {

    return(
        <SafeAreaViewContainer background="white">
            <NaviagtionHeader screenTitle="Task"/>

            <View style={styles.taskContainer}>
                <View style={styles.taskTitleContainer}>
                    <TextComp size={18} text="Lorem ipsum"/>
                </View>
                <View>
                    <TextComp text="Angular Signals is a system that granularly tracks how and where your state is used     throughout an application, allowing the framework to optimize rendering" 
                    />
                </View>
            </View>
        </SafeAreaViewContainer>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: 'gray',
        padding: 4,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    screenTitle:{
        marginLeft: 10
    },
    taskContainer:{
        flexGrow: 1,
        paddingLeft: 8
    },
    taskTitleContainer:{
        marginBottom: 10
    }
})

export default Task