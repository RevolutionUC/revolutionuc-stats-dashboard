import React from 'react';
import LineChartCard from '../cards/charts/LineChartCard';
import styled from 'styled-components';

const StyledRow = styled.div`
  display: flex;
  padding-top: 5rem;
  justify-content: center;
  padding-left: 15rem;
  flex-direction: row;
`;

const TrendsParticipationChart = function (props) {
  return (
    <div>
      <StyledRow>
        <LineChartCard
          cardTitle="Experience"
          cardLabel="Hackathons"
          cardValue="10"
          labelData={props.data.seriesHackCategories}
          seriesData={[
            {
              name: 'Registrants',
              data: props.data.seriesRegistrants,
            },
            {
              name: 'Participants',
              data: props.data.seriesParticipants,
            },
            {
              name: 'Submissions',
              data: props.data.seriesSubmissions,
            },
            {
              name: 'Sponsors',
              data: props.data.seriesSponsors,
            },
          ]}
        ></LineChartCard>
      </StyledRow>
    </div>
  );
};

export default TrendsParticipationChart;
