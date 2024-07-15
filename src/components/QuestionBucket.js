import Question from "./Question";
import Spinner from 'react-bootstrap/Spinner';

const QuestionBucket = ({ questions, name, loading }) => {
  return (
    <div className="question-bucket">
      <div className="bucket-head">
        <h2>{name}</h2>
      </div>
      <div className="bucket-body">
        {
          loading ? 
          (
            <div className="spinner-container">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          ) : 
          (
            questions.map((question) => (
              <Question key={question.id} question={question} />
            ))
          )
        }
      </div>
    </div>
  );
};

export default QuestionBucket;