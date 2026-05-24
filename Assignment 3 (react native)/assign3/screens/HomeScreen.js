import React from "react";

import {
  View,
  Text,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  FlatList,
} from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";

const HomeScreen = ({ navigation, route }) => {
  const [studentList, setStudentList] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState("");

  const fetchStudents = async () => {
    try {
      setLoader(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users",
      );
      setStudentList(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(()=>{
    fetchStudents()
  },[])
  useEffect(() => {
    if (route.params?.newStudent) {
      setStudentList((prev) => [route.params.newStudent, ...prev]);
    }
  }, [route.params?.newStudent]);

  if (loader) {
    return (
      <View>
        <ActivityIndicator size="large" color="blue" />
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>{error}</Text>
      </View>
    );
  } else {
    return (
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("AddStudent")}>
          <Text>Go to Add Student Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ScrollInfo")}>
          <Text>Go to Scroll Info Screen</Text>
        </TouchableOpacity>
        <FlatList
          data={studentList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View>
              <Text>Name: {item.name}</Text>
              <Text>Email: {item.email}</Text>
              <Text>Phone: {item.phone}</Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("StudentDetail", { student: item })
                }
              >
                <Text>Go to StudentDetailScreen</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    );
  }
};

export default HomeScreen;
