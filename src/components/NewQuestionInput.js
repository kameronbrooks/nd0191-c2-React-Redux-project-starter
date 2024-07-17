import React, { useEffect } from 'react';
import { Navigate, useParams, useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';

import { addQuestion } from '../actions/questionActions';

import {Form, InputGroup, Button, ButtonGroup, Row, Col} from 'react-bootstrap';

import * as Utils from '../utils';

const NewQuestionInput = ({user, dispatch}) => {

  const [optionOne, setOptionOne] = React.useState('');
  const [optionTwo, setOptionTwo] = React.useState('');

  const [colorOne, setColorOne] = React.useState('rgb(248, 249, 250)');
  const [colorTwo, setColorTwo] = React.useState('rgb(248, 249, 250)');

  const [forecolorOne, setForeColorOne] = React.useState('black');
  const [forecolorTwo, setForeColorTwo] = React.useState('black');

  const [submitAvailable, setSubmitAvailable] = React.useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setSubmitAvailable(optionOne !== '' && optionTwo !== '');
  }, [optionOne, optionTwo]);

  const onChangeOne = (e) => {
    setOptionOne(e.target.value);


    if (e.target.value === '') {
      setColorOne('rgb(248, 249, 250)');
      setForeColorOne('black');
      return;
    }

    const color = Utils.getColorFromText(e.target.value, 0x11, 0xB0);
    setColorOne(color);
    setForeColorOne(Utils.getForegroundColorForBackground(color));
  }

  const onChangeTwo = (e) => {
    setOptionTwo(e.target.value);

    
    if (e.target.value === '') {
      setColorTwo('rgb(248, 249, 250)');
      setForeColorTwo('black');
      return;
    }

    const color = Utils.getColorFromText(e.target.value, 0x11, 0xB0);
    setColorTwo(color);
    setForeColorTwo(Utils.getForegroundColorForBackground(color));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    addQuestion(
      {
        author: user.id,
        optionOneText: optionOne,
        optionTwoText: optionTwo,
      }, 
      dispatch,
      navigate
    );
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <InputGroup.Text style={{backgroundColor: colorOne, color: forecolorOne}}>Option One: </InputGroup.Text>
          <Form.Control type="text" placeholder="Enter Option One" onChange={onChangeOne} />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text style={{backgroundColor: colorTwo, color: forecolorTwo}}>Option Two: </InputGroup.Text>
          <Form.Control type="text" placeholder="Enter Option One" onChange={onChangeTwo} />
        </InputGroup>
   
        <Button variant="dark" type="submit" disabled={!submitAvailable}>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default NewQuestionInput;