import React, { useState } from "react";
import {
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  View,
  Button,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const MovieSearch = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const EXPO_PUBLIC_API_TOKEN = process.env.EXPO_PUBLIC_API_TOKEN;

  const fetchData = async () => {
    if (searchText.trim() === "") {
      setSearchResults([]);
      return;
    }

    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${EXPO_PUBLIC_API_TOKEN}`,
      },
    };

    const url = `https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&language=en-US&page=1`;

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setSearchResults(data.results);
      setModalVisible(true);
    } catch (error) {
      console.error(error);
    }
  };

  const renderMovieItem = ({ item }) => (
    <TouchableOpacity onPress={() => console.log(item.title)}>
      <View style={styles.searchs}>
        <Image
          style={styles.movieImage}
          source={{
            uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
          }}
        ></Image>
        <Text style={styles.movieTitle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="What film are you looking for?"
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
          />
          <Button title="Search" onPress={fetchData} />
        </View>
        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(false);
            }}
          >
            <View style={styles.modalContainer}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <AntDesign name="close" size={24} color="white" />
              </TouchableOpacity>
              <FlatList
                data={searchResults}
                renderItem={renderMovieItem}
                keyExtractor={(item) => item.id.toString()}
              />
            </View>
          </Modal>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    backgroundColor: "white",
    color: "black",
    height: 40,
    width: 250,
    borderWidth: 2,
    borderColor: "white",
    padding: 10,
    marginRight: 10,
  },
  movieTitle: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  modalContainer: {
    backgroundColor: "black",
    position: "absolute",
    top: 150,
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
  },
  movieImage: {
    height: 80,
    width: 50,
    resizeMode: "cover",
  },
  searchs: {
    backgroundColor: "beige",
    borderWidth: 3,
    borderColor: "white",
    flex: 1,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MovieSearch;
