import { detailReducer } from "./detailsRuducer";
import { gamesReducer } from "./gamesRuducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  games: gamesReducer,
  details: detailReducer,
});

export default rootReducer;

//To colect all action and state
