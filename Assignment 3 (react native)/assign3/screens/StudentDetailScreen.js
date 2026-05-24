import React, { useEffect } from "react";

import { View,Text,StatusBar,Pressable,TouchableOpacity,} from "react-native";

const StudentDetailScreen = ({route,navigation,}) => {
  const { student } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: student.name,
    });
  }, []);

  return (
    <View>
      <StatusBar
        backgroundColor="black"
        barStyle="light-content"
      />

      <Text>Student Details</Text>

      <Text>Name: {student.name}</Text>

      <Text>
        Username: {student.username}
      </Text>

      <Text>Email: {student.email}</Text>

      <Text>Phone: {student.phone}</Text>

      <Text>
        Website: {student.website}
      </Text>

      <Text>
        City: {student.address.city}
      </Text>

      <Text>
        Company: {student.company.name}
      </Text>

      <Pressable
        onPress={() =>
          navigation.navigate("ScrollInfo", {
            studentName: student.name,
            companyName: student.company.name,
          })
        }
      >
        <Text>View Scroll Demo</Text>
      </Pressable>

      <TouchableOpacity
        onPress={() => navigation.goBack()}
      >
        <Text>Back to List</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StudentDetailScreen;