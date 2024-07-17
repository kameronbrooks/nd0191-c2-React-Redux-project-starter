import React, { useEffect } from 'react';
import { Navigate, useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

import { Form, InputGroup, Button, ButtonGroup, Row, Col } from 'react-bootstrap';
import { getQuestions, answerQuestion } from '../actions/questionActions';
import { fetchUsers } from '../actions/userActions';
import * as Utils from '../utils';

import QuestionAnswerInput from './QuestionAnswerInput';
import QuestionResults from './QuestionResults'

const QuestionPage = () => {

  const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.login.isLoggedIn);
  const user = useSelector(state => state.login.user);

  const users = useSelector(state => state.users.users);
  const questions = useSelector(state => state.questions.questions);

  const queryParams = useParams();
  const question = useSelector(state => state.questions.questions[queryParams.id]);

  const dispatch = useDispatch();

  const author = (question) ? users[question.author] : null;


  const selectOptionOne = (e) => {
    answerQuestion(user.id, question.id, 'optionOne', dispatch);

  }

  const selectOptionTwo = (e) => {
    answerQuestion(user.id, question.id, 'optionTwo', dispatch);
  }

  useEffect(() => {
    // Fetch questions on load
    (Object.values(questions).length === 0) && getQuestions(dispatch);
    (Object.values(users).length === 0) && fetchUsers(dispatch);
  }, []);

  // Redirect to login if not logged in
  if (!isLoggedIn) {
    return <Navigate to="/login" />
  }

  return (
    <div>
      <Navbar />
      <Container>
        <div className='question-nav'>
          <Link to="/"> &lt; Back</Link>
          <Link to="/"> Random &gt; </Link>
        </div>
        <div >
          {
            author && (
              <div className='justify-center'>
                <div>
                  <img className="author-img" src={author.avatarURL} alt={author.name} /><br />
                  <div style={{ textAlign: 'center' }}>Question by {author.name}</div>
                </div>
              </div>
            )
          }
        </div>
        <div>
          <h3 style={{ textAlign: 'center' }}>Would You Rather...</h3>
          <hr />
        </div>
        {

          Utils.hasUserAnsweredQuestion(user.id, question) ? (
            <QuestionResults question={question} authedUser={user.id} />
          ) : (
            <QuestionAnswerInput
              question={question}
              selectOptionOne={selectOptionOne}
              selectOptionTwo={selectOptionTwo}
            />
          )
        }


      </Container>
    </div>
  )
}


export default QuestionPage;