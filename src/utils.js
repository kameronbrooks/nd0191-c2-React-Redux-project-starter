
export const hasUserAnsweredQuestion = (user, question) => {
  return question.optionOne.votes.includes(user) || question.optionTwo.votes.includes(user);
}

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const getColorFromText = (text, min=0xEE, max=0xFF) => {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = text.charCodeAt(i) + ((hash << 5) - hash);
  }

  const c = hash & 0x00FFFFFF;
  let redStrength = ((c >> 16) & 0xFF) / 0xFF;
  let greenStrength = ((c >> 8) & 0xFF) / 0xFF;
  let blueStrength = ((c) & 0xFF) / 0xFF;

  const red = Math.floor(min + (max - min) * redStrength);
  const green = Math.floor(min + (max - min) * greenStrength);
  const blue = Math.floor(min + (max - min) * blueStrength);

  const rHex = red.toString(16).padStart(2, '0');
  const gHex = green.toString(16).padStart(2, '0');
  const bHex = blue.toString(16).padStart(2, '0');

  return `#${rHex}${gHex}${bHex}`


}