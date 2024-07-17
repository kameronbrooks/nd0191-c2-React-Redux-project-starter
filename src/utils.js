
export const hasUserAnsweredQuestion = (user, question) => {
  return question.optionOne.votes.includes(user) || question.optionTwo.votes.includes(user);
}

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Convert a string to a color based on its hash
 * @param {*} text 
 * @param {*} min 
 * @param {*} max 
 * @returns 
 */
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

export const getForegroundColorForBackground = (backgroundColor, blackColor="#111111", whiteColor="#FFFFFF") => {
  // Convert the background color to RGB
  let r = parseInt(backgroundColor.substr(1,2), 16);
  let g = parseInt(backgroundColor.substr(3,2), 16);
  let b = parseInt(backgroundColor.substr(5,2), 16);

  // Calculate the luminance
  let luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? blackColor : whiteColor;
}