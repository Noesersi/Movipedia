import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const [text, onChangeText] = React.useState("What are you looking for?");
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Movipedia 🎬</Text>
      <Text style={styles.Text}>The Movies Wikipedia</Text>
      <View style={styles.container2}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={onChangeText}
        />
        <View style={styles.topRatedMoviesContainer}>
          <Text style={styles.Text}>⭐⭐Latest Popular Movies⭐⭐</Text>
        </View>
      </View>
      <StatusBar hidden={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
  },
  title: {
    color: "white",
    marginTop: 40,
    fontSize: 45,
  },
  container2: {
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 8,
  },
  Text: {
    color: "white",
    fontSize: 18,
  },
  input: {
    backgroundColor: "white",
    color: "black",
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 5,
    borderColor: "white",
    padding: 10,
  },
  topRatedMoviesContainer:{
    marginTop: 40,
  }
});
