import BarChartCard from '../cards/charts/BarChartCard';
import PieChartCard from '../cards/charts/PieChartCard';
import IconFigureCard from '../cards/figures/IconFigureCard';
import BadgeFigureCardLive from '../cards/figures/BadgeFigureCardLive';
import SchoolIcon from '@mui/icons-material/School';
import FemaleIcon from '@mui/icons-material/Female';
import PublicIcon from '@mui/icons-material/Public';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ForumIcon from '@mui/icons-material/Forum';
import styled from 'styled-components';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ConstructionOutlined } from '@mui/icons-material';

const StyledRow = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding-bottom: 1rem;
    padding-left: 15rem;
`

const LiveDashboard = function(props){
    const [registrants, setRegistrants] = useState(null);
    var age = [];
    var seriesAge = [0,0,0,0,0,0,0,0];
    const [schools, setSchool] = useState(null);

    useEffect(() => {
        axios.get('https://revolutionuc-api.herokuapp.com/api/stats/registrants')
            .then(res => {
                setRegistrants(res.data.length);
                for (let i=0; i<res.data.length; i++){
                    age.push(res.data[i].age);
                    console.log('early', age, seriesAge)
                }
                for (let i=0; i<age.length; i++){
                    if (age[i] < "18")
                        seriesAge[0] ++;
                    else if (age[i] === "18")
                        seriesAge[1] ++;
                    else if (age[i] === "19")
                        seriesAge[2] ++;
                    else if (age[i] === "20")
                        seriesAge[3] ++;
                    else if (age[i] == "21")
                        seriesAge[4]++;
                    else if (age[i] === "22")
                        seriesAge[5] ++;
                    else if (age[i] === "23")
                        seriesAge[6] ++;
                    else if (age[i] > "23")
                        seriesAge[7] ++;
                }
                setSchool(res.data.map(registrant => registrant.school).length);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return(
        <div>
            <StyledRow>
                <BadgeFigureCardLive LabelOne="Registrants"
                                ValueOne={registrants}>
                </BadgeFigureCardLive>
                <IconFigureCard cardTitle="Schools" cardValue={schools} Icon={
                                            <SchoolIcon sx={{ fontSize: 60, color: 'white' }}/>
                                            }> 
                </IconFigureCard>
                <IconFigureCard cardTitle="States" cardValue={props.data.numStates} Icon={
                                        <AutoAwesomeIcon sx={{ fontSize: 60, color: 'white' }}/>
                                        }> 
                </IconFigureCard>
            </StyledRow>

            <StyledRow>
                <IconFigureCard cardTitle="Countries" cardValue={props.data.numCountries} Icon={
                                            <PublicIcon sx={{ fontSize: 60, color: 'white' }}/>
                                            }> 
                </IconFigureCard>
                <IconFigureCard cardTitle="Lattice" cardValue={props.data.numUsersLattice} Icon={
                                        <PeopleAltIcon sx={{ fontSize: 60, color: 'white' }}/>
                                        }> 
                </IconFigureCard>
                <IconFigureCard cardTitle="Females" cardValue={props.data.numFemales} Icon={
                                        <FemaleIcon sx={{ fontSize: 60, color: 'white' }}/>
                                        }> 
                </IconFigureCard>
                <IconFigureCard cardTitle="Discord" cardValue={props.data.numUsersDiscord} Icon={
                                        <ForumIcon sx={{ fontSize: 60, color: 'white' }}/>
                                        }> 
                </IconFigureCard>
            </StyledRow>

            <StyledRow>
                {/* <PieChartCard cardTitle="Gender" cardLabel="Count" cardValue="250" chartType={'donut'}></PieChartCard> */}
                <BarChartCard cardTitle="Age" cardLabel="Current" cardValue="18+" labelData={props.data.labelAges} seriesData={seriesAge}></BarChartCard>
                <PieChartCard cardTitle="Education" cardLabel="Majors" cardValue={props.data.numMajors} chartType={'pie'} labelData={props.data.labelMajors} seriesData={props.data.seriesMajors}></PieChartCard>
                <BarChartCard cardTitle="Hackathon Experience" cardLabel="Count" cardValue={props.data.totalHackathons} labelData={props.data.labelHackExperience} seriesData={props.data.seriesHackExperience}></BarChartCard>
            </StyledRow>
        </div>
    );
}

export default LiveDashboard;