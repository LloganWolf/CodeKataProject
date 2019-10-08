import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import RecipeElement from '../Components/RecipeElement';

describe('<RecipeElement />', () => {
    it('renders without crashing', () => {
      const wrapper = shallow(<RecipeElement />)
    });

})