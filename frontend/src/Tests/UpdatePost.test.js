import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import RecipesItem from '../Components/RecipesItem';

describe('<RecipesItem />', () => {
    it('renders without crashing', () => {
      const wrapper = shallow(<RecipesItem />)
    });

})