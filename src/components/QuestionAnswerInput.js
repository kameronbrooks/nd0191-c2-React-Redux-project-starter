import {Form, InputGroup, Button, ButtonGroup, Row, Col} from 'react-bootstrap';

const QuestionAnswerInput = ({ question, selectOptionOne, selectOptionTwo}) => {
  return (
    <Form>
      
      <Row>
        <Col xs={6} className='justify-center'>
          <Button
            variant="primary"
            onClick={selectOptionOne}
            className='answer-button'>
            {question.optionOne.text}
          </Button>
        </Col>
        <Col xs={6} className='justify-center'>
          <Button
            variant="primary"
            onClick={selectOptionTwo}
            className='answer-button'>
            {question.optionTwo.text}
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default QuestionAnswerInput;