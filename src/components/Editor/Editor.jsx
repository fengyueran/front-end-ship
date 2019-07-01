import React from 'react';
import PropTypes from 'prop-types';
import CodeMirror from 'react-codemirror';
import styled from 'styled-components';

import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/javascript-hint';
import 'codemirror/addon/hint/show-hint.css';

const StyledEditor = styled.div`
  flex-grow: 1;
  border-top-width: 0;
  position: relative;
`;

const propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func
};

const Editor = ({ id, value, onChange }) => (
  <StyledEditor>
    <CodeMirror
      value={value}
      key={id}
      options={{
        mode: 'javascript',
        lineNumbers: true,
        lineWrapping: true,
        extraKeys: {
          Tab: 'autocomplete'
        }
      }}
      onChange={onChange}
    />
  </StyledEditor>
);

Editor.propTypes = propTypes;

export default React.memo(Editor);
