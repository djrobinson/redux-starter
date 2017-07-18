import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';
import Component1 from '../Component1';

import { specs, describe, it } from 'storybook-addon-specifications';

import {shallow} from 'enzyme';
import expect from 'expect';

const stories = storiesOf('Component1', module);

stories.add('Component1 Story', () => {
    const component1Story = (<Component1 />);
    specs(() => describe('Show a components', () => {
        it('Should show up', () => {
            let output = shallow(component1Story);
            expect(output.find('.component1-block').length).toEqual(1);
        });
    }));
    return component1Story;
});
