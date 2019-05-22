import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

const withData = WrappedComponent => {
  const propTypes = {
    getRef: PropTypes.object.isRequired
  };

  const Container = ({ getRef }) => {
    const [value, setValue] = useState('//按Tab键补全');
    const [result, setResult] = useState();
    const [isShowConsole, setIsShowConsole] = useState(false);

    const handleCodeChange = useCallback(v => {
      setValue(v);
    }, []);

    const executeCode = useCallback(() => {
      const result = eval(value); //eslint-disable-line
      setResult(result);
    }, [value]);

    return (
      <WrappedComponent
        value={value}
        result={result}
        getRef={getRef}
        isShowConsole={isShowConsole}
        executeCode={executeCode}
        toggleConsole={setIsShowConsole}
        handleCodeChange={handleCodeChange}
      />
    );
  };

  Container.propTypes = propTypes;

  return React.memo(Container);
};

export default withData;
