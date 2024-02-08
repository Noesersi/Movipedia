import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  movieTitle: {
    color: "white",
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
  },
  movieImage: {
    width: 100,
    height: 140,
    resizeMode: "cover",
  },
  touchableContainer: {
    flex: 1,
    justifyContent: "space-between",
    height: 230
  },
  popularMovie: {
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    width:160,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: "grey",
    shadowColor: "white",
    margin: 2,
    height: 300,
  },
  rating: {
    color: "white",
    fontWeight: "bold",
    margin: 2,
  },
});
