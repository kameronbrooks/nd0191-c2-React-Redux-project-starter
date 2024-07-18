import exp from 'constants';
import * as API from './_DATA';

// ===========================================
//        Test the _getUsers function
// ===========================================

describe('_getUsers', () => {
  it('should return an object of users', async () => {
    const result = await API._getUsers();
    expect(result).toBeInstanceOf(Object);
  }, 30000)
})

describe('_getUsers', () => {
  it('should return an object that has properties that have specified fields', async () => {
    const result = await API._getUsers();
    const allHaveProps = Object.values(result).every(user => {
      return (
        user.hasOwnProperty('id') && 
        user.hasOwnProperty('name') && 
        user.hasOwnProperty('avatarURL') && 
        user.hasOwnProperty('answers') && 
        user.hasOwnProperty('questions')
      );
    });
    expect(allHaveProps).toBe(true);

  }, 30000)
})


// ===========================================
//        Test the _saveQuestion function
// ===========================================


describe('_saveQuestion', () => {
  it('should fail if question is missing optionOneText', async () => {
    const question = {
      optionTwoText: 'Option Two',
      author: 'mtsamis'
    };
    await expect(API._saveQuestion(question)).rejects.toEqual('Please provide optionOneText, optionTwoText, and author');
  })
})

describe('_saveQuestion', () => {
  it('should fail if question is missing optionTwoText', async () => {
    const question = {
      optionOneText: 'Option One',
      author: 'mtsamis'
    };
    await expect(API._saveQuestion(question)).rejects.toEqual('Please provide optionOneText, optionTwoText, and author');
  })
})

describe('_saveQuestion', () => {
  it('should fail if question is missing author', async () => {
    const question = {
      optionOneText: 'Option One',
      optionTwoText: 'Option Two'
    };
    await expect(API._saveQuestion(question)).rejects.toEqual('Please provide optionOneText, optionTwoText, and author');
  })
})

describe('_saveQuestion', () => {
  it('should return a formatted question', async () => {
    const question = {
      optionOneText: 'Option One',
      optionTwoText: 'Option Two',
      author: 'mtsamis'
    };
    const result = await API._saveQuestion(question);
    expect(result).toHaveProperty('id');
    expect(result).toHaveProperty('timestamp');
    expect(result).toHaveProperty('author');
    expect(result).toHaveProperty('optionOne');
    expect(result).toHaveProperty('optionTwo');
  }, 30000)
})

// ===========================================
//        Test the _SaveQuestionAnswer function
// ===========================================

describe('_saveQuestionAnswer', () => {
  it('should fail if answer is missing', async () => {
    const answer = {
      authedUser: 'mtsamis',
      qid: '8xf0y6ziyjabvozdd253nd',
    };
    await expect(API._saveQuestionAnswer(answer)).rejects.toEqual('Please provide authedUser, qid, and answer');
  })
})

describe('_saveQuestionAnswer', () => {
  it('should fail if qid is missing', async () => {
    const answer = {
      authedUser: 'mtsamis',
      answer: 'optionOne',
    };
    await expect(API._saveQuestionAnswer(answer)).rejects.toEqual('Please provide authedUser, qid, and answer');
  })
})

describe('_saveQuestionAnswer', () => {
  it('should fail if authedUser is missing', async () => {
    const answer = {
      qid: '8xf0y6ziyjabvozdd253nd',
      answer: 'optionOne',
    };
    await expect(API._saveQuestionAnswer(answer)).rejects.toEqual('Please provide authedUser, qid, and answer');
  })
})
