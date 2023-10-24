import React, { Fragment } from "react";
//Redux
import { useSelector } from "react-redux";
//React Router
import { useNavigate } from "react-router-dom";
// // styled ans Animarion
import styled from "styled-components";
import { motion } from "framer-motion";
import { smallImage } from "../api/utli";
//IMAGES
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
//Star Images
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

const GameDetails = ({ pathID }) => {
  //Data fatech
  const { screen, game, isLoading } = useSelector((state) => state.details);
  const navigate = useNavigate();
  //handel Exit from detail card
  // console.log(typeof pathID);
  const exitHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("showDetails")) {
      document.body.style.overflow = "auto";
      navigate("/");
    }
  };
  //Get Stars
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" key={i} src={starFull}></img>);
      } else {
        stars.push(<img alt="star" key={i} src={starEmpty}></img>);
      }
    }
    return stars;
  };

  //GET Platfom Images
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

  return (
    <Fragment>
      {!isLoading && (
        <CardShadow className="showDetails" onClick={exitHandler}>
          <Detail layout={pathID}>
            {/**Stats */}
            <Stats>
              <div className="rating">
                <h3>{game.name}</h3>
                <p>Rating: {game.rating}</p>
                {getStars()}
              </div>
              <Info>
                <h3>Platforms</h3>

                <Platforms>
                  {game.platforms.map((data) => (
                    <img
                      alt={data.platform.name}
                      key={data.platform.id}
                      src={getPlatform(data.platform.name)}
                    ></img>
                  ))}
                </Platforms>
              </Info>
            </Stats>

            {/**media */}
            <Media>
              <img
                src={smallImage(game.background_image, 1280)}
                alt={game.background_image}
              />
            </Media>

            {/**Description */}
            <Description>
              <p>{game.description_raw}</p>
            </Description>

            {/**gallery */}
            <Gallery>
              {screen.results.map((screen) => (
                <img
                  src={smallImage(screen.image, 1280)}
                  key={screen.id}
                  alt={screen.image}
                />
              ))}
            </Gallery>
          </Detail>
        </CardShadow>
      )}
    </Fragment>
  );
};

//Styled
const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }

  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  top: 10%;
  /* bottom: 10%; */
  color: black;
  z-index: 10;
  img {
    width: 100%;
    border-radius: 0.5rem;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  h3 {
    padding-right: 1rem;
  }
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;
const Gallery = styled(motion.div)`
  img {
    margin: 2rem 0rem;
    border-radius: 0.5rem;
  }
`;

export default GameDetails;
