import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { getPopularMovies } from "../../services/getPopularMovies";

const PopularMovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPopularMovies();
      setMovies(data);
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
          <TouchableOpacity style={styles.touchableContainer}>
            <View style={styles.popularMovie}>
              <Image
                style={styles.movieImage}
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                }}
              ></Image>
              <Text style={styles.movieTitle}>{item.title}</Text>
              <Text style={styles.rating}>
                ⭐{item.vote_average.toFixed(1)}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default PopularMovieList;