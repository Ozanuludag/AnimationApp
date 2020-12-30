import React, { useState,useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  LayoutAnimation,
  UIManager,
  Platform,
} from "react-native";
import data from "./src/data.json";

export default function App() {
  useEffect(() => {
    if (
      Platform.OS === 'android' &&
      UIManager.setLayoutAnimationEnabledExperimental
    ) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  });
  const [id, setId] = useState();
  const [show, setShow] = useState(false);
  const combine = (id) => {
    setId(id);
    setShow(!show);
  }
  const renderComponent = ({ item }) => {
    
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);

    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity onPress={() => combine(item.id)}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          {id === item.id && show ? <Text>{item.description}</Text> : null}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderComponent}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    margin: 10,
    marginTop: 50,
  },
  itemContainer: {
    flex: 1,
    borderColor: "#b7b7a4",
    borderWidth: 1,
    padding: 10,
    marginVertical:2,
    borderRadius:15
  },
  itemTitle:{
    fontSize: 24, 
  }
});
