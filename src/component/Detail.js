import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import {
  selectRecommend,
  selectNewDisney,
  selectOriginal,
  selectTrending,
} from "../features/movie/movieSlice";
import { useParams } from "react-router-dom";

export default function Detail() {
  const [movieData, setMovieData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  // let movieData = useSelector(selectRecommend)
  const { id } = useParams();
  const detail = id.split("%2B");
  let [movieName, section] = id.split("%2B");
  // console.log(movieName, section);

  var Headline = section[0];
  let Recomment = useSelector(selectRecommend);
  let Trending = useSelector(selectTrending);
  let New = useSelector(selectNewDisney);
  let Original = useSelector(selectOriginal);
  useEffect(() => {
    switch (Headline) {
      case "R": {
        // console.log(data);
        Recomment &&
          Recomment.map((data) => {
            if (data.title == movieName) {
              // console.log(data);
              setMovieData(data);
            }
          });

        break;
      }
      case "N": {
        New &&
          New.map((data) => {
            if (data.title == movieName) {
              console.log(data);
              setMovieData(data);
            }
          });
        break;
      }
      case "O": {
        Original &&
          Original.map((data) => {
            if (data.title == movieName) {
              console.log(data);
              setMovieData(data);
            }
          });
        break;
      }
      case "T": {
        Trending &&
          Trending.map((data) => {
            if (data.title == movieName) {
              console.log(data);
              setMovieData(data);
            }
          });
        break;
      }
      default:
        break;
    }
  }, [id]);

  return (
    // <div>Hello world</div>
    <React.Fragment>
      {movieData ? (
        <Container>
          <Background>
            <img src={movieData.backgroundImg} alt={movieData.title} />
          </Background>
          <ImageTitle>
            <img src={movieData.titleImg} alt={movieData.title} />
          </ImageTitle>
          <ContentMeta>
            <Control>
              <Player>
                <img src="/images/play-icon-black.png" alt="" />
                <span>Play</span>
              </Player>
              <Trailer>
                {/* <img src="/images/play-icon-black.png" alt="" /> */}
                <img src="/images/play-icon-white.png" alt="" />
                <span>Trailer</span>
              </Trailer>
              <AddList>
                <span />
                <span />
              </AddList>
              <GroupWatch>
                <div>
                  <img src="/images/group-icon.png" alt="" />
                </div>
              </GroupWatch>
            </Control>

            <SubTitle>{movieData.subTitle}</SubTitle>
            <Description>{movieData.description}</Description>
          </ContentMeta>
        </Container>
      ) : (
        <h1>Loading</h1>
      )}
    </React.Fragment>
  );
}
const Container = styled.div`
  position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;
  img {
    width: 100vw;
    height: 100vh;
    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const ImageTitle = styled.div`
  align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0px auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;
  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
`;

const Control = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`;

const Player = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb (249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);
  img {
    width: 32px;
  }
  &:hover {
    background: rgb(198, 198, 198);
  }
  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;
    img {
      width: 25px;
    }
  }
`;

const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const AddList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;
    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }
    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }
`;

const GroupWatch = styled.div`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: white;
  div {
    height: 40px;
    width: 40px;
    background: rgb(0, 0, 0);
    border-radius: 50%;
    img {
      width: 100%;
    }
  }
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
