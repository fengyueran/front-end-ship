import { createTransform } from 'redux-persist';

const appModelTransform = createTransform(
  inboundState => inboundState,
  outboundState => ({
    ...outboundState,
    isFullScreen: false
  }),
  { whitelist: ['question'] }
);

export default appModelTransform;
