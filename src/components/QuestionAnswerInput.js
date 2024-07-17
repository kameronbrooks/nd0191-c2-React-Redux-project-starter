import {Form, InputGroup, Button, ButtonGroup, Row, Col} from 'react-bootstrap';
import * as Utils from '../utils';
const QuestionAnswerInput = ({ question, selectOptionOne, selectOptionTwo}) => {
  const button1Color = Utils.getColorFromText(question.optionOne.text, 0x11, 0xB0);
  const button2Color = Utils.getColorFromText(question.optionTwo.text, 0x11, 0xB0);
  
  return (
    <Form>
      
      <Row>
        <Col xs={6} className='justify-center'>
          <Button
            variant="primary"
            onClick={selectOptionOne}
            className='answer-button'
            style={{backgroundColor: button1Color, borderColor: button1Color}}>
            {question.optionOne.text}
            
          </Button>
        </Col>
        <Col xs={6} className='justify-center'>
          <Button
            variant="primary"
            onClick={selectOptionTwo}
            className='answer-button'
            style={{backgroundColor: button2Color, borderColor: button2Color}}>
            {question.optionTwo.text}
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default QuestionAnswerInput;