import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../../themes/propBadgeFigureCard';

const BadgeCard = styled.div`
  height: ${(p) => p.theme.cardHeight};
  width: ${(p) => p.theme.cardWidth};
  border-radius: ${(p) => p.theme.cardBorderRadius};
  background: ${(p) => p.theme.colorCardBackground};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.div`
  color: ${(p) => p.theme.cardLabelColor};
  font-size: ${(p) => p.theme.cardLabelFontSize};
  padding-left: ${(p) => p.theme.cardLabelPaddingLeft};
`;
const Value = styled.div`
  color: ${(p) => p.theme.cardValueColor};
  font-size: ${(p) => p.theme.cardValueFontSize};
`;

const ColoredSpan = styled.span`
  background-color: pink;
  height: ${(p) => p.theme.coloredSpanHeight};
  width: ${(p) => p.theme.coloredSpanWidth};
  border-radius: ${(p) => p.theme.coloredSpanBorderRadius};
`;

const BadgeFigureCard = function (props) {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BadgeCard>
          <Row>
            <ColoredSpan />
            <Column>
              <Label>{props.LabelOne}</Label>
              <Value>{props.ValueOne}</Value>
            </Column>
          </Row>
        </BadgeCard>
      </ThemeProvider>
    </div>
  );
};

export default BadgeFigureCard;
