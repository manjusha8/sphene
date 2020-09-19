import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { redTheme } from "../Theme/Theme";

import Palette from "./Palette";

configure({ adapter: new Adapter() });

describe("Palette Compnenet", () => {
  const props = {
    palette: [
      {
        color: "#d72121",
        theme: redTheme,
        id: 0,
      },
    ],
    themeHandler: jest.fn(),
  };
  it("should test the Color Switcher ", () => {
    const wrapper = shallow(<Palette {...props} />);

    expect(wrapper.find("Button")).toBeDefined();

    const theme = wrapper.find('[data-test="button"]');
    console.log("theme", theme.props());

    theme.props().onClick();
  });
});
