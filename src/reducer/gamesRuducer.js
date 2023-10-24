const initState = {
  popular: [],
  newGames: [],
  upComing: [],
  seacrh: [],
};
// console.log(initState);

export const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FATCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        newGames: action.payload.newGames,
        upComing: action.payload.upComing,
      };
    case "FATCH_SEARCH":
      return {
        ...state,
        search: action.payload.search,
      };
    case "CLEAR_SEARCHED":
      return {
        ...state,
        search: [],
      };
    default:
      return { ...state };
  }
};
