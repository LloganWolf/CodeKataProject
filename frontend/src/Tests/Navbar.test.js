import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import Navbar from '../Components/Navbar';

describe('<Navbar />', () => {
    it('renders without crashing', () => {
      const wrapper = shallow(<Navbar />)
    });

})