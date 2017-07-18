import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';
import Component2 from '../Component2';

import { specs, describe, it } from 'storybook-addon-specifications';

import {shallow} from 'enzyme';
import expect from 'expect';

const stories = storiesOf('Component2', module);

stories.add('Component2 Story', () => {
    const component2Story = (<Component2 />);
    specs(() => describe('Show a components', () => {
        it('Should show up', () => {
            let output = shallow(component2Story);
            expect(output.find('.component2-block').length).toEqual(1);
        });
    }));
    return component2Story;
});
