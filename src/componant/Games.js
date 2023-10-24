import React from "react";
//Redux
import { useDispatch } from "react-redux";
import { loadDetalis } from "../reducer/detailsActions";
//React Router
import { Link } from "react-router-dom";
// // styled ans Animarion
import styled from "styled-components";
import { motion } from "framer-motion";
import { smallImage } from "../api/utli";

const Games = ({ name, image, released, id }) => {
  const stringPathId = id.toString();
  const dispatch = useDispatch();

  const loadDetalisHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetalis(id));
    // console.log(typeof stringPathId);
  };

  return (
    <Card layout={stringPathId} onClick={loadDetalisHandler}>
      <Link to={`/games/${id}`}>
        <h3> {name}</h3>
        <p>{released} </p>
        <motion.img
          layout={` img ${stringPathId}`}
          src={smallImage(image, 640)}
          alt={name}
        />
      </Link>
    </Card>
  );
};

//Styled
const Card = styled(motion.div)`
  cursor: pointer;
  min-height: 30vh;
  box-shadow: 0px 5px 25px rgb(0, 0, 0, 0.2);
  border-radius: 1rem;
  text-align: center;
  overflow: hidden;
  cursor: pointer;
  h3 {
    padding-top: 3rem;
  }
  p {
    padding-bottom: 1rem;
  }
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    /* border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem; */
  }
`;

export default Games;
