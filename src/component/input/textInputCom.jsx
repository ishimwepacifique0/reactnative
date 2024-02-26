import React from 'react'
import { View } from 'react-native'
import { TextInput } from 'react-native-paper'



export default function TextInputCom({label,value,mode,secureTextEntry,onChangeText,error}) {
  return (
    <View>
        <TextInput 
        label={label}
        mode={mode}
        value={value}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        error={error}
        />

    </View>
  )
}

