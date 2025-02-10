import React from "react";
import styled from "styled-components";
import Header from "../components/Landing/Header";
import Navbar from "../components/Navbar";
import CityList from "../components/Landing/CityList";

const LandingPage = () => {
  return (
    <PageContainer>
      <BackgroundImage />
      <Navbar />
      <Header />
      <Wrapper>
        <CityList />
      </Wrapper>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  position: relative;
  min-height: 100vh;
`;

const BackgroundImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/assets/bg-img.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
  opacity: 0.3;
  animation: zoomIn 1.5s ease-out forwards;

  @keyframes zoomIn {
    from {
      transform: scale(1.1);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 0.3;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export default LandingPage;
