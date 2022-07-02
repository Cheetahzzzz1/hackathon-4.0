import React from 'react'
import {  View, SafeAreaView, StyleSheet } from "react-native"
import Header from "../components/Header"
import SearchBar from '../components/SearchBar'
import MenuButtons from '../components/MenuButtons'
import ContactsMenu from '../components/ContactsMenu' 

function Home({ navigation } ) {
    return (
        <View style={styles.container}>
        <SafeAreaView> 
          <Header />
          <SearchBar />
          <MenuButtons navigation={navigation}/>
          <ContactsMenu />
        </SafeAreaView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: "#1c1c1c",
        padding: 15
    }
})