const EXPO_PUBLIC_API_TOKEN = process.env.EXPO_PUBLIC_API_TOKEN;

export const GetMovieSearch = async (searchText, setModalVisible, setSearchResults) => {
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
  