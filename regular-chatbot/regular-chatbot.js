// @ts-check

/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

export function isValidCommand(command) {
  let regex = new RegExp('chatbot', 'i')
  
  return regex.test(command) &&
    command.match(regex).index === 0
}

/**
 * Given a certain message, help the chatbot get rid of all the emoji's encryption through the message.
 *
 * @param {string} message
 * @returns {string} The message without the emojis encryption
 */
export function removeEmoji(message) {
  return message.replace(/Emoji[0-9]+/gi, '');
}

/**
 * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
 *
 * @param {string} number
 * @returns {string} the Chatbot response to the phone Validation
 */
export function checkPhoneNumber(number) {
  let regex = new RegExp(/\(\+[0-9]{2}\)\s[0-9]{3}\-[0-9]{3}\-[0-9]{3}/);
  if (regex.test(number)) {
    return "Thanks! You can now download me to your phone."
  } else {
    return "Oops, it seems like I can't reach out to " + number
  }
}

/**
 * Given a certain response from the user, help the chatbot get only the URL.
 *
 * @param {string} userInput
 * @returns {string[] | null} all the possible URL's that the user may have answered
 */
export function getURL(userInput) {
  let regex = /[a-zA-Z]+\.[a-zA-Z]{2,3}/gm;

  return userInput.match(regex);
}

/**
 * Greet the user using the full name data from the profile.
 *
 * @param {string} fullName
 * @returns {string} Greeting from the chatbot
 */
export function niceToMeetYou(fullName) {
  let str = fullName.split(/, /)
  return `Nice to meet you, ${str[1]} ${str[0]}`
}
