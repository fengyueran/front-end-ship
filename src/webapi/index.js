import axios from 'axios';

const client = (() => {
  const HOST = 'http://localhost:8000';
  const getQuestions = async () => {
    try {
      const { data } = await axios({
        method: 'get',
        url: `${HOST}/questions/all`
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
        url: `${HOST}/question/${id}`
      });
      return data;
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  return {
    getQuestions,
    getQuestionHtml
  };
})();

export default client;
