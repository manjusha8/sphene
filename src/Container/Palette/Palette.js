import React, { useEffect } from "react";
import { Wrapper, ColorWrapper, ColorSwitcher, Button } from "./Style";

function Palette(props) {
  return (
    <Wrapper>
      <ColorSwitcher>COLOR SWITCHER</ColorSwitcher>
      <ColorWrapper>
        {props.palette.map((color, index) => (
          <Button
            key={color.id}
            background={color.color}
            onClick={() => props.themeHandler(index)}
          ></Button>
        ))}
      </ColorWrapper>
    </Wrapper>
  );
}

export default Palette;
