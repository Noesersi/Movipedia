import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
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
    alignItems: "center",
  },
  Text: {
    color: "white",
    fontSize: 18,
    textShadowColor: "grey",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    padding: 3,
    marginStart: 3,
  },
  carrousselMoviesContainer: {
    marginStart: 10,
    marginTop: 20,
    marginBottom: 20,
    height: 250,
  },
  carrousselMoviesContainer2: {
    marginStart: 10,
  },
});
