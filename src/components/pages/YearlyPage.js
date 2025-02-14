import React from 'react';
import YearlyDashboard from '../dashboards/YearlyDashboard';
import annualData from '../../assets/data/annual/annual';
// import styled from 'styled-components';
import Carousel from '../carousel/Carousel';
import logosData from '../../assets/data/images/logos';
import CarouselItem from '../carousel/CarouselItem';

// const StyledRow = styled.div`
//     display: flex;
//     justify-content: space-evenly;
//     padding-top: 0.8rem;
//     // padding-bottom: 1.3rem;
//     padding-left: 2rem;
// `

const YearlyPage = function (props) {
  return (
    <div>
      <Carousel marginTopCarouselItem="-2rem">
        {Object.keys(logosData).map((key, index) => {
          return (
            <CarouselItem
              key={index}
              src={logosData[key]['imgUrl']}
              alt={logosData[key]['imgAlt']}
            >
              <YearlyDashboard data={annualData[key]}></YearlyDashboard>
            </CarouselItem>
          );
        })}
      </Carousel>
    </div>
  );
};

export default YearlyPage;
