import React, { useEffect } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../reducer/gamesActions";
//React Router
import { useLocation } from "react-router-dom";
// styled ans Animarion
import styled from "styled-components";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
//componant
import Games from "./Games";
import GameDetails from "./GameDetails";

const Home = () => {
  // get location pathname data
  const location = useLocation();
  const pathID = location.pathname.split("/")[2];
  // console.log(pathID);
  //fatch data
  const dispatch = useDispatch();
  //useeffect
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { popular, newGames, upComing, search } = useSelector(
    (state) => state.games
  ); //From Reducer

  return (
    <Gamelist>
      <LayoutGroup type="crossfade">
        <AnimatePresence>
          {" "}
          {pathID && <GameDetails pathID={pathID} />}{" "}
        </AnimatePresence>
        {search ? (
          <div className="searched">
            <h2>Search Games</h2>
            <Games>
              {search.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                />
              ))}
            </Games>
          </div>
        ) : (
          ""
        )}
        {/**Up Coming */}
        <h1>Up Coming</h1>
        <Game>
          {upComing.map((game) => (
            <Games
              name={game.name}
              image={game.background_image}
              released={game.released}
              key={game.id}
              id={game.id}
            />
          ))}
        </Game>
        {/**popula */}
        <h1>Popular Games</h1>
        <Game>
          {popular.map((game) => (
            <Games
              name={game.name}
              image={game.background_image}
              released={game.released}
              key={game.id}
              id={game.id}
            />
          ))}
        </Game>
        {/**newGames */}
        <h1>New Games</h1>
        <Game>
          {newGames.map((game) => (
            <Games
              name={game.name}
              image={game.background_image}
              released={game.released}
              key={game.id}
              id={game.id}
            />
          ))}
        </Game>
      </LayoutGroup>
    </Gamelist>
  );
};

//Styled
const Gamelist = styled(motion.div)`
  padding: 0 5rem;
  h1 {
    padding: 5rem 0;
  }
`;
const Game = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(550px, 1fr));
  gap: 4rem;
  min-height: 80vh;
`;
export default Home;
