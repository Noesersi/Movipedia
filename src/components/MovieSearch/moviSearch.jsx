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
import { styles } from "./styles";
import { GetMovieSearch } from "../../services/getMovieSearch";

const MovieSearch = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

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
        <View>
          <Text style={styles.rating}>⭐{item.vote_average.toFixed(1)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  const handleSearch = async () => {
    await GetMovieSearch(searchText, setModalVisible, setSearchResults);
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Which film are you looking for?"
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
          />
          <TouchableOpacity
          activeOpacity={0.5}  
          style={styles.searchButton} 
          >
          <Text style={styles.buttonText} onPress={handleSearch}>Search</Text>
          </TouchableOpacity>
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

export default MovieSearch;
