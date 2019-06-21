import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

const modalRoot = document.createElement('div');
document.body.appendChild(modalRoot);

Modal.setAppElement(modalRoot);

const customStyles = {
  overlay: {
    backgroundColor: 'none'
  },
  content: {
    background: 'none',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    border: 'none',
    transform: 'translate(-50%, -50%)'
  }
};

const withBaseModal = (WrappedComponent, zIndex = 999) => {
  const styles = {
    overlay: {
      ...customStyles.overlay,
      zIndex
    },
    content: customStyles.content
  };

  const propTypes = {
    show: PropTypes.bool
  };
  const Wrapper = props => {
    const { show } = props;
    return (
      <Modal isOpen={show} style={styles}>
        <WrappedComponent {...props} />
      </Modal>
    );
  };
  Wrapper.propTypes = propTypes;
  return Wrapper;
};

export default withBaseModal;
