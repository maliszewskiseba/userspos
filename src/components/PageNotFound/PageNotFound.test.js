import React from "react";
import { create } from "react-test-renderer";
import PageNotFound from "./PageNotFound";

describe("Loading PageNotFound component", () => {
  test("it matches the snapshot", () => {
    const component = create(<PageNotFound />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
