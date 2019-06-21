import axios from 'axios';

const client = (() => {
  const instance = axios.create({
    baseURL: process.env.SERVICE_URL
  });

  const getData = async route => {
    try {
      const { data } = await instance.get(route);
      return data;
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  const getQuestions = async () => getData('/questions/all');
  const getQuestionHtml = async id => getData(`/question/${id}`);
  const getAnswerHtml = async id => getData(`/answer/${id}`);
  const getWebsites = async () => getData('/websites/all');

  const submitQuestion = async id => {
    try {
      const { data } = await instance.post(`/questiondone/${id}`);
      return data;
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  return {
    getQuestions,
    getQuestionHtml,
    getAnswerHtml,
    getWebsites,
    submitQuestion
  };
})();

export default client;
