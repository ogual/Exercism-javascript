//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

export const isPangram = (word) => {
  if (word === '') {
    return false;
  }

  for (let i = 0; i < ALPHABET.length; i++) {
    if (word.toLowerCase().indexOf(ALPHABET[i]) === -1) {
      return false;
    }
  }
  return true;
};
