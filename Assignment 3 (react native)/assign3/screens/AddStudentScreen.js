import React, { useState } from "react";
import { SafeAreaView } from "react-native";

import { View,Text,Button, ScrollView, TextInput } from "react-native";

const AddStudentScreen=({navigation})=>{
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const [City,setCity]=useState("")

    



   return(
     <ScrollView>
        <SafeAreaView>
        <Text>Name</Text>
        <TextInput
        value="{name}"
        onChange={setName}
        placeholder="Enter Name"
        />
        <Text>Email</Text>
        <TextInput
        value="{email}"
        onChange={setEmail}
        placeholder="Enter Email"
        />
        <Text>Name</Text>
        <TextInput
        value="{Phone}"
        onChange={setPhone}
        placeholder="Enter Phone No."
        />
        <Text>Name</Text>
        <TextInput
        value="{City}"
        onChange={setCity}
        placeholder="Enter City"
        />

        </SafeAreaView>
       
    </ScrollView>
   )

}

export default AddStudentScreen