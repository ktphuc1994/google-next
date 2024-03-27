export const checkNumber = (stringToCheck) => {
  if (typeof stringToCheck !== 'string') return false;
  return !isNaN(stringToCheck) && !isNaN(parseFloat(stringToCheck));
};
