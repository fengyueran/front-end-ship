import React, { useState } from 'react';

const withData = WrappedComponent => {
  const Container = () => {
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
        excuteCode={excuteCode}
        handleCodeChange={handleCodeChange}
      />
    );
  };
  return Container;
};

export default withData;
