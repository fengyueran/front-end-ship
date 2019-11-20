import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

const withData = WrappedComponent => {
  const propTypes = {
    getRef: PropTypes.object.isRequired,
    currentQuestion: PropTypes.object.isRequired
  };

  const Container = ({ getRef, currentQuestion }) => {
    const [result, setResult] = useState();
    const [consoleVisible, setConsoleVisible] = useState(false);

    const executeCode = useCallback(() => {
      try {
        let res = eval(currentQuestion.anwserDraft); //eslint-disable-line
        if (!res) {
          res = 'function should have return value';
        }
        setResult(res);
      } catch (e) {
        setResult(e.message);
      }
      setConsoleVisible(true);
    }, [currentQuestion]);

    useEffect(() => {
      setConsoleVisible(false);
      setResult();
    }, [currentQuestion.number]);

    return (
      <WrappedComponent
        result={result}
        getRef={getRef}
        consoleVisible={consoleVisible}
        executeCode={executeCode}
        toggleConsole={setConsoleVisible}
      />
    );
  };

  Container.propTypes = propTypes;

  return React.memo(Container);
};

export default withData;
