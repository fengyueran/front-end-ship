import { connect } from 'react-redux';

const websiteInfoSelector = (state, id) => {
  const {
    website: { websiteById }
  } = state;
  return websiteById[id];
};

const mapState = (state, ownProps) => ({
  siteInfo: websiteInfoSelector(state, ownProps.id)
});

const withData = WrappedComponent => {
  const Container = connect(mapState)(WrappedComponent);
  return Container;
};

export default withData;
