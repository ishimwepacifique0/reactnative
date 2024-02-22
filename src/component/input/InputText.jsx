import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, Button } from 'react-native'
import { TextInput } from 'react-native-paper'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function InputText() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    
    

    const ValidEmail = (email) =>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    const ValidFormHandle = () =>{
        let valid = true


        // email validations
        if(email == '' ){
            setEmailError('Email is required')
            valid = false
        }else  if(!ValidEmail(email)){
            setEmailError('Invalid email ')
            valid = false
        }else{
            setEmailError('')
        }
    
        // password validations

        if(password.trim() == '' ){
            setPasswordError('Password is required')
            valid = false
        }else{
            setPasswordError('')
        }

    
        return valid 
    }


    const submitHandle = () =>{
        if(ValidFormHandle()){
            console.log(email)
            console.log(password)
        }
    }
    


    return (
        <View style={styles.container}>
            <View style={{ height: 100 }}></View>
            <Text style={{ fontSize: 20 }}></Text>
            <TextInput
                mode='outlined'
                label="Email"
                value={email}
                onChangeText={setEmail}
                error={emailError}

            />
            {emailError?(<Text style={{color:'red'}}>{emailError}</Text>):null}


            <TextInput
                mode='outlined'
                label="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
                error={passwordError}
            
            />
            {passwordError?(<Text style={{color:'red'}}>{passwordError}</Text>):null}

            <View style={{ height: 10 }}></View>
            <Button title='Submit'  onPress={submitHandle} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: height,
        marginTop: 20,
        padding: 10
    },
    error: {
        color: 'red',
        fontSize: 14,
        marginTop: 5
    }
});
