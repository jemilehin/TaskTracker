import React from "react";
import { StyleSheet, View } from "react-native";
import { TaskInterfaceProps} from "@/types/Task";
import Button from "./ui/button";
import TextComp from "./ui/Text";
import { router } from "expo-router";


const TaskItem = ({title,description, index, page}: TaskInterfaceProps) => {
    
    return(
        <Button key={index} customStyle={styles.container} onPressed={() => {page == 1 && router.navigate('/task')}}>
            <TextComp
                text={title}
                numberOfLine={1}
            />
            <TextComp 
                text={description}
                numberOfLine={2}
                size={10}
            />
        </Button>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
    }
})

export default TaskItem