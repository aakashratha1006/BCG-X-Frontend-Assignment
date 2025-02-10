import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IconButton } from "@mui/material";
import { Person2Outlined } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import mockData from '../../data/mockData';

const CityDetails = () => {
  const navigate = useNavigate();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const [, setSelectedCity] = useState(null);
  const [cityData, setCityData] = useState(null);

  useEffect(() => {
    // Initialize with the first city and its first stack selected
    const initialCity = mockData[0];
    if (initialCity) {
      setSelectedCity(initialCity);
      setCityData({
        ...initialCity,
        stacks: initialCity.stacks.map((stack, index) => ({
          ...stack,
          selected: index === 0 // Select first stack by default
        }))
      });
    }
  }, []);

  const handleSidebarToggle = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const handleBack = () => {
    navigate('/');
  };

  const handleStackSelect = (stackId) => {
    if (cityData) {
      // Update stacks with new selection
      const updatedStacks = cityData.stacks.map(stack => ({
        ...stack,
        selected: stack.stackId === stackId
      }));

      // Update city data with new stack selection
      setCityData(prevData => ({
        ...prevData,
        stacks: updatedStacks
      }));
    }
  };

  return (
    <DashboardContainer>
      <StyledAppBar>
        <NavbarContent>
          <LeftSection>
            <IconButton 
              color="inherit" 
              size="small"
            >
              <MenuIcon sx={{ fontSize: 20 }} />
            </IconButton>
          </LeftSection>
          <RightSection>
            <IconButton 
              color="inherit"
              size="small"
            >
              <Person2Outlined sx={{ fontSize: 20 }} />
            </IconButton>
          </RightSection>
        </NavbarContent>
      </StyledAppBar>

      <PageLayout>
        <Sidebar
          cityData={cityData}
          isExpanded={isSidebarExpanded}
          onBack={handleBack}
          onStackSelect={handleStackSelect}
        />
        <MainContentWrapper>
          <MainContent 
            cityData={cityData}
            isSidebarExpanded={isSidebarExpanded}
            onToggleSidebar={handleSidebarToggle}
          />
        </MainContentWrapper>
      </PageLayout>
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #1a2233;
`;

const StyledAppBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 48px;
  background-color: #000000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  z-index: 1300;
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 16px;

  .MuiIconButton-root {
    padding: 6px;
    color: rgba(255, 255, 255, 0.87);
    margin-right: 8px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

const PageLayout = styled.div`
  display: flex;
  min-height: calc(100vh - 48px);
  overflow: hidden;
`;

const MainContentWrapper = styled.div`
  flex: 1;
  overflow: auto;

  /* Scrollbar styling */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;

    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }
`;

export default CityDetails;