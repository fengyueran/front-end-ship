const defaultState = {
  version: 1.0
};
const app = {
  state: defaultState,
  reducers: {
    updateParams: (state, params) => ({ ...state, ...params })
  }
};

export default app;
