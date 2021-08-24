import React from "react";

export const themes = {
  dark: {
    theme: "dark",
    text: "#fff",
    background: "#9F7923",
    sText: '#fff',
    border: '#fff',
    boxBackground: '#C5A14F'
  },
  light: {
    theme: "dark",
    text: "#161616",
    background: "#fff",
    sText: "#161616",
    border: '#000',
    boxBackground: '#C5A14F'
  },
};

const Theme = React.createContext(themes);

export default Theme;
