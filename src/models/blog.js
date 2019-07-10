const defaultState = {
  blogById: {},
  blogIds: []
};
const website = {
  state: defaultState,
  reducers: {
    initBlogs: (state, data) => {
      if (data) {
        const { allIds, byId } = data;
        return { ...state, blogById: byId, blogIds: allIds };
      }
      return state;
    }
  }
};

export default website;
