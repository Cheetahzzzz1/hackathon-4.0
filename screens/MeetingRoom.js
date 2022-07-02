import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native"
import StartMeeting from "../components/StartMeeting"


function MeetingRoom() {
    const [name, setName] = useState()
    const [roomId, setRoomId] = useState()


    useEffect(()=>{
       console.log("yoooo")
    }, [])
    return (
        <View style={styles.container}>
            <StartMeeting 
                name={name}
                setName={setName}
                roomId={roomId}
                setRoomId={setRoomId}
            
            />
            
        </View>
    )
}
export default MeetingRoom

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1c1c1c",
        flex: 1  
    }

    
})