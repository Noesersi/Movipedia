import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import PopularMovieList from "./src/components/PopularMovieList/PopularMovieList";
import MovieSearch from "./src/components/MovieSearch/moviSearch";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Movipedia 🎬</Text>
      <Text style={styles.Text}>The Movie's Wikipedia</Text>
      <View style={styles.container2}>
        <MovieSearch/>
        <View style={styles.topRatedMoviesContainer}>
          <Text style={styles.Text}>🚀 Latest Popular Movies</Text>
          <PopularMovieList />
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
    marginTop: 60,
    justifyContent: "center",
    marginHorizontal: 8,
  },
  Text: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
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
    marginBottom: 300,
  }
});
