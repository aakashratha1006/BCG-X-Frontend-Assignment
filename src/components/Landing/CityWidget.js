import React from "react";
import styled from "styled-components";
import CustomLineChart from "../Charts/CustomLineChart";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useNavigate } from "react-router-dom";

const CityWidget = ({ city }) => {
  const navigate = useNavigate();
  
  if (!city) return null;

  const handleClick = () => {
    navigate(`/city/${city.id}`);
  };

  return (
    <Card onClick={handleClick}>
      <CityName>{city.name}</CityName>

      {/* First Forecast Block */}
      <ForecastBlock>
        <ForecastLabel>Forecast</ForecastLabel>
        <Row>
          <ValueSection>
            <Value>{city.value1}</Value>
          </ValueSection>
          <ChartSection>
            <MiniChart><CustomLineChart data={city.data1 || []} /></MiniChart>
            {city.trend1 === "up" ? <TrendUp /> : <TrendDown />}
          </ChartSection>
        </Row>
      </ForecastBlock>

      {/* Second Forecast Block */}
      <ForecastBlock>
        <ForecastLabel>Forecast</ForecastLabel>
        <Row>
          <ValueSection>
            <Value>{city.value2}</Value>
          </ValueSection>
          <ChartSection>
            <MiniChart><CustomLineChart data={city.data2 || []} /></MiniChart>
            {city.trend2 === "up" ? <TrendUp /> : <TrendDown />}
          </ChartSection>
        </Row>
      </ForecastBlock>
    </Card>
  );
};

const ForecastBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0; /* Removed vertical spacing */
`;

const ForecastLabel = styled.div`
  font-size: 12px;
  color: #FFFFFF; /* Pure white with full opacity */
  text-shadow: 0 0 1px rgba(255, 255, 255, 0.5); /* Added subtle glow for more brightness */
  margin-bottom: 4px; /* Minimal spacing */
`;

const CityName = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: white;
  margin-bottom: 5px;
`;

const Card = styled.div`
  width: 240px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;

  &:hover {
    filter: brightness(1.1);
    box-shadow: 0px 0px 15px rgba(30, 144, 255, 0.2); /* Subtle blue glow matching the gradient */
    border-image-source: linear-gradient(to bottom, #1e90ff, #00ff7f);
    border-image-slice: 1;
  }

  @media (max-width: 1199px) and (min-width: 768px) {
    width: calc(50% - 15px);
    max-width: 280px;
  }

  @media (max-width: 767px) {
    width: 100%;
    max-width: 280px;
  }

  height: 160px;
  padding: 15px;
  background: transparent;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.1);
  border: 2px solid;
  border-image-source: linear-gradient(to bottom, #1e90ff, #00ff7f);
  border-image-slice: 1;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* Changed to space-between for better distribution */
  width: 100%;
`;

const ValueSection = styled.div`
  min-width: 80px; /* Increased for more spacing */
  margin-right: auto; /* Pushes the rest to the right */
`;

const ChartSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px; /* Increased from 2px to 8px */
  margin-left: auto;
`;

const Value = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: white;
`;

const MiniChart = styled.div`
  width: 60px;
  height: 35px;
`;

const TrendUp = styled(ArrowUpwardIcon)`
  color: green;
  font-size: 16px;
  margin-left: 0; /* Removed negative margin */
`;

const TrendDown = styled(ArrowDownwardIcon)`
  color: red;
  font-size: 16px;
  margin-left: 0; /* Removed negative margin */
`;

export default CityWidget;