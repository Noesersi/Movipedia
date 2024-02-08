import React, { useState, useEffect } from "react";
import { View, Text, StatusBar, Image, ScrollView } from "react-native";
import { getMovieDetails } from "../../services/getMovieDetails";
import { styles } from "./styles";

const DetailView = ({ route }) => {
  const { movieId } = route.params;
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const data = await getMovieDetails(movieId);
      setMovieDetails(data);
    };
    fetchMovieDetails();
  }, [movieId]);

  return (
    <ScrollView contentContainerStyle={styles.detailContainer}>
      {movieDetails ? (
        <View style={styles.movieDetailsContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.movieImage}
              source={{
                uri: `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`,
              }}
            />
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.titleContent}>{movieDetails.title}</Text>
            <Text style={styles.overviewContent}>{movieDetails.overview}</Text>

            <View style={styles.detailsBox}>
              <View style={styles.insideDetailsBox}>
                <Text style={styles.detailText}>Release Date</Text>
                <Text style={styles.releaseDateContent}>
                  {movieDetails.release_date}
                </Text>
              </View>

              <View style={styles.insideDetailsBox}>
                <Text style={styles.details}>
                  ⭐ {movieDetails.vote_average.toFixed(1)}
                </Text>
              </View>

              <View style={styles.insideDetailsBox}>
                <Text style={styles.details}>
                  🕑 {movieDetails.runtime} min
                </Text>
              </View>
            </View>

            <View style={styles.detailsBox}>
              <View style={styles.insideDetailsBox}>
                <Text style={styles.detailText}>Genres</Text>
                {movieDetails.genres.map((genre) => (
                  <Text key={genre.id} style={styles.details}>
                    {genre.name}
                  </Text>
                ))}
              </View>

              <View style={styles.insideDetailsBox}>
                <Text style={styles.detailText}>Revenue</Text>
                <Text style={styles.details}>
                  ${movieDetails.revenue.toLocaleString()}
                </Text>
              </View>

              <View style={styles.insideDetailsBox}>
                <Text style={styles.detailText}>Production Companies</Text>
                {movieDetails.production_companies.map((company) => (
                  <Text key={company.id} style={styles.details}>
                    {company.name}
                  </Text>
                ))}
              </View>
            </View>
          </View>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
      <StatusBar hidden={true} />
    </ScrollView>
  );
};

export default DetailView;
