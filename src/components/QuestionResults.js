import * as Utils from '../utils';
import {Chart, ArcElement, Legend, Tooltip} from 'chart.js'

import { Doughnut } from 'react-chartjs-2';

Chart.register(ArcElement, Tooltip, Legend);

const QuestionResults = ({ question, authedUser }) => {

  const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length;

  const data ={
    labels: [question.optionOne.text, question.optionTwo.text],
    datasets: [{
      label: "Votes",
      data: [question.optionOne.votes.length, question.optionTwo.votes.length],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)'
      ],
      hoverOffset: 4,
    }]
  };
  const chartOptions = {
    plugins: {
      legend: {
        labels: {
          position: 'bottom'
        }
      }
    }
  };
  return (
    <div className="results-div">
      <div className="title">
        <h3>Results:</h3>
      </div>
      <div className="results-body">
        <div className='results-details'>
          <div>
            <strong>Option 1: {Utils.capitalizeFirstLetter(question.optionOne.text)}</strong><br />
            {question.optionOne.votes.length} out of {totalVotes} votes<br />
            <em>{question.optionOne.votes.includes(authedUser) ? "[You voted for this option]" : ""}</em>
          </div>
          <hr />
          <div>
            <strong>Option 2: {Utils.capitalizeFirstLetter(question.optionTwo.text)}</strong><br />
            {question.optionTwo.votes.length} out of {totalVotes} votes<br />
            <em>{question.optionTwo.votes.includes(authedUser) ? "[You voted for this option]" : ""}</em>
          </div>
        </div>
        <div className='results-chart'>
            <Doughnut data={data} options={chartOptions}/>
        </div>
      </div>
    </div>
  )
}

export default QuestionResults;