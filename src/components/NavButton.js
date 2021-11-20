import react from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from "../styling-properties/propNavButton";

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${(p) => p.theme.buttonHeight};
    width: ${(p) => p.theme.buttonWidth};
    border-radius: ${(p) => p.theme.borderRadius};
    font-size: ${(p) => p.theme.buttonLabelFontSize};
    color: white;
    background-color: black;
`

const NavButton = function(props){
    return(
        <div>
            <ThemeProvider theme={theme}>
                <StyledButton>{props.label}</StyledButton>
            </ThemeProvider>
        </div>
    );
}

export default NavButton;