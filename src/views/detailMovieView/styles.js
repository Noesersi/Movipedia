import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  detailContainer: {
    flexGrow: 1,
    backgroundColor: "black",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  movieDetailsContainer: {
    alignItems: "center",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  movieImage: {
    width: 200,
    height: 300,
    resizeMode: "contain",
    borderWidth: 1,
    borderColor: "white",
  },
  detailsContainer: {
    flex: 1,
    margin: 5,
    width: "100%",
  },
  detailText: {
    textAlign: "center",
    color: "grey",
    fontSize: 18,
    fontWeight: "bold",
  },
  titleContent: {
    color: "white",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    textShadowColor: "grey",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  overviewContent: {
    paddingVertical: 17,
    color: "white",
    marginHorizontal: 10,
    padding: 10,
    textAlign: "justify",
    fontSize: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "white",
  },
  releaseDateContent: {
    color: "white",
    fontSize: 16,
    marginBottom: 10,
  },
  details: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    margin: 3
  },
  detailsBox: {
    flexDirection: "row", 
    justifyContent: "space-between", 
    borderWidth: 1,
    borderColor: "white",
    padding: 10,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  insideDetailsBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  productionCompanyContent: {
    color: "white",
    marginBottom: 5,
    textAlign: "center",
    fontWeight: "bold",
  },
});
