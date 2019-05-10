import React, { useState, useEffect } from 'react';
import { getDocument } from 'src/webapi';

const withData = WrappedComponent => {
  const Container = () => {
    const [html, setHtml] = useState({ __html: null });

    const getHtml = async () => {
      getDocument().then(htmlObj => {
        setHtml(htmlObj);
      });
    };

    useEffect(() => {
      getHtml();
    }, []);

    return <WrappedComponent html={html} />;
  };
  return Container;
};

export default withData;
