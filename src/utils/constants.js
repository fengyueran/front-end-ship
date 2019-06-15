export const ROUTES = {
  ROOT: '/',
  QUESTION: '/question',
  BLOG: '/blog',
  COMPONENT: '/component',
  RESOURCE: '/resource',
  ANSWER: '/qustion/answer'
};

export const QUESTION_TYPES = {
  SHORT_ANSWER: 'SHORT_ANSWER',
  CODE: 'CODE'
};

export const TABS_NAME = {
  QUESTION_DESCRIPTION: '题目描述',
  QUESTION_ANSWER: '问题作答',
  REFERENCE_ANSWER: '参考答案'
};

export const NAMES = {
  NEXT_QUESTION: '下一题',
  PRE_QUESTION: '上一题',
  RANDOM_QUESTION: '随机选题',
  EXECUTE: '执行',
  SUBMIT: '提交',
  CONSOLE: '控制台',
  EXECUTE_RESULT: '执行结果',
  SHORT_ANSWER: '简答题',
  CODE: '编程题'
};

export const TABS = {
  SHORT_ANSWER: [TABS_NAME.QUESTION_ANSWER, TABS_NAME.REFERENCE_ANSWER],
  CODE: [TABS_NAME.QUESTION_DESCRIPTION, TABS_NAME.REFERENCE_ANSWER]
};

export const WEBSITE_TYPE = {
  HTML: 'HTML',
  CSS: 'CSS',
  JS: 'JavaScript',
  OTHER: 'Other'
};

export const ICON_CLASS = {
  HTML_CSS_JS: 'fa fa-html5',
  MEDIUM: 'fa fa-medium',
  TOOL: 'fa fa-briefcase',
  OTHER: 'fa fa-paper-plane-o'
};

export const WEBSITE_CARD_COLORS = {
  HTML_CSS_JS: '#4BA3F9',
  MEDIUM: '#6356D4',
  TOOL: '#8FB34C',
  OTHER: '#FD8406'
};

export const OPTIONS = {
  STATUS: '状态',
  TAG: '标签',
  TYPE: '题型'
};

export const TAGS = {
  UNFINISHED: '未完成',
  FINISHED: '已完成'
};

export const FilterItems = [
  { name: OPTIONS.STATUS, items: [TAGS.UNFINISHED, TAGS.FINISHED] },
  {
    name: OPTIONS.TAG,
    multiSelect: true,
    items: ['JavaScript', 'CSS', 'HTML', 'HTTP', '其他']
  },
  { name: OPTIONS.TYPE, items: ['简答题', '编程题', '其他'] }
];
