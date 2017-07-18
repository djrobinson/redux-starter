import React from 'react';
import PropTypes from 'prop-types';

import './component1.less';

const Component1 = (props) => {
    return (
        <div className="component1-block">
            <h1>Component1</h1>
        </div>
    );
};

Component1.propTypes = {
    test: PropTypes.string
}

export default Component1;
