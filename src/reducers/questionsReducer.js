import {
  REQUEST_QUESTIONS,
  RECEIVE_QUESTIONS,
  REQUEST_QUESTIONS_ERROR,
  ADD_QUESTION,
  ADD_QUESTION_ERROR,
  ANSWER_QUESTION,
  ANSWER_QUESTION_ERROR,
  DELETE_QUESTION
} from "../actions/questionActions";


const initialState = {
  questions: {},
  loading: false,
  error: false,
  errorMessage: null
};

const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_QUESTIONS:
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: null
      };
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        questions: action.questions,
        loading: false,
        error: false,
        errorMessage: null
      };
    case REQUEST_QUESTIONS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: "Error loading questions"
      };
    case ADD_QUESTION:
      return {
        ...state,
        questions: [...state.questions, action.question]
      };
    case ADD_QUESTION_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: "Error adding question"
      };
    case ANSWER_QUESTION:
      return {
        ...state,
        questions: {
          ...state.questions,
          [action.qid]: {
            ...state.questions[action.qid],
            [action.answer]: {
              ...state.questions[action.qid][action.answer],
              votes: state.questions[action.qid][action.answer].votes.concat([action.authedUser])
            }
          }
        }
      };
    case ANSWER_QUESTION_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: "Error answering question"
      };
    case DELETE_QUESTION:
      return {
        ...state,
        questions: state.questions.filter(question => question.id !== action.question.id)
      };
    default:
      return state;
  }
}

export default questionsReducer;