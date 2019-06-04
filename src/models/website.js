const defaultState = {
  websiteById: {},
  websiteIds: []
};
const website = {
  state: defaultState,
  reducers: {
    initWebsites: (state, data) => {
      if (data) {
        const { allIds, byId } = data;
        return { ...state, websiteById: byId, websiteIds: allIds };
      }
      return state;
    }
  }
};

export default website;
