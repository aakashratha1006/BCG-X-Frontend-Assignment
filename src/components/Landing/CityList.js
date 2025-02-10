import React from "react";
import styled from "styled-components";
import CityWidget from "./CityWidget";
import mockData from "../../data/mockData";

const CityList = () => {
  return (
    <Container> 
      <ResponsiveWrapper>
        {mockData.map((city) => (
          <CityWidget key={city.id} city={city} />
        ))}
      </ResponsiveWrapper>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 20px;
  width: 100%;
  overflow-x: hidden;
`;

const ResponsiveWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  flex-wrap: wrap;

  /* Desktop and Laptop */
  @media (min-width: 1200px) {
    flex-wrap: nowrap;
    overflow-x: auto;
  }

  /* Tablet */
  @media (max-width: 1199px) and (min-width: 768px) {
    justify-content: center;
    gap: 15px;
  }

  /* Mobile */
  @media (max-width: 767px) {
    justify-content: center;
    gap: 15px;
  }
`;

export default CityList;




