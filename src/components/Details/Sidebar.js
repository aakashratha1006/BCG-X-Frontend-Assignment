import React from 'react';
import styled from 'styled-components';
import { 
  ArrowBack as ArrowBackIcon,
  MailOutline as MailOutlineIcon,
  FilterList as FilterIcon
} from '@mui/icons-material';
import Checkbox from '@mui/material/Checkbox';

const Sidebar = ({ isExpanded, onBack, cityData, onStackSelect }) => {
  return (
    <SidebarContainer isExpanded={isExpanded}>
      <BackButton onClick={onBack}>
        <ArrowBackIcon sx={{ color: '#00B8D4' }} />
      </BackButton>

      <StepIndicator>
        <StepBox />
        <StepBox active />
        <StepBox />
        <StepBox />
        <StepBox />
      </StepIndicator>

      <SampleStackTitle>Sample Stack</SampleStackTitle>

      <TabContainer>
        <TabList>
          <Tab active>BACKLOG <span>(238)</span></Tab>
          <Tab>PENDING <span>(0)</span></Tab>
          <Tab>FINAL SIGN-OFF <span>(0)</span></Tab>
        </TabList>
      </TabContainer>

      <FilterSection>
        <FilterLabel>Filter</FilterLabel>
        <FilterIcon sx={{ color: '#00B8D4' }} />
      </FilterSection>

      <StacksSection>
        {cityData?.stacks.map((stack) => (
          <StackItem key={stack.stackId}>
            <StackContent>
              <ButtonGroup>
                <CheckboxContainer>
                  <Checkbox
                    checked={stack.selected}
                    onChange={() => onStackSelect(stack.stackId)}
                    sx={{
                      color: 'rgba(255, 255, 255, 0.6)',
                      '&.Mui-checked': {
                        color: 'rgba(255, 255, 255, 0.6)',
                      },
                      padding: '4px',
                    }}
                  />
                </CheckboxContainer>
                <Button>F'CAST STAB.</Button>
                <Button>F'CAST ACC.</Button>
                <MailIconButton>
                  <MailOutlineIcon sx={{ color: '#00B8D4' }} />
                </MailIconButton>
              </ButtonGroup>
              <StackLabel>Sample Stack</StackLabel>
            </StackContent>
          </StackItem>
        ))}
      </StacksSection>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  width: ${props => props.isExpanded ? '360px' : '0px'};
  min-width: ${props => props.isExpanded ? '360px' : '0px'};
  height: calc(100vh - 64px);
  margin-top: 48px;
  background: #1a2233;
  transition: width 0.3s ease;
  overflow: hidden;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  flex-shrink: 0;
  position: relative;
  margin-right: -1px;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  padding: 12px 16px 8px;
  background: none;
  border: none;
  cursor: pointer;
`;

const StepIndicator = styled.div`
  display: flex;
  gap: 8px;
  padding: 0 16px 8px;
  justify-content: flex-start;
  margin-top: -4px;
  margin-left: 32px;
`;

const StepBox = styled.div`
  width: 24px;
  height: 8px;
  background: ${props => props.active ? '#1a73e8' : 'rgba(255, 255, 255, 0.3)'};
  border-radius: 3px;
`;

const SampleStackTitle = styled.div`
  color: white;
  font-size: 16px;
  padding: 0 16px 16px;
  margin-top: -2px;
  margin-left: 24px;
`;

const TabContainer = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  height: 32px;
`;

const TabList = styled.div`
  display: flex;
  height: 100%;
`;

const Tab = styled.div`
  color: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.6)'};
  padding: 8px 16px;
  cursor: pointer;
  font-size: 11px;
  border-bottom: 2px solid ${props => props.active ? '#00B8D4' : 'transparent'};
  display: flex;
  align-items: center;
  gap: 4px;

  span {
    color: ${props => props.active ? '#00B8D4' : 'rgba(255, 255, 255, 0.4)'};
    font-size: 10px;
  }
`;

const FilterSection = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 16px 4px;
`;

const FilterLabel = styled.span`
  color: #00B8D4;
`;

const StacksSection = styled.div`
  padding: 4px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const StackItem = styled.div`
  display: flex;
  gap: 12px;
  padding: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  .MuiCheckbox-root {
    color: rgba(255, 255, 255, 0.6);
    &.Mui-checked {
      color: rgba(255, 255, 255, 0.6);
    }
  }
`;

const StackContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  padding-right: 8px;
`;

const Button = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: rgba(255, 255, 255, 0.6);
  padding: 6px 12px;
  font-size: 12px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const MailIconButton = styled.button`
  background: none;
  border: none;
  color: #00B8D4;
  padding: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: auto;

  &:hover {
    color: white;
  }
`;

const StackLabel = styled.div`
  color: white;
  font-size: 14px;
  padding-left: 40px;
  margin-top: -2px;
`;

export default Sidebar;