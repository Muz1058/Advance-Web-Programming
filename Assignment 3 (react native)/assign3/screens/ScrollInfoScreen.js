import React from "react";

import {View,Text,ScrollView,TouchableOpacity,} from "react-native";

const ScrollInfoScreen = ({route,navigation,}) => {
  const { studentName, companyName } =route.params;

  return (
    <ScrollView>
      <View>
        <Text>Welcome {studentName}</Text>
        <Text>
          Company: {companyName}
        </Text>
      </View>

      <View>
        <Text>About</Text>

        <Text>
          This student is learning React Native.
        </Text>
      </View>

      <View>
        <Text>Skills</Text>
        <ScrollView
          horizontal={true}
          nestedScrollEnabled={true}
        >
          <View>
            <Text>React Native</Text>
          </View>

          <View>
            <Text>JavaScript</Text>
          </View>

          <View>
            <Text>Expo</Text>
          </View>

          <View>
            <Text>Navigation</Text>
          </View>

          <View>
            <Text>API Handling</Text>
          </View>

          <View>
            <Text>UI Design</Text>
          </View>
        </ScrollView>
      </View>

      <View>
        <Text>Projects</Text>

        <ScrollView
          horizontal={true}
          nestedScrollEnabled={true}
        >
          <View>
            <Text>Hospital Management Information System</Text>
          </View>

          <View>
            <Text>HRMIS</Text>
          </View>

          <View>
            <Text>CHI</Text>
          </View>

          <View>
            <Text>MyTube</Text>
          </View>
        </ScrollView>
      </View>

      <TouchableOpacity
        onPress={() => navigation.popToTop()}
      >
        <Text>Back to Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ScrollInfoScreen;