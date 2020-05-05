import React from "react";
import GenericButton from "./GenericButton";

import { mount } from "../../../enzyme";

const text = "text";
const state = { clicked: false };
const func = () => {
  state.clicked = true;
};

describe("<GenericButton/>", () => {
  const wrapper = mount(<GenericButton onClickFunc={func} text={text} />);

  it("Should render button properly", () => {
    expect(wrapper.find === true);
  });

  it("Should render properly render text", () => {
    expect(wrapper.find("span").text()).toBe("text");
  });

  it("Using function should change state on click", () => {
    wrapper.simulate("click");
    expect(state.clicked).toBe(true);
  });
});
