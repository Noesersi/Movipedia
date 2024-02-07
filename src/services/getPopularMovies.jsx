import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const EXPO_PUBLIC_API_TOKEN = process.env.EXPO_PUBLIC_API_TOKEN


  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjQwZjQ5ZDAzYzAxNjdiYmEzM2VhNzVlMDI2NTBkZCIsInN1YiI6IjY1YzFmZmZlZjQ0ZjI3MDE2M2MwYmE5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.urC9IWyc_YLYjbKB2DL5EqxW3_dsMLY8uqVmxXV9xQc",
        },
      };

      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
          options
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text>Popular Movies</Text>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        renderItem={({ item }) => (
            <View style={styles.popularMovie}>
              <Image
                style={styles.movieImage}
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                }}
              ></Image>
              <Text style={styles.movieTitle}>{item.title}, {item.id}</Text>
            </View>
        )}
      />
    </View>
  );
};

export default MovieList;

const styles = StyleSheet.create({
  movieTitle: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  movieImage: {
    width: 100,
    height: 140,
    resizeMode: "cover"
  },
  popularMoviesContainer: {
    flex: 1,
    justifyContent: "space-between"
   
  },
  popularMovie: {
    justifyContent: "space-between",
    alignItems: "center",
    flex:1,
    paddingHorizontal:10,
    paddingVertical:10,
    borderWidth: 2,
    borderColor: "grey",
    shadowColor: "white",
    margin:2,
  }
});
