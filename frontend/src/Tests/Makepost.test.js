import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import MakePost from '../Components/MakePost';

describe('<MakePost />', () => {
    it('renders without crashing', () => {
      const wrapper = shallow(<MakePost />)
    });

})