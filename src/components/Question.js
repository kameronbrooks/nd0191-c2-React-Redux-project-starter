import {Link} from 'react-router-dom';
import moment from 'moment/moment';

const Question = ({ question }) => {
  const { optionOne, optionTwo, author, id, timestamp} = question;

  const votesCount = optionOne.votes.length + optionTwo.votes.length;
  return (
    <div className="question bucket-col">
      <div>
        <div><strong>{author}</strong></div>
        <hr />
        <div className='detail-text'>
          {moment(new Date(timestamp)).format("MM/DD/YYYY HH:mm")}<br />
          {votesCount} votes
        </div>
      </div>
      <div className='justify-center'>
        <Link to={`/questions/${id}`} className="btn btn-dark">
          View Poll
        </Link>
      </div>
    </div>
  );
}

export default Question;