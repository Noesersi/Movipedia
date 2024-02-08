const EXPO_PUBLIC_API_TOKEN = process.env.EXPO_PUBLIC_API_TOKEN;

export const getTopMovies = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${EXPO_PUBLIC_API_TOKEN}`,
    },
  };

  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      options
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};
