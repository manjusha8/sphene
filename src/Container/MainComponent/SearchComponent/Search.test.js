// import React from "react";

// import { configure, shallow } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";

// import * as StateContext from "../../Context/StateContext";

// import Search from "./Search";

// configure({ adapter: new Adapter() });

// describe("search component", () => {
//   // const contextValue = { handleInputChange: jest.fn() };
//   // console.log("handle change: ", contextValue);
//   // jest
//   //   .spyOn(StateContext, React.useContext)
//   //   .mockImplementation(() => contextValue);
//   it("should test the search component", () => {
//     const wrapper = shallow(<Search />);
//     expect(wrapper.find(Search).toHaveLength(1));
//     expect(wrapper.find('[data-test="input"]')).toBeDefined();

//     // const event = {
//     //   target: { handleInputChange: jest.fn() },
//     // };

//     // const change = wrapper.find('[data-test="input"]').simulate("change", {
//     //   target: { value: "hello" },
//     // });

//     // except(change).toBeCalledWith("hello");
//   });
// });
