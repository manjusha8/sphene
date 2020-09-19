import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Footer from "../Footer";

configure({ adapter: new Adapter() });

describe("Palette Compnenet", () => {
  it("should test the Footer Snapshot ", () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper).toMatchSnapshot();
  });
});
