import axios from "axios";
import { gameDetailsURL, gameScreenShotURL } from "../api/api";

//Action Creator

export const loadDetalis = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });

  //fatch Data
  const detailData = await axios.get(gameDetailsURL(id));
  const screenShotData = await axios.get(gameScreenShotURL(id));
  //   console.log(gameDetailsURL(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: screenShotData.data,
    },
  });
};
