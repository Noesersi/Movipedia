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
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
  },
  movieTitle: {
    color: "white",
    margin: 10,
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
    flex:1,
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
    height: 100,
    width: 70,
    resizeMode: "cover",
    marginLeft:20,
  },
  searchs: {
    backgroundColor: "transparent",
    borderWidth: 3,
    borderColor: "white",
    flex: 1,
    margin: 5,
    justifyContent: "space-around",
    flexDirection: "row"
    
  },
  closeButton: {
    position: "absolute",
    top: 6,
    right: 5,
    zIndex: 1,
  },
  rating: {
    color: "white",
    fontWeight: "bold",
    margin:10,
  },
  searchButton:{
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "hsla(120, 100%, 50%, 0.5)"
  },
  buttonText: {
    color:"white",
    fontWeight: "bold",
  }
});
