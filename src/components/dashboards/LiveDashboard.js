import { useMemo } from 'react';
import styled from 'styled-components';
import PieChartCard from '../cards/charts/PieChartCard';
import LineChartCard from '../cards/charts/LineChartCard';
import BadgeFigureCard from '../cards/figures/BadgeFigureCard';
import { useLiveData } from '../../providers/live-data.provider';

const StyledRow = styled.div`
  @media(max-width:1350px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 30rem;
    // align-items: center;
  }
    display: flex;
    justify-content: space-evenly;
    padding-bottom: 1rem;
    padding-left: 15rem;
`;

const getChartData = (data, key) => {
  const entries = Object.entries(data[key]).sort((a, b) =>
    a[0].localeCompare(b[0]),
  );

  return {
    labels: entries.map(([key]) => key),
    data: entries.map(([, value]) => value),
  };
};

const YESTERDAY = new Date(Date.now() - 24 * 60 * 60 * 1000);

const LiveDashboard = function () {
  const { stats, registrants, latticeStats } = useLiveData();

  const ages = getChartData(stats, 'age');
  const genders = getChartData(stats, 'gender');
  const ethnicities = getChartData(stats, 'ethnicity');
  const schools = getChartData(stats, 'school');
  const majors = getChartData(stats, 'major');
  const educationLevels = getChartData(stats, 'educationLevel');
  const registerDates = getChartData(stats, 'registerDate');

  const last24hrs = useMemo(
    () => registrants.filter((r) => r.createdAt >= YESTERDAY).length,
    [registrants],
  );

  return (
    <div>
      <div>
        <StyledRow>
          <BadgeFigureCard
            LabelOne="Registrants"
            ValueOne={stats.total}
            LabelTwo="Last 24 hours"
            ValueTwo={last24hrs}
          />
          <BadgeFigureCard
            LabelOne="Lattice Users"
            ValueOne={latticeStats.visible}
            LabelTwo="Lattice Matches"
            ValueTwo={latticeStats.matches}
          />
        </StyledRow>
      </div>

      <StyledRow>
        {ages.data.length ? (
          <PieChartCard
            cardTitle="Age"
            labelData={ages.labels}
            seriesData={ages.data}
            chartType="donut"
          />
        ) : null}
        {genders.data.length ? (
          <PieChartCard
            cardTitle="Genders"
            labelData={genders.labels}
            seriesData={genders.data}
          />
        ) : null}
        {ethnicities.data.length ? (
          <PieChartCard
            cardTitle="Ethnicities"
            labelData={ethnicities.labels}
            seriesData={ethnicities.data}
            chartType="donut"
          />
        ) : null}
      </StyledRow>

      <StyledRow>
        {schools.data.length ? (
          <PieChartCard
            cardTitle="Schools"
            labelData={schools.labels}
            seriesData={schools.data}
          />
        ) : null}
        {majors.data.length ? (
          <PieChartCard
            cardTitle="Majors"
            labelData={majors.labels}
            seriesData={majors.data}
            chartType="donut"
          />
        ) : null}
        {educationLevels.data.length ? (
          <PieChartCard
            cardTitle="Education Levels"
            labelData={educationLevels.labels}
            seriesData={educationLevels.data}
          />
        ) : null}
      </StyledRow>

      <StyledRow>
        {registerDates.data.length ? (
          <LineChartCard
            cardTitle="Registered on"
            labelData={registerDates.labels}
            seriesData={[
              {
                name: 'Registrants',
                data: registerDates.data,
              },
            ]}
          />
        ) : null}
      </StyledRow>
    </div>
  );
};

export default LiveDashboard;
