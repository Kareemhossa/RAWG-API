import axios from "axios";
import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
  searchGameURL,
} from "../api/api";

//Action Creator

export const loadGames = () => async (dispatch) => {
  //fatch Data
  const popularData = await axios.get(popularGamesURL());
  const upcompingData = await axios.get(upcomingGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  dispatch({
    type: "FATCH_GAMES",
    payload: {
      popular: popularData.data.results,
      newGames: newGamesData.data.results,
      upComing: upcompingData.data.results,
    },
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  try {
    const searchGames = await axios.get(searchGameURL(game_name));
    dispatch({
      type: "FETCH_SEARCH",
      payload: {
        search: searchGames.data.results,
      },
    });
  } catch (error) {
    console.error(error.message);
  }
};
