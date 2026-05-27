import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AddStudentScreen from "./screens/AddStudentScreen";
import HomeScreen from "./screens/HomeScreen";
import ScrollInfoScreen from "./screens/ScrollInfoScreen";
import StudentDetailScreen from "./screens/StudentDetailScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: "Students" }}
        />


        <Stack.Screen
          name="AddStudentScreen"
          component={AddStudentScreen}
          options={{ title: "Add Student" }}
        />
        
        <Stack.Screen
          name="StudentDetailScreen"
          component={StudentDetailScreen}
          options={{ title: "Student Detail" }}
        />
        <Stack.Screen
          name="ScrollInfoScreen"
          component={ScrollInfoScreen}
          options={{ title: "Scroll Demo" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );


};




export default App;
