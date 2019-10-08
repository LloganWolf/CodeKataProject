import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import Header from '../Components/Header';

describe('<Header />', () => {
    it('renders without crashing', () => {
      const wrapper = shallow(<Header />)
    });

})