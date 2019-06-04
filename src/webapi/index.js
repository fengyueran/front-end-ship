import axios from 'axios';

const client = (() => {
  const getQuestions = async () => {
    try {
      const { data } = await axios({
        method: 'get',
        url: `${process.env.SERVICE_URL}/questions/all`
      });
      return data;
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  const getQuestionHtml = async id => {
    try {
      const { data } = await axios({
        method: 'get',
        url: `${process.env.SERVICE_URL}/question/${id}`
      });
      return data;
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  const getWebsites = async () => {
    try {
      const { data } = await axios({
        method: 'get',
        url: `${process.env.SERVICE_URL}/websites/all`
      });
      return data;
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  return {
    getQuestions,
    getQuestionHtml,
    getWebsites
  };
})();

export default client;
