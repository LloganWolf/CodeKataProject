import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import Connectionform from '../Components/Connectionform';

describe('<Connectionform />', () => {
    it('renders without crashing', () => {
      const wrapper = shallow(<Connectionform />)
    });

})