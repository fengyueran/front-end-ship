import client from 'src/webapi';

import { forEach, filter, find, map, random } from 'lodash-es';
import { OPTIONS, TAGS, NAMES } from 'src/utils/constants';
import { showDialog, closeDialogByName } from 'src/components/Modal';
import Spin from 'src/components/Spin';

const defaultState = {
  currentQuestion: null,
  questionById: {},
  questionIds: [],
  record: {
    unfinished: [],
    finished: []
  },
  isFullScreen: false
};
const question = {
  state: defaultState,
  reducers: {
    initQuestions: (state, data) => {
      if (data) {
        const { record, questions } = data;
        const { allIds, byId } = questions;
        return {
          ...state,
          questionById: byId,
          questionIds: allIds,
          record
        };
      }
      return state;
    },
    updateQuestionParam: (state, params) => ({
      ...state,
      ...params
    })
  },
  effects: () => ({
    nextQuestion(payload, state) {
      const { currentQuestion, questionIds, questionById } = state.question;
      const { number } = currentQuestion;
      if (number < questionIds.length) {
        const id = questionIds[number];
        const targetQuestion = questionById[id];
        this.updateQuestionParam({ currentQuestion: targetQuestion });
      }
    },
    preQuestion(payload, state) {
      const { currentQuestion, questionIds, questionById } = state.question;
      const { number } = currentQuestion;
      if (number >= 2) {
        const id = questionIds[number - 2];
        const targetQuestion = questionById[id];
        this.updateQuestionParam({ currentQuestion: targetQuestion });
      }
    },
    randomQuestion(payload, state) {
      const { questionIds, questionById } = state.question;
      const number = random(0, questionIds.length - 1);
      const id = questionIds[number];
      const targetQuestion = questionById[id];
      this.updateQuestionParam({ currentQuestion: targetQuestion });
    },
    getQuestionData(payload, state) {
      const { id, type } = payload;
      let getData = client.getQuestionHtml;
      if (type === 'answer') getData = client.getAnswerHtml;
      getData(id).then(data => {
        if (data) {
          const { questionById } = state.question;
          let currentQuestion = questionById[id];
          currentQuestion = { ...currentQuestion, [type]: data };
          questionById[id] = currentQuestion;
          this.updateQuestionParam({
            questionById,
            currentQuestion
          });
        }
      });
    },
    toggleFullScreen(payload, state) {
      const { isFullScreen } = state.question;
      this.updateQuestionParam({ isFullScreen: !isFullScreen });
    },
    submitQuestion(id, state) {
      const { record, questionById } = state.question;
      showDialog({ component: Spin, name: 'spin' });
      client.submitQuestion(id).then(isSuccess => {
        if (isSuccess) {
          const currentQuestion = questionById[id];
          const index = record.finished.indexOf(id);
          if (index < 0) {
            record.finished.push(currentQuestion);
            this.updateQuestionParam(record);
          }
        }
        closeDialogByName('spin');
      });
    },
    filterQuestionsByTag(selectedTags, state) {
      const { questionIds, questionById, record } = state.question;
      let filteredData = map(questionIds, id => questionById[id]);
      forEach(selectedTags, (tags, key) => {
        switch (key) {
          case OPTIONS.STATUS:
            if (tags.indexOf(TAGS.FINISHED) >= 0) {
              filteredData = record.finished;
              filteredData = map(filteredData, id => questionById[id]);
            } else if (tags.indexOf(TAGS.UNFINISHED) >= 0) {
              filteredData = filter(
                filteredData,
                ({ id }) => record.finished.indexOf(id) < 0
              );
            }
            break;
          case OPTIONS.TAG:
            if (tags.length > 0) {
              filteredData = filter(filteredData, ({ tags: questionTags }) => {
                for (let i = 0; i < questionTags.length; i++) {
                  const currentTag = questionTags[i];
                  const found = find(tags, tag => currentTag === tag);
                  if (found) return true;
                }
                return false;
              });
            }
            break;
          case OPTIONS.TYPE:
            if (tags.length > 0) {
              filteredData = filter(
                filteredData,
                ({ type }) => NAMES[type] === tags[0]
              );
            }
            break;
          default:
        }
      });

      return filteredData;
    },
    updateAnswer(payload, state) {
      const { id, anwserDraft } = payload;
      const { questionById } = state.question;
      let currentQuestion = questionById[id];
      currentQuestion = { ...currentQuestion, anwserDraft };
      questionById[id] = currentQuestion;
      this.updateQuestionParam({
        questionById,
        currentQuestion
      });
    }
  })
};

export default question;
