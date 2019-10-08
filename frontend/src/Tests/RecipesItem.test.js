import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import UserItem from '../Components/UserItem';

describe('<UserItem />', () => {
    it('renders without crashing', () => {
      const wrapper = shallow(<UserItem />)
    });

})