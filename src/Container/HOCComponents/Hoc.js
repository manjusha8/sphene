import React, { useState } from "react";
import Header from "../CommonComponents/Header";
import Footer from "../CommonComponents/Footer";
import { ThemeProvider } from "styled-components";
import { Settings } from "@material-ui/icons";
import Palette from "../Palette/Palette";
import { PaletteWrapper, SettingIconWrapper } from "../MainComponent/Style";
import {
  redTheme,
  greenTheme,
  orangeTheme,
  blueTheme,
  navyTheme,
  pinkTheme,
  brownTheme,
  yellowTheme,
  lemonTheme,
  creamTheme,
  purpleTheme,
  cyanTheme,
} from "../Theme/Theme";

function Hoc(props) {
  const [theme, setTheme] = useState(redTheme);
  const [buttons] = useState([
    {
      color: "#d72121",
      theme: redTheme,
      id: 0,
    },
    {
      color: "#44b272",
      theme: greenTheme,
      id: 1,
    },
    {
      color: "#fa5b0f",
      theme: orangeTheme,
      id: 2,
    },
    {
      color: "blue",
      theme: blueTheme,
      id: 3,
    },
    {
      color: "#495d7f",
      theme: navyTheme,
      id: 4,
    },
    {
      color: "#d64391",
      theme: pinkTheme,
      id: 5,
    },
    {
      color: "#784e3d",
      theme: brownTheme,
      id: 6,
    },
    {
      color: "#ffb400",
      theme: yellowTheme,
      id: 7,
    },
    {
      color: "#b3c211",
      theme: lemonTheme,
      id: 8,
    },
    {
      color: "#bfa980",
      theme: creamTheme,
      id: 9,
    },
    {
      color: "#917ae9",
      theme: purpleTheme,
      id: 10,
    },
    {
      color: "#37b6bd",
      theme: cyanTheme,
      id: 11,
    },
  ]);

  const [switcher, setSwitcher] = useState(false);

  function colorSwitcherHandler() {
    setSwitcher(!switcher);
  }

  function themeHandler(index) {
    buttons.map((value, key) => {
      if (index === value.id) {
        console.log("color: ", value);
        setTheme(value.theme);
      }
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <Header />
        <PaletteWrapper>
          <SettingIconWrapper>
            <Settings onClick={colorSwitcherHandler} />
          </SettingIconWrapper>
          {switcher ? (
            <Palette palette={buttons} themeHandler={themeHandler} />
          ) : null}
        </PaletteWrapper>
        <div>{props.children}</div>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default Hoc;
