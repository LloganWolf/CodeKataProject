import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import { store } from '../Store/configureStore';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Header from '../Components/Header';

describe('<App />', () => {
    it('renders without crashing', () => {
      const wrapper = mount(<Provider store={store}><BrowserRouter><Header /></BrowserRouter></Provider>)
    });
    
})