import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import NotFound from '../Components/NotFound';

describe('<NotFound />', () => {
    it('renders without crashing', () => {
      const wrapper = shallow(<NotFound />)
    });

})