import * as API from "../_DATA";

export const REQUEST_QUESTIONS = 'REQUEST_QUESTIONS';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const REQUEST_QUESTIONS_ERROR = 'REQUEST_QUESTIONS_ERROR';

export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_QUESTION_ERROR = 'ADD_QUESTION_ERROR';

export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const ANSWER_QUESTION_ERROR = 'ANSWER_QUESTION_ERROR';
export const DELETE_QUESTION = 'DELETE_QUESTION';
export const DELETE_QUESTION_ERROR = 'DELETE_QUESTION_ERROR';



const _requestQuestions = () => {
  return {
    type: REQUEST_QUESTIONS
  }
}

const _receiveQuestions = (questions) => {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

const _requestQuestionsError = () => {
  return {
    type: REQUEST_QUESTIONS_ERROR
  }
}

const _addQuestion = (question) => {
  return {
    type: ADD_QUESTION,
    question
  }
}

const _addQuestionError = () => {
  return {
    type: ADD_QUESTION_ERROR
  }
}

const _answerQuestion = (user, qid, answer) => {
  return {
    type: ANSWER_QUESTION,
    authedUser: user, 
    quid: qid, 
    answer: answer
  }
}

const _answerQuestionError = () => {
  return {
    type: ANSWER_QUESTION_ERROR
  }
}

const _deleteQuestion = (question)  => {
  return {
    type: DELETE_QUESTION,
    question
  }
}

const _deleteQuestionError = () => {
  return {
    type: DELETE_QUESTION_ERROR
  }
}

export const getQuestions = async (dispatch) => {
  dispatch(_requestQuestions());

  try {
    const response = await API._getQuestions();
    dispatch(_receiveQuestions(response));

  } catch (error) {
    dispatch(_requestQuestionsError());

  }

}

export const addQuestion = async (question, dispatch) => {
  dispatch(_addQuestion(question));
  try {
    const response = await API._saveQuestion(question);
  } catch (error) {
    dispatch(_addQuestionError());

  }

}

export const answerQuestion = async (user, qid, answer, dispatch) => {
  dispatch(_answerQuestion(user, qid, answer));
  try {
    const response = await API._saveQuestionAnswer({ 
      authedUser: user, 
      qid, 
      answer 
    });
  } catch (error) {
    dispatch(_answerQuestionError());

  }

}

export const deleteQuestion = async (question, dispatch) => {
  dispatch(_deleteQuestion(question));
  try {
    const response = await API._deleteQuestion(question);
  } catch (error) {
    dispatch(_deleteQuestionError());

  }

}