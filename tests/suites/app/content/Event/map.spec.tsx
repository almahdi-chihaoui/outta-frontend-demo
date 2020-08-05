import React from "react";
import renderer from "react-test-renderer";

import Map from "../../../../../src/containers/app/content/Event/map";

describe('Map Component', () => {
  let component;

  beforeEach(() => {
    component = renderer.create(
      <Map></Map>
    );
  });

  it('should render', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});