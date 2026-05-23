import React from 'react';
import {
   Image,
   StyleSheet,
   Text,
   View,
   ScrollView,
   FlatList
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {


  const DATA = Array.from({ length: 1000 }, (_, i) => ({
  id: i.toString(),
  name: `User ${i + 1}`,
}));

  return (
    <SafeAreaView >
      <View style={styles.header}>
        <View><Text>Whatsapp</Text></View>
        <View style={styles.icons}>
          <Image style={styles.icon} source={{uri:"data:image/png;base64,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"}}/>
          <Image style={styles.icon} source={{uri:"data:image/jpeg;base64,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"}} />
        </View>   
      </View>

      <ScrollView horizontal>
        <View style={styles.scrollCard}><Text>1</Text></View>
        <View style={styles.scrollCard}><Text>2</Text></View>
        <View style={styles.scrollCard}><Text>3</Text></View>
        <View style={styles.scrollCard}><Text>4</Text></View>
        <View style={styles.scrollCard}><Text>5</Text></View>
        <View style={styles.scrollCard}><Text>6</Text></View>
        <View style={styles.scrollCard}><Text>7</Text></View>
      </ScrollView>

      <FlatList
     data={DATA}
     renderItem={ ({item}) =>(
      <View style={styles.card}>
        <Text>{item.name}</Text>
      </View>
     )}
     keyExtractor={(item)=>item.id}
    />

    {/* <FlatList
      data={DATA}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text>{item.name}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id}
    /> */}



      
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header:{
    margin:20,
    width:100,

    flex:1,
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    gap:200
  },
  icons:{
    flex:1,
    flexDirection:"row"
  },
  icon:{
    height:25,
    width:25
  },
  scrollCard:{
    width:50,
    height:20,
    margin:5,
    padding:10,
    backgroundColor:"yellow",
    color:"black",
    textAlign:"center",
    fontWeight:"bold"
  },
  card: {
    padding: 20,
    margin: 10,
    backgroundColor: '#ddd',
  }

 
});

export default App;
