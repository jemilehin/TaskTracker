import React, { useRef, useState } from "react";
import { Modal, StyleSheet, TextInput, View } from "react-native";
import TaskTextInput from "./ui/inputs";
import Button from "./ui/button";
import TextComp from "./ui/Text";
import { useAsyncStorage } from "@/hooks/useAsyncStorage";
import { TASKSTORAGEKEY } from "@/constants/asyncConstant";
import Feather from '@expo/vector-icons/Feather';

interface modal{
    isShow?: boolean,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}
const CreateModalTask = ({isShow, setShowModal}: modal) => {
    const [title,setTitle] = useState('')
    const [description,setDiscription] = useState('')
    const descriptionRef = useRef<TextInput>(null)
    const {createItem} = useAsyncStorage()

    const createTask = () => {
        if(title){
            createItem(TASKSTORAGEKEY, {title,description,status: 'active'})
            setShowModal(false)
            return
        }
        alert("Task can't be empty")
    }

    return(
        <Modal style={styles.modalContainer} visible={isShow}>
            <Button onPressed={() => setShowModal(false)} customStyle={styles.cancleButton}>
                <Feather name="x" size={24} color="black" />
            </Button>
            <View style={styles.modalContentContainer}>
                <View style={styles.inputcontainer}>
                    <TaskTextInput 
                        setInput={setTitle}
                        placeholder="Enter Task"
                        extraStyle={{borderWidth: 1,borderRadius: 5,}}
                    />
                </View>
                <Button onPressed={() => {descriptionRef.current?.focus()}} customStyle={[styles.inputcontainer, {height: 100, borderWidth: 1, borderRadius: 5,}]}>
                    <TaskTextInput 
                        ref={descriptionRef}
                        setInput={setDiscription}
                        placeholder="Enter task desccription (optional)"
                        extraStyle={{padding: 0}}
                        multiline
                    />
                </Button>

                <Button
                    onPressed={createTask} 
                    customStyle={styles.buttonStyle}
                >
                    <TextComp 
                        text="Create"
                        color="white"
                        textAlign="center"
                    />
                </Button>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputcontainer:{
        marginVertical: 10,
    },
    buttonStyle:{
        width: "40%",
        backgroundColor: 'black',
        paddingVertical: 10,
        marginHorizontal: 'auto',
        borderRadius: 10
    },
    cancleButton: {
        borderRadius: 30,
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'gray',
        position: 'absolute',
        left: 10,
        top: 10,
        padding: 5
    },
    modalContainer:{
        display: 'flex',
        flex: 1
    },
    modalContentContainer:{flex: 1, justifyContent: 'center', paddingHorizontal: 10}
})

export default CreateModalTask
