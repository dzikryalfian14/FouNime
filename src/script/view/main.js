import "../component/search-bar.js";
import "../component/anime-list.js";
import DataSource from '../data/data-source.js';

const main = () => {
  const listAnimeElement = document.querySelector("anime-list");
  const searchBarElement = document.querySelector("search-bar");

  const buttonSearchClicked = async () => {
    try {
      const result = await DataSource.searchAnime(searchBarElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = (result) => {  
    listAnimeElement.anime = result;
  };

  const fallbackResult = (message) => {
    listAnimeElement.renderError(message);
  };

  searchBarElement.clickEvent = buttonSearchClicked;
};
export default main;