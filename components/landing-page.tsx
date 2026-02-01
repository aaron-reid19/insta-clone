import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import React from 'react';

const LandingPage= () => {
  return (
    <LinearGradient 
        colors={["#fdf497", "#fd5949", "#d6429f","#285AEB"]}
        style={styles.container}
        >
    {/*Clone Logo*/}
    <Image 
    source={{uri:"https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"}}
    style={styles.logo}
    />
    <Text style={styles.logo}> Welcome to Clone</Text>
    <Text>Connect with friends and share moments</Text>

    <TouchableOpacity>
        <Text style={[styles.buttonText, styles.secondaryButton]}>Log In</Text>
    </TouchableOpacity>

    <TouchableOpacity>
        <Text style={styles.buttonText, styles.secondaryButtonText}>Sign Up</Text>
    </TouchableOpacity>
    
    </LinearGradient>
  );
};

export default LandingPage

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        width: "100%"
    },
    logo:{
        width: 100,
        height:100,
        marginBottom: 20,
        borderRadius: 20,  
    },
    title: {
        fontSize:24,
        fontWeight: 'bold',
        color: "white",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: "white",
        paddingHorizontal: 20,
        marginBottom: 30,
        }
})