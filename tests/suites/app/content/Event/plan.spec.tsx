import React from "react";
import renderer from "react-test-renderer";

import Plan from "../../../../../src/containers/app/content/Event/plan";

describe('Plan Component', () => {
  let component;

  beforeEach(() => {
    component = renderer.create(
      <Plan></Plan>
    );
  });

  it('should render', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});