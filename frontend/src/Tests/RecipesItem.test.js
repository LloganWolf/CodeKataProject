import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import { store } from '../Store/configureStore';
import { expect } from 'chai';
import { mount } from 'enzyme';
import RecipesItem from '../Components/RecipesItem';

describe('<App />', () => {
    it('renders without crashing', () => {
      const wrapper = mount(<Provider store={store}><BrowserRouter><RecipesItem /></BrowserRouter></Provider>)
    });
    
})
