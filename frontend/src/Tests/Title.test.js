import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import Title from '../Components/Title';

describe('<Title />', () => {
    it('renders without crashing', () => {
      const wrapper = shallow(<Title />)
    });

})