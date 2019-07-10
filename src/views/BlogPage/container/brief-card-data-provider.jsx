import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const withData = WrappedComponent => {
  const propTypes = {
    date: PropTypes.string.isRequired
  };

  const Container = props => {
    const { date, ...res } = props;
    const formatedDate = useMemo(() => {
      const dateYear = date.replace(/T.*/, '');
      return dateYear;
    }, [date]);
    return <WrappedComponent {...res} date={formatedDate} />;
  };

  Container.propTypes = propTypes;

  const mapState = (state, ownProps) => ({
    ...state.blog.blogById[ownProps.id]
  });

  const Wrapper = connect(mapState)(Container);

  return Wrapper;
};

export default withData;
