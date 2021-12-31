import styled from 'styled-components';
import BarChartCard from '../cards/charts/BarChartCard';
import PieChartCard from '../cards/charts/PieChartCard';
import IconFigureCard from '../cards/figures/IconFigureCard';
import BadgeFigureCard from '../cards/figures/BadgeFigureCard';
import SchoolIcon from '@mui/icons-material/School';
import FemaleIcon from '@mui/icons-material/Female';
import PublicIcon from '@mui/icons-material/Public';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ForumIcon from '@mui/icons-material/Forum';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { useLiveData } from '../../providers/live-data.provider';

const StyledRow = styled.div`
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

const LiveDashboard = function () {
  const { stats } = useLiveData();

  const schools = stats.schools ? Object.entries(stats.schools) : [];

  const ages = getChartData(stats, 'age');
  const genders = getChartData(stats, 'gender');
  const ethnicities = getChartData(stats, 'ethnicity');

  return (
    <div>
      <StyledRow>
        <BadgeFigureCard LabelOne="Registrants" ValueOne={stats.total} />
        <IconFigureCard
          cardTitle="Schools"
          cardValue={schools.length}
          Icon={<SchoolIcon sx={{ fontSize: 60, color: 'white' }} />}
        />
        <IconFigureCard
          cardTitle="Majors"
          cardValue={1}
          Icon={<AutoAwesomeIcon sx={{ fontSize: 60, color: 'white' }} />}
        />
      </StyledRow>

      <StyledRow>
        <IconFigureCard
          cardTitle="Countries"
          cardValue={1}
          Icon={<PublicIcon sx={{ fontSize: 60, color: 'white' }} />}
        />
        <IconFigureCard
          cardTitle="Lattice"
          cardValue={1}
          Icon={<PeopleAltIcon sx={{ fontSize: 60, color: 'white' }} />}
        />
        <IconFigureCard
          cardTitle="Females"
          cardValue={1}
          Icon={<FemaleIcon sx={{ fontSize: 60, color: 'white' }} />}
        />
        <IconFigureCard
          cardTitle="Discord"
          cardValue={1}
          Icon={<ForumIcon sx={{ fontSize: 60, color: 'white' }} />}
        />
      </StyledRow>

      <StyledRow>
        {ages.data.length ? (
          <BarChartCard
            cardTitle="Age"
            labelData={ages.labels}
            seriesData={ages.data}
          />
        ) : null}
        {genders.data.length ? (
          <PieChartCard
            cardTitle="Genders"
            chartType={'pie'}
            labelData={genders.labels}
            seriesData={genders.data}
          />
        ) : null}
        {ethnicities.data.length ? (
          <BarChartCard
            cardTitle="Ethnicities"
            labelData={ethnicities.labels}
            seriesData={ethnicities.data}
          />
        ) : null}
      </StyledRow>
    </div>
  );
};

export default LiveDashboard;
