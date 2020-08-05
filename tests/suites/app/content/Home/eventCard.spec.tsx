import React from "react";
import renderer from "react-test-renderer";

import EventCard from "../../../../../src/containers/app/content/home/eventCard";

describe('NavBar Component', () => {
  let component;

  beforeEach(() => {
    const props = {
      event: {
        id: 0,
        title: 'bla',
        img: 'https://www.pro-sky.com/images/en/news/news_header_webseite_-49-_342_big.jpg',
        description: 'blabla',
      },
      isLoading: false,
      onEventClick: jest.fn(),
    }
    component = renderer.create(
      <EventCard {...props}></EventCard>
    );
  });

  it('should render', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});