import { rgba } from 'polished';

const colorTitle = rgba('white', 0.57);
const colorContent = rgba('white', 0.96);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // Setting an id to this theme
  id: 'dark',

  // Font Family
  fontFamily: 'Poppins',

  // Properties of a Card
  cardHeight: '7rem',
  cardWidth: '33rem',
  cardBorderRadius: '1rem',
  colorCardBackground: '#1B1B1B',

  // Properties of Card Label
  cardLabelFontSize: '1.2rem',
  cardLabelColor: colorTitle,
  cardLabelPaddingLeft: '2rem',
  // cardTitlePaddingTop: "2rem",
  // cardTitlePaddingRight: "2rem",
  // cardTitlePaddingBottom: "2rem",
  // cardTitlePaddingLeft: "2rem",

  // Properties of Card Value
  cardValueColor: colorContent,
  cardValueFontSize: '2rem',

  // Span of colored circle
  coloredSpanWidth: '1rem',
  coloredSpanHeight: '1rem',
  coloredSpanBorderRadius: '50%',
};
