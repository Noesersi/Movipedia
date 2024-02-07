import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import PopularMovieList from "../../components/PopularMovieList/PopularMovieList";
import MovieSearch from "../../components/MovieSearch/moviSearch";
import { styles } from "./styles";

const Home = () => {
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


export default Home;
