import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import Recipe from '../Components/Recipe';

describe('<Recipe />', () => {
    it('renders without crashing', () => {
      const wrapper = shallow(<Recipe />)
    });

})