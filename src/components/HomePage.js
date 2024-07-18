import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Context } from '../Context';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import Navbar from './Navbar';
import QuestionBucket from './QuestionBucket';
import * as Utils from '../utils';
import {getQuestions} from '../actions/questionActions';



const HomePage = () => {

  const isLoggedIn = useSelector(state => state.login.isLoggedIn);
  const user = useSelector(state => state.login.user);
  const questions = useSelector((state) => state.questions.questions);
  const questionsLoading = useSelector((state) => state.questions.loading);

  const alreadyHasQuestions = Object.values(questions).length > 0;

  const dispatch = useDispatch();

  // Fetch questions on load
  useEffect(() => {
    getQuestions(dispatch);
  },[]);

  // Redirect to login if not logged in
  if (!isLoggedIn) {
    return <Navigate to="/login" />
  }

  return (
    <div>
      <Navbar />
      <Container>
        <QuestionBucket 
          name="New Questions" 
          questions={
            Object.values(questions).filter((q)=>!Utils.hasUserAnsweredQuestion(user.id, q))
          }
          loading={questionsLoading && !alreadyHasQuestions}
        />
        <QuestionBucket 
          name="Answered Questions" 
          questions={
            Object.values(questions).filter((q)=>Utils.hasUserAnsweredQuestion(user.id, q))
          }
          loading={questionsLoading && !alreadyHasQuestions}
        />
      </Container>
    </div>
  )
};

export default HomePage;