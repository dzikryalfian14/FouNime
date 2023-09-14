class DataSource {
  static searchAnime(keyword) {
    return fetch(`https://api.jikan.moe/v4/anime?q=${keyword}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Your Anime Title was not Found');
        }
      })
      .then((responseJson) => {
        if (responseJson.data) {
          return Promise.resolve(responseJson.data);
        } else {
          return Promise.reject(`${keyword} tidak ada`);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        return Promise.reject(error);
      });
  }
}

export default DataSource;
