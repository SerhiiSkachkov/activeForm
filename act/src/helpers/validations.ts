import REG_EXPS from '../variables/regExps';

const validations = {
  isNotShort: (password: string, minLength: number): boolean => password.trim().length >= minLength,
  hasNumber: (password: string): boolean => REG_EXPS.number.test(password),
  hasLowerCase: (password: string): boolean => REG_EXPS.lowerCase.test(password),
  hasUpperCase: (password: string): boolean => REG_EXPS.upperCase.test(password),
  hasSpecialSymbol: (password: string): boolean => REG_EXPS.specialSymbol.test(password),
};

export const getPasswordScore = (password: string, minLength: number): number => {
  const { isNotShort, hasNumber, hasLowerCase, hasUpperCase, hasSpecialSymbol } = validations;
  const validationsArr = [isNotShort, hasNumber, hasLowerCase, hasUpperCase, hasSpecialSymbol];

  let score = 0;

  if (password.length) {
    validationsArr.forEach(validation => validation(password, minLength) && score++);
  }

  return score;
};

export default validations;
