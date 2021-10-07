import styled, { createGlobalStyle } from "styled-components";

const Colors = {
  accentColor: "#4285F4",
  primaryTextColor: "#EDEFEF",
  textPrimaryColor: "#FFFFFF",
  lightPrimaryColor: "#96DDF9",
};

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
}
html {
  min-height: 100vh;
  position: relative;
}
body {
  margin: unset;
  padding: unset;
  font-family: 'Montserrat', sans-serif !important;
  background: "red";
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Nunito', sans-serif !important;
}
`;

const NavMenu = styled.ul`
  margin: unset;
  padding: 0;
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  & a {
    margin: 10px;
    color: white;
    text-decoration: none;
    font-family: "Nunito", sans-serif;
    font-weight: bold;
    align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
    font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "400")};
  }
`;

const Img = styled.img`
  width: ${(props) => (props.width ? props.width : "450px")};
  height: ${(props) => (props.height ? props.height : "300px")};
  border-radius: ${(props) => (props.radius ? props.radius : "0")};
  border: ${(props) => (props.border ? props.border : "none")};
  align-self: ${(props) => (props.self ? props.self : "center")};
  margin: ${(props) => (props.margin ? props.margin : "auto")};
  position: ${(props) => (props.position ? props.position : "unset")};
  background-color: ${(props) =>
    props.background ? props.background : "transparent"};
  cursor: ${(props) => (props.cursor ? props.cursor : "unset")};
  float: ${(props) => (props.float ? props.float : "none")};
`;

export { Colors, GlobalStyle, Img, NavMenu };
