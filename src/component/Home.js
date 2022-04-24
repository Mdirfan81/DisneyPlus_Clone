import styled from "styled-components";
import React, { useEffect } from "react";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import movieData from "../disneyPlusData.json";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";
import { original } from "@reduxjs/toolkit";
import { selectUserName } from "../features/user/userSlice";

const Home = (props) => {
  const dispatch = useDispatch();

  const userName = useSelector(selectUserName);

  useEffect(() => {
    function addMovies(data) {
      let newMovieArr = [];
      let recommendArr = [];
      let newDisneyArr = [];
      let trendingArr = [];
      for (let movie in data) {
        if (data[movie]["type"] === "new") {
          newMovieArr.push(data[movie]);
        } else if (data[movie]["type"] === "recommend") {
          recommendArr.push(data[movie]);
        } else if (data[movie]["type"] === "trending") {
          trendingArr.push(data[movie]);
        } else {
          newDisneyArr.push(data[movie]);
        }
      }
      dispatch(
        setMovies({
          recommend: recommendArr,
          newDisney: newDisneyArr,
          original: newMovieArr,
          trending: trendingArr,
        })
      );
      console.log(recommendArr, newDisneyArr, newMovieArr, trendingArr);
    }
    addMovies(movieData.movies);
  }, [userName]);
  // console.log(movieData.movies);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends
        Headline="Recommended for You"
        url="https://wallpapercave.com/wp/wp8772589.jpg"
      />
      <Recommends
        Headline="New to Disney+"
        url="https://images7.alphacoders.com/973/973877.jpg"
      />
      <Recommends
        Headline="Originals"
        url="https://wallpapercave.com/wp/wp3883316.jpg"
      />
      <Recommends
        Headline="Trending"
        url="https://wallpaper.dog/large/20503666.jpg"
      />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background-image: url("/images/home-background.png");
    background-position: center center;
    background-repeat: repeat;
    background-size: cover;
    background-attachment: fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
export default Home;
