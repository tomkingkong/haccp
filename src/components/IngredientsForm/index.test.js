import React from 'react';
import { shallow } from 'enzyme';

import { IngredientsForm } from '.';

describe('IngredientsForm Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<IngredientsForm ingredients={[]}/>);
    expect(wrapper).toMatchSnapshot();
  });
});