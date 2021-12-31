import React from 'react';
import styled from 'styled-components';
import TabButton from '../buttons/TabButton';

const StyledTabRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Tab = function (props) {
  return (
    <div>
      <StyledTabRow>
        <TabButton
          checked
          forLabel={props.tabButtonAttributes.forLabel[0]}
          textLabel={props.tabButtonAttributes.textLabel[0]}
          buttonIcon={props.tabButtonAttributes.buttonIcon[0]}
          onClickDoThis={props.onClick}
        ></TabButton>
        <TabButton
          forLabel={props.tabButtonAttributes.forLabel[1]}
          textLabel={props.tabButtonAttributes.textLabel[1]}
          buttonIcon={props.tabButtonAttributes.buttonIcon[1]}
          onClickDoThis={props.onClick}
        ></TabButton>
        <TabButton
          forLabel={props.tabButtonAttributes.forLabel[2]}
          textLabel={props.tabButtonAttributes.textLabel[2]}
          buttonIcon={props.tabButtonAttributes.buttonIcon[2]}
          onClickDoThis={props.onClick}
        ></TabButton>
      </StyledTabRow>
    </div>
  );
};

export default Tab;
