import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
    color: "white",
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
    backgroundColor: "transparent",
    borderWidth: 3,
    borderColor: "white",
    flex: 1,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
  },
});
