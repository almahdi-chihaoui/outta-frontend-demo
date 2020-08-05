import React from "react";
import renderer from "react-test-renderer";

import Info from "../../../../../src/containers/app/content/Event/info";

describe('Info Component', () => {
  let component;

  beforeEach(() => {
    component = renderer.create(
      <Info></Info>
    );
  });

  it('should render', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});