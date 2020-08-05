import React from "react";
import renderer from "react-test-renderer";

import Cover from "../../../../../src/containers/app/content/Event/cover";

describe('Cover Component', () => {
  let component;

  beforeEach(() => {
    const props = {
      title: 'bla',
      img: 'https://www.pro-sky.com/images/en/news/news_header_webseite_-49-_342_big.jpg',
      description: 'blabla',
      isLoading: false,
    }
    component = renderer.create(
      <Cover {...props}></Cover>
    );
  });

  it('should render', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});