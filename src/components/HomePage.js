import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Context } from '../Context';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import Navbar from './Navbar';
import QuestionBucket from './QuestionBucket';
import MultiToggle from './MultiToggle';
import * as Utils from '../utils';
import {getQuestions} from '../actions/questionActions';



const HomePage = () => {

  const isLoggedIn = useSelector(state => state.login.isLoggedIn);
  const user = useSelector(state => state.login.user);
  const questions = useSelector((state) => state.questions.questions);
  const questionsLoading = useSelector((state) => state.questions.loading);

  const alreadyHasQuestions = Object.values(questions).length > 0;

  const [showNewQuestions, setShowNewQuestions] = useState(true);
  const [showAnsweredQuestions, setShowAnsweredQuestions] = useState(true);

  const dispatch = useDispatch();

  const toggleOptions = [
    {text: 'New', value: 1},
    {text: 'Both', value: (1 | 2)},
    {text: 'Answered', value: 2}
  ];

  // Handle toggling between new and answered questions
  const onToggle = (option) => {
    setShowNewQuestions((option.value & 1) !== 0);
    setShowAnsweredQuestions((option.value & 2) !== 0);
  }

  // Fetch questions on load
  useEffect(() => {
    getQuestions(dispatch);
  },[]);

  
  return (
    <div>
      <Navbar />
      <Container>
        <div style={{display: "flex", justifyContent: "center"}}>
          <MultiToggle options={toggleOptions} onSelect={onToggle}/>
        </div>
        {
          showNewQuestions && (
            <QuestionBucket 
              name="New Questions" 
              questions={
                Object.values(questions).filter((q)=>!Utils.hasUserAnsweredQuestion(user.id, q)).sort((a, b) => b.timestamp - a.timestamp)
              }
              loading={questionsLoading && !alreadyHasQuestions}
            />
          )
        }
        {
          showAnsweredQuestions && (
            <QuestionBucket 
              name="Answered Questions" 
              questions={
                Object.values(questions).filter((q)=>Utils.hasUserAnsweredQuestion(user.id, q)).sort((a, b) => b.timestamp - a.timestamp)
              }
              loading={questionsLoading && !alreadyHasQuestions}
            />
          )
        }
      </Container>
    </div>
  )
};

export default HomePage;