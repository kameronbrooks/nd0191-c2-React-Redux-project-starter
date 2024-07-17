import React, { useEffect } from 'react';
import { Navigate, useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';
import NewQuestionInput from './NewQuestionInput';
import {Form, InputGroup, Button, ButtonGroup, Row, Col, Spinner} from 'react-bootstrap';

import * as Utils from '../utils';


const NewQuestionPage = () => {
  
    
    const isLoggedIn = useSelector(state => state.login.isLoggedIn);
    const user = useSelector(state => state.login.user);

    const savingNewQuestion = useSelector(state => state.questions.savingNewQuestion);

    const dispatch = useDispatch();

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
              user && (
                <div className='justify-center'>
                  <div>
                  <img className="author-img" src={user.avatarURL} alt={user.name} /><br />
                  <div  style={{textAlign: 'center'}}>Question by {user.name}</div>
                  </div>
                </div>
              )
            }
          </div>
          <div>
            <h3 style={{ textAlign: 'center' }}>Would You Rather...</h3>
            <hr />
            {
              savingNewQuestion ? (
                <div style={{textAlign: 'center'}}>
                  <h3>Saving...</h3>
                  <Spinner animation="border" />
                </div>
              ) : (
                <NewQuestionInput user={user} dispatch={dispatch} />
              )
            }
            
          </div>
        </Container>
      </div>
    )
  }


export default NewQuestionPage;