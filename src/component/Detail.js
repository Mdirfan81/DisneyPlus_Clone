import React from "react";
import styled from "styled-components";

export default function Detail() {
  return (
    <Container>
      <Background>
        <img src="/images/viewers-pixar.png" alt="" />
      </Background>
      <ImageTitle>
        <img src="/images/viewers-pixar.png" alt="" />
      </ImageTitle>
      <ContentMeta>
        <Control>Control</Control>
      </ContentMeta>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  min-height: calc(100vk -250px);
  overflow: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.2vw + 5px);
`;

const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  z-index: -1;
  img {
    width: 100vw;
    height: 100vw;
    @media (max-width: 768px) {
      width: initial;
    }
  }
`;
const ImageTitle = styled.div`
  align-items: flex-end;
  display: flex;
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
