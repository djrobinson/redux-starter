import React from 'react';
import PropTypes from 'prop-types';

import './component2.less';

const Component2 = (props) => {
    return (
        <div className="component2-block">
            <h1>Component2</h1>
        </div>
    );
};

Component2.propTypes = {
    test: PropTypes.string
}

export default Component2;
