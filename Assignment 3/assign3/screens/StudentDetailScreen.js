import React from "react";

import { View,Text,Button } from "react-native";

const StudentDetailScreen=({route,navigation})=>{

    const {student}=route.params

    return(
        <View>
            <Text>Student Details</Text>
            <Text>Name: {student.name}</Text>
            <Text>Email: {student.email}</Text>
            <Text>Phone: {student.phone}</Text>
        </View>
    )
    

}

export default StudentDetailScreen