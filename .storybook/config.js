/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import { configure } from '@storybook/react';

const req = require.context('../src/components/', true, /(_test|_spec)\.jsx$/);

function loadStories() {
    req.keys().forEach(req);
}

configure(loadStories, module);