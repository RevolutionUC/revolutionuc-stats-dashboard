import React from 'react';
import LiveDashboard from '../dashboards/LiveDashboard';
import Tab from '../menus/Tab';
import styled from 'styled-components';
import CheckIcon from '@mui/icons-material/Check';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import Navbar from '../navbar/Navbar';
import {
  LiveDataProvider,
  useLiveData,
} from './../../providers/live-data.provider';

const StyledRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 1rem;
  padding-left: 15rem;
`;

const LivePage = function () {
  const tabButtonProps = {
    forLabel: ['registered', 'confirmed', 'checkedin'],
    textLabel: ['Registered', 'Confirmed', 'Checked In'],
    buttonIcon: [<PersonAddAlt1Icon />, <HowToRegIcon />, <CheckIcon />],
  };

  const { dispatch } = useLiveData();

  return (
    <div>
      <Navbar />
      <StyledRow>
        <Tab
          onClick={(e) => dispatch(e)}
          tabButtonAttributes={tabButtonProps}
        ></Tab>
      </StyledRow>
      <LiveDashboard />
    </div>
  );
};

export function LivePageContainer() {
  return (
    <LiveDataProvider>
      <LivePage />
    </LiveDataProvider>
  );
}
