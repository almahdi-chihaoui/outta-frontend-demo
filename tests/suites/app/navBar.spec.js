import React from "react"; 
import renderer from "react-test-renderer";
import NavBar from "../../../src/containers/app/navBar";

test('NavBar component renders with h1 text', () => {
    const component = renderer.create(<NavBar></NavBar>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});