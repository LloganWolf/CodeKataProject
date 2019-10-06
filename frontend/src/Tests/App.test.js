import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import App from '../App';

describe('<App />', () => {
    it('renders without crashing', () => {
      const wrapper = shallow(<App />)
    });
    
})
