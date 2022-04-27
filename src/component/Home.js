import styled from "styled-components";
import React, { useEffect } from "react";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import movieData from "../disneyPlusData.json";
import { useDispatch, useSelector } from "react-redux";
// import db from "../firebase";
import {
  setMovies,
  selectNewDisney,
  selectOriginal,
  selectRecommend,
  selectTrending,
} from "../features/movie/movieSlice";
import { original } from "@reduxjs/toolkit";
import userSlice, { selectUserName } from "../features/user/userSlice";

const Home = (props) => {
  const dispatch = useDispatch();

  const userName = useSelector(selectUserName);
  const newDisney = useSelector(selectNewDisney);
  const original = useSelector(selectOriginal);
  const recommend = useSelector(selectRecommend);
  const trending = useSelector(selectTrending);
  useEffect(() => {
    function addMovies(data) {
      let newMovieArr = [];
      let recommendArr = [];
      let newDisneyArr = [];
      let trendingArr = [];
      // db.collection("movies").onSnapshot((snapshot) => {
      //   snapshot.doc.map((doc) => {
      //     console.log({ doc });
      //   });
      // });
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

      // console.log(recommendArr, newDisneyArr, newMovieArr, trendingArr);
      return [recommendArr, newDisneyArr, newMovieArr, trendingArr];
    }
    let result = addMovies(movieData.movies);
    console.log(result);
    dispatch(
      setMovies({
        recommend: result[0],
        newDisney: result[2],
        original: result[1],
        trending: result[3],
      })
    );
  }, [userName]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends Headline="Recommended for You" data={recommend} />
      <Recommends Headline="New to Disney+" data={newDisney} />
      <Recommends Headline="Originals" data={original} />
      <Recommends Headline="Trending" data={trending} />
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
