import React from "react"; 
import { Provider } from 'react-redux';
import renderer from "react-test-renderer";
import configureStore from 'redux-mock-store';

import NavBar from "../../../../src/containers/app/navBar";

const mockStore = configureStore();

describe('NavBar Component', () => {
    let store;
    let component;
   
    beforeEach(() => {
        store = mockStore({
            app: {
                isLoading: false,
            }
        })
        component = renderer.create(
        <Provider store={store}>
            <NavBar></NavBar>
        </Provider>
        );
    });
   
    it('should render', () => {
      expect(component.toJSON()).toMatchSnapshot();
    });
  });