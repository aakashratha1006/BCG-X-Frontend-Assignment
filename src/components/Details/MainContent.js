import React, { useState } from 'react';
import styled from 'styled-components';
import Switch from '@mui/material/Switch';
import InfoIcon from '@mui/icons-material/Info';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import FlagIcon from '@mui/icons-material/Flag';
import DetailLineChart from '../Charts/DetailLineChart';

const AccuracyMetric = ({ percentage, color }) => (
  <AccuracyWrapper>
    <VerticalLine color={color} />
    <PercentageText>{percentage}%</PercentageText>
  </AccuracyWrapper>
);

const MainContent = ({ cityData, isSidebarExpanded, onToggleSidebar }) => {
  const [toggleStates, setToggleStates] = useState({
    aiForecast: true,
    finalForecast: true,
    confidenceInterval: false
  });
  const [showHistorical, setShowHistorical] = useState(true);

  const handleToggle = (key) => {
    setToggleStates(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const selectedStack = cityData?.stacks?.find(stack => stack.selected);

  return (
    <MainContainer isSidebarExpanded={isSidebarExpanded}>
      <MainContentWrapper isSidebarExpanded={isSidebarExpanded}>
        <Header isSidebarExpanded={isSidebarExpanded}>
          <HeaderLeft>
            <CollapseButton 
              onClick={onToggleSidebar} 
              isExpanded={isSidebarExpanded}
            >
              {isSidebarExpanded ? 
                <KeyboardDoubleArrowLeftIcon sx={{ fontSize: 16 }} /> : 
                <KeyboardDoubleArrowRightIcon sx={{ fontSize: 16 }} />
              }
            </CollapseButton>
            <WarningIcon>
              <WarningAmberIcon sx={{ color: '#FFD700', fontSize: 20 }} />
            </WarningIcon>
            <Title>Sample Stack</Title>
            <VerticalDivider />
            <StackId>Stack {selectedStack?.stackId}</StackId>
          </HeaderLeft>
          <HeaderRight>
            <ForecastBox>
              <Label>Forecast</Label>
              <Value>{selectedStack?.forecast?.ai || '89%'}</Value>
            </ForecastBox>
            <ForecastBox>
              <Label>Forecast</Label>
              <Value>{selectedStack?.forecast?.final || '80%'}</Value>
            </ForecastBox>
            <FlagIconWrapper>
              <FlagIcon sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: 20 }} />
            </FlagIconWrapper>
          </HeaderRight>
        </Header>

        <ChartSection>
          <TopControls>
            <LeftControls>
              <Label>Forecast Horizon</Label>
              <DropdownContainer>
                <span>Latest Issue</span>
                <KeyboardArrowDownIcon style={{ fontSize: 20, opacity: 0.7 }} />
              </DropdownContainer>
              <InfoIconWrapper>
                <InfoIcon 
                  style={{ 
                    fontSize: 18, 
                    color: '#00E6C3' 
                  }}
                  sx={{ 
                    '& path': {
                      strokeWidth: 1,
                      fill: 'transparent',
                      stroke: '#00E6C3'
                    }
                  }}
                />
              </InfoIconWrapper>
              <VerticalDivider />
            </LeftControls>
            <RightControls>
              <ConfidenceIntervalControl>
                <Switch 
                  checked={toggleStates.confidenceInterval}
                  onChange={() => handleToggle('confidenceInterval')}
                  size="small"
                  sx={{
                    '& .MuiSwitch-track': {
                      backgroundColor: '#ffffff !important',
                      opacity: '0.3 !important'
                    },
                    '& .MuiSwitch-thumb': {
                      backgroundColor: '#ffffff'
                    }
                  }}
                />
                <span>SHOW CONFIDENCE INTERVAL</span>
              </ConfidenceIntervalControl>
            </RightControls>
          </TopControls>

          <HeaderLegendSection>
            <SectionTitles>
              <SectionTitle>HISTORICAL</SectionTitle>
              <SectionTitle color="#00E6C3">FORECAST</SectionTitle>
            </SectionTitles>
            <MetricsContainer>
              <MetricGroup>
                <MetricItem
                  checked={toggleStates.aiForecast}
                  onChange={() => handleToggle('aiForecast')}
                  color="#00E6C3"
                  label="AI Forecast"
                />
                <MetricItem
                  checked={toggleStates.finalForecast}
                  onChange={() => handleToggle('finalForecast')}
                  color="#FFD700"
                  label="Final Forecast"
                />
                <AccuracyMetric percentage={88} color="#00E6C3" />
                <MetricItem
                  checked={showHistorical}
                  onChange={(e) => setShowHistorical(e.target.checked)}
                  color="#ffffff"
                  label="Consumption"
                />
                <AccuracyMetric percentage={80} color="#00E6C3" />
              </MetricGroup>
            </MetricsContainer>
          </HeaderLegendSection>

          <ChartContainer>
            <DetailLineChart 
              data={selectedStack?.quarterlyData || []}
              showAIForecast={toggleStates.aiForecast}
              showFinalForecast={toggleStates.finalForecast}
              showConfidenceInterval={toggleStates.confidenceInterval}
              showHistorical={showHistorical}
            />
          </ChartContainer>
        </ChartSection>

        <DataGrid>
          <DataRow>
            <DataLabel>Data 1</DataLabel>
            {selectedStack?.quarterlyData?.map((data, index) => (
              <DataCell key={index}>{data.historical?.toLocaleString() || '-'}</DataCell>
            ))}
          </DataRow>
          <DataRow>
            <DataLabel>Data 2</DataLabel>
            {selectedStack?.quarterlyData?.map((data, index) => (
              <DataCell key={index}>{data.aiForecast?.toLocaleString() || '-'}</DataCell>
            ))}
          </DataRow>
          <DataRow>
            <DataLabel>Data 3</DataLabel>
            {selectedStack?.quarterlyData?.map((data, index) => (
              <DataCell key={index}>{data.finalForecast?.toLocaleString() || '-'}</DataCell>
            ))}
          </DataRow>
        </DataGrid>
      </MainContentWrapper>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  flex: 1;
  padding: 16px 0 0 24px;
  transition: margin-left 0.3s ease;
  position: relative;

  @media (max-width: 768px) {
    padding: 16px 0 0 16px;
  }
`;

const MainContentWrapper = styled.div`
  padding: 24px;
  position: relative;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px 0;
  position: relative;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 8px;

  @media (max-width: 480px) {
    flex-wrap: wrap;
    gap: 8px;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: auto;
  padding-left: 24px;
`;

const WarningIcon = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  color: white;
  font-size: 24px;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const VerticalDivider = styled.div`
  width: 1px;
  height: 20px;
  background-color: rgba(255, 255, 255, 0.2);
`;

const StackId = styled.div`
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
`;

const ForecastBox = styled.div`
  background-color: #1e2738;
  padding: 8px 16px;
  border-radius: 4px;
  min-width: 140px;
`;

const Label = styled.div`
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
  margin-bottom: 4px;
`;

const Value = styled.div`
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
`;

const FlagIconWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: 8px;
  
  &:hover {
    opacity: 0.8;
  }
`;

const ChartSection = styled.div`
  background: #000000;
  border-radius: 4px;
  padding: 16px;
  margin-top: 16px;

  @media (max-width: 768px) {
    padding: 12px;
  }
`;

const TopControls = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  gap: 16px;
`;

const LeftControls = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;
`;

const InfoIconWrapper = styled.div`  display: flex;
  align-items: center;
  cursor: pointer;
`;

const RightControls = styled.div`
  display: flex;
  align-items: center;
`;

const ConfidenceIntervalControl = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
  margin-left: -8px;
`;

const HeaderLegendSection = styled.div`
  margin: 24px 0;
`;

const SectionTitles = styled.div`
  display: flex;
  gap: 48px;
  margin-bottom: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 8px;
`;

const SectionTitle = styled.h2`
  font-size: 12px;
  color: ${props => props.color || '#ffffff'};
  margin: 0;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

const MetricsContainer = styled.div`
  margin-top: 16px;
`;

const MetricGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const MetricItem = styled(({ checked, onChange, color, label, ...props }) => (
  <div {...props}>
    <SwitchContainer>
      <Switch 
        checked={checked}
        onChange={onChange}
        size="small"
        sx={{ 
          '& .MuiSwitch-track': {
            backgroundColor: '#ffffff !important',
            opacity: '0.3 !important'
          },
          '& .MuiSwitch-thumb': {
            backgroundColor: '#ffffff'
          }
        }}
      />
      <VerticalLine color={color} />
      <MetricLabel>{label}</MetricLabel>
    </SwitchContainer>
  </div>
))`
  display: flex;
  align-items: center;
`;

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const VerticalLine = styled.div`
  width: 3px;
  height: 16px;
  background-color: ${props => props.color};
`;

const MetricLabel = styled.div`
  color: #ffffff;
  font-size: 12px;
  opacity: 0.7;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const AccuracyWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: -12px;
`;

const PercentageText = styled.div`
  color: #ffffff;
  font-size: 12px;
  opacity: 0.7;
`;

const ChartContainer = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 16px;
  background: #000000;
`;

const DataGrid = styled.div`
  margin-top: 24px;
  background: transparent;
  border-radius: 4px;
  padding: 16px;
  color: white;
  overflow-x: auto;

  @media (max-width: 768px) {
    padding: 12px;
  }
`;

const DataRow = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  min-width: 600px;
  
  &:last-child {
    border-bottom: none;
  }
`;

const DataLabel = styled.div`
  padding: 12px;
  min-width: 100px;
  font-weight: 500;

  @media (max-width: 768px) {
    padding: 8px;
    min-width: 80px;
  }
`;

const DataCell = styled.div`
  padding: 12px;
  flex: 1;
  text-align: left;

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const CollapseButton = styled.button`
  position: absolute;
  left: -48px;
  top: 50%;
  transform: translateY(-50%);
  background-color: #00E6C3;
  border: none;
  width: 24px;
  height: 24px;
  border-radius: 0 4px 4px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #000000;
  transition: all 0.3s ease;
  z-index: 1;

  &:hover {
    background-color: #00c4a6;
  }
`;

export default MainContent;
