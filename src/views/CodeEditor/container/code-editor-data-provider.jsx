import React, { useState } from 'react';
import PropTypes from 'prop-types';

const withData = WrappedComponent => {
  const propTypes = {
    getRef: PropTypes.object.isRequired
  };

  const Container = ({ getRef }) => {
    const [value, setValue] = useState('//按Tab键补全');
    const [result, setResult] = useState();
    const [isShowConsole, setIsShowConsole] = useState(false);

    const handleCodeChange = v => {
      setValue(v);
    };

    const executeCode = () => {
      const result = eval(value); //eslint-disable-line
      setResult(result);
    };

    const toggleConsole = () => {
      setIsShowConsole(!isShowConsole);
    };

    return (
      <WrappedComponent
        value={value}
        result={result}
        getRef={getRef}
        isShowConsole={isShowConsole}
        executeCode={executeCode}
        toggleConsole={toggleConsole}
        handleCodeChange={handleCodeChange}
      />
    );
  };

  Container.propTypes = propTypes;

  return React.memo(Container);
};

export default withData;
