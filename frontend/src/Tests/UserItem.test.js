import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import Subscription from '../Components/Subscription';

describe('<Subscription />', () => {
    it('renders without crashing', () => {
      const wrapper = shallow(<Subscription />)
    });

})