import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import AddStudentScreen from "../screens/AddStudentScreen";
import ScrollInfoScreen from "../screens/ScrollInfoScreen";
import StudentDetailScreen from "../screens/StudentDetailScreen";
const MainStack=()=>{

    const Stack=createNativeStackNavigator();
    return(
        <Stack.Navigator initialRouteName="Home">

            <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            />
            <Stack.Screen 
            name="StudentDetail" 
            component={StudentDetailScreen}
            />
            <Stack.Screen 
            name="AddStudent" 
            component={AddStudentScreen}
            />
            <Stack.Screen 
            name="ScrollInfo" 
            component={ScrollInfoScreen}
            />
        </Stack.Navigator>
        
    )
}

export default MainStack