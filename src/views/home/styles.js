import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black",
      alignItems: "center",
    },
    title: {
      color: "white",
      marginTop: 40,
      fontSize: 45,
      textShadowColor: "grey", 
      textShadowOffset: { width: 3, height: 3 }, 
      textShadowRadius: 5,
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
      textShadowColor: "grey", 
      textShadowOffset: { width: 3, height: 3 }, 
      textShadowRadius: 5,
    },
    topRatedMoviesContainer:{
      marginTop: 40,
      marginBottom: 300,
    }
  });
  