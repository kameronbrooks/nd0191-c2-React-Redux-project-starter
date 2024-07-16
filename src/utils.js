
export const hasUserAnsweredQuestion = (user, question) => {
  return question.optionOne.votes.includes(user) || question.optionTwo.votes.includes(user);
}

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}