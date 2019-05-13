import React, { useState, useEffect } from 'react';
import client from 'src/webapi';

const withData = WrappedComponent => {
  const Container = () => {
    const [html, setHtml] = useState({ __html: null });

    const getHtml = async () => {
      client.getQuestionHtml().then(htmlObj => {
        if (htmlObj.__html) {
          setHtml(htmlObj);
        }
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
