import { createTransform } from 'redux-persist';

const appModelTransform = createTransform(
  inboundState => inboundState,
  outboundState => outboundState,
  { whitelist: ['app'] }
);

export default appModelTransform;
