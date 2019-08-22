import React, { useState } from 'react';
import PropTypes from 'prop-types';

const withData = WrappedComponent => {
  const propTypes = {
    getRef: PropTypes.object.isRequired,
    currentQuestion: PropTypes.object.isRequired
  };

  const Container = ({ getRef, currentQuestion }) => {
    const [result, setResult] = useState();
    const [isShowConsole, setIsShowConsole] = useState(false);

    const executeCode = () => {
      try {
        let res = eval(currentQuestion.anwserDraft); //eslint-disable-line
        if (!res) {
          res = 'function should have return value';
        }
        setResult(res);
      } catch (e) {
        setResult(e.message);
      }
      setIsShowConsole(true);
    };

    return (
      <WrappedComponent
        result={result}
        getRef={getRef}
        isShowConsole={isShowConsole}
        executeCode={executeCode}
        toggleConsole={setIsShowConsole}
      />
    );
  };

  Container.propTypes = propTypes;

  return React.memo(Container);
};

export default withData;
