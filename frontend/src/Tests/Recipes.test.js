import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import Recipes from '../Components/Recipes';

describe('<Recipes />', () => {
    it('renders without crashing', () => {
      const wrapper = shallow(<Recipes />)
    });

})