import React from "react";
import { shallow } from "enzyme";
import LoadingPage from '../../components/LoadingPage';

test('Should reander loading page correctly', () => {
    const wrapper = shallow(<LoadingPage />);
    expect(wrapper).toMatchSnapshot();
});