import client from 'src/webapi';

const defaultState = {
  blogById: {},
  blogIds: [],
  currentBlog: null
};
const blog = {
  state: defaultState,
  reducers: {
    initBlogs: (state, data) => {
      if (data) {
        const { allIds, byId } = data;
        return { ...state, blogById: byId, blogIds: allIds };
      }
      return state;
    },
    updateBlogParam: (state, params) => ({
      ...state,
      ...params
    }),
    setCurrentBlog: (state, id) => {
      const { blogById } = state;
      const currentBlog = blogById[id];
      return { ...state, currentBlog };
    }
  },
  effects: () => ({
    getBlogHtml(id, state) {
      client.getBlogHtml(id).then(data => {
        if (data) {
          const { blogById } = state.blog;
          let currentBlog = blogById[id];
          currentBlog = { ...currentBlog, blog: data };
          blogById[id] = currentBlog;
          this.updateBlogParam({
            blogById,
            currentBlog
          });
        }
      });
    },
    searchBlog: (blogTitle, state) => {
      const { blogById } = state.blog;
      const ids = Object.keys(blogById);
      const target = [];
      for (let i = 0; i < ids.length; i += 1) {
        const key = ids[i];
        const { id, title } = blogById[key];
        if (title.includes(blogTitle)) {
          target.push(id);
        }
      }
      return target;
    }
  })
};

export default blog;
