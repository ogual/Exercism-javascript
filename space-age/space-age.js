//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const RATE_TIME_IN_PLANET = {
  "mercury": 0.2408467,   // Earth years
  "venus": 0.61519726,    // Earth years
  "earth": 1.0,           // Earth years, 365.25 Earth days, or 31557600 seconds
  "mars": 1.8808158,      // Earth years
  "jupiter": 11.862615,   // Earth years
  "saturn": 29.447498,    // Earth years
  "uranus": 84.016846,    // Earth years
  "neptune": 164.79132    // Earth years
}

export const age = (planet, time) => {
  return Number(((time / RATE_TIME_IN_PLANET[planet])
            / 60 / 60 / 24 / 365.25).toFixed(2));
};

