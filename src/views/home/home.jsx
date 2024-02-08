import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import PopularMovieList from "../../components/PopularMovieList/PopularMovieList";
import TopRatedMovieList from "../../components/TopRatedMovieList/TopRatedMovieList.jsx";
import MovieSearch from "../../components/MovieSearch/moviSearch";
import { styles } from "./styles";

const Home = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}> Movipedia 🎬</Text>
      <Text style={styles.Text}>The Movie's Wikipedia</Text>
      <View style={styles.container2}>
        <MovieSearch/>
      </View>
        <View style={styles.carrousselMoviesContainer}>
          <Text style={styles.Text}>🚀 Latest Popular Movies</Text>
          <PopularMovieList />
        </View>
        <View style={styles.carrousselMoviesContainer2}>
          <Text  style={styles.Text}>🔝 Top Rated Movies</Text>
          <TopRatedMovieList />
        </View>
        
      <StatusBar hidden={true} />
    </View>
  );
}


export default Home;
