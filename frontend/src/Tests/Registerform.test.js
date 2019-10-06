import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import Registerform from '../Components/Registerform';

describe('<Registerform />', () => {
    it('renders without crashing', () => {
      const wrapper = shallow(<Registerform />)
    });

})