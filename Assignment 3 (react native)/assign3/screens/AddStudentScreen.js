import React, { useState } from "react";
import { SafeAreaView } from "react-native";

import { View,Text,Button, ScrollView, TextInput,Alert,Switch,TouchableOpacity,Platform } from "react-native";
import { KeyboardAvoidingView } from "react-native";

const AddStudentScreen=({navigation})=>{
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const [city,setCity]=useState("")
    const [isActive,setIsActive]=useState(false)

    const handleSubmit = () => {
    if (!name || !email || !phone || !city) {
      Alert.alert("Error", "All fields are required");
      return;
    }

    const newStudent = {
      id: Date.now(),
      name,
      email,
      phone,
      city,
      isActive,
    };

    navigation.navigate("Home", {
      newStudent,
    });
  }



   return(
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
         
        <ScrollView>

        <Text>Name</Text>
        <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Enter Name"
        />
        <Text>Email</Text>
        <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Enter Email"
        />
        <Text>Name</Text>
        <TextInput
        value={phone}
        onChangeText={setPhone}
        placeholder="Enter Phone No."
        />
        <Text>Name</Text>
        <TextInput
        value={city}
        onChangeText={setCity}
        placeholder="Enter City"
        />

         <View>
          <Text>Active Student</Text>

          <Switch
            value={isActive}
            onValueChange={setIsActive}
          />
        </View>

        <TouchableOpacity onPress={handleSubmit}>
          <Text>Add Student</Text>
        </TouchableOpacity>

        </ScrollView>
   
    </KeyboardAvoidingView>
   )

}

export default AddStudentScreen