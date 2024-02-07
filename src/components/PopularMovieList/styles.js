import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
    touchableContainer: {
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
    },
    rating: {
        color: "white",
        fontWeight: "bold",
        margin: 2,
      }
  });
  