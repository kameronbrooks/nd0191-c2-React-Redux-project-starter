
export const hasUserAnsweredQuestion = (user, question) => {
  return question.optionOne.votes.includes(user) || question.optionTwo.votes.includes(user);
}