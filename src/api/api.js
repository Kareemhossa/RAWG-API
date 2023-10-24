//Base URL
const base_url = "https://api.rawg.io/api/";

const APIKEY = process.env.REACT_APP_API_KEY;

//Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
//Getting the date
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games
const popular_games = `games?key=${APIKEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${APIKEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?key=${APIKEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=5`;
export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;
// console.log(upcomingGamesURL());

// Details game
export const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}?key=${APIKEY}`;

// Details game
export const gameScreenShotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?key=${APIKEY}`;
// console.log(gameScreenShotURL());

//Searched game
export const searchGameURL = (game_name) =>
  `${base_url}games?search=${game_name}&page_size=9?key=${APIKEY}`;
// console.log(searchGameURL());
