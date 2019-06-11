import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

const withData = WrappedComponent => {
  const propTypes = {
    template: PropTypes.string,
    getRef: PropTypes.object.isRequired
  };

  const Container = ({ getRef, template }) => {
    const [value, setValue] = useState(template);
    const [result, setResult] = useState();
    const [isShowConsole, setIsShowConsole] = useState(false);

    const handleCodeChange = useCallback(v => {
      setValue(v);
    }, []);

    const executeCode = () => {
      try {
        const result = eval(value); //eslint-disable-line
        setResult(result);
        setIsShowConsole(true);
      } catch (e) {
        setResult(e.message);
      }
    };

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
