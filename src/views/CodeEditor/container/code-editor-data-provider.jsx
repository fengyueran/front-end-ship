import React, { useState } from 'react';
import PropTypes from 'prop-types';

const withData = WrappedComponent => {
  const propTypes = {
    getRef: PropTypes.object.isRequired
  };

  const Container = ({ getRef }) => {
    const [value, setValue] = useState('//按Tab键补全');
    const [result, setResult] = useState();

    const handleCodeChange = v => {
      setValue(v);
    };

    const excuteCode = () => {
      const result = eval(value); //eslint-disable-line
      setResult(result);
    };

    return (
      <WrappedComponent
        value={value}
        result={result}
        getRef={getRef}
        excuteCode={excuteCode}
        handleCodeChange={handleCodeChange}
      />
    );
  };

  Container.propTypes = propTypes;

  return React.memo(Container);
};

export default withData;
