/**
 * Validates a user's math answer against an expected answer.
 * Handles both numerical answers and algebraic expressions.
 *
 * @param {string} userAnswer - The user's input
 * @param {string} expectedAnswer - The correct answer
 * @param {string} type - 'number' or 'text'
 * @returns {object} - { isCorrect: boolean, message: string }
 */
export function validateMath(userAnswer, expectedAnswer, type = 'text') {
  if (!userAnswer) return { isCorrect: false, message: 'Please enter an answer.' };

  if (type === 'number') {
    const numUser = parseFloat(userAnswer);
    const numExpected = parseFloat(expectedAnswer);

    if (isNaN(numUser)) {
      return { isCorrect: false, message: 'Please enter a valid number.' };
    }

    if (Math.abs(numUser - numExpected) < 0.001) {
       return { isCorrect: true, message: 'Correct! Great job.' };
    } else {
       return { isCorrect: false, message: 'Incorrect. Try again.' };
    }
  }

  // Text/Algebraic validation
  const normalize = (str) => str.toLowerCase().replace(/\s+/g, '');

  // 1. Check for +C requirement if expected answer has it
  const normExpected = normalize(expectedAnswer);
  const normUser = normalize(userAnswer);

  const hasC = normExpected.includes('+c');
  if (hasC && !normUser.includes('+c')) {
    return { isCorrect: false, message: 'Don\'t forget the constant of integration (+C).' };
  }

  // 2. Prepare expressions for evaluation
  // Remove +c for the math check
  const cleanExpr = (str) => {
    let s = str.toLowerCase();
    s = s.replace(/\s+/g, '');
    s = s.replace(/\+\s*c/g, '');
    // Remove LaTeX braces { } often used in exponents like x^{2}
    s = s.replace(/[{}]/g, '');
    return s;
  };

  const exprUser = cleanExpr(userAnswer);
  const exprExpected = cleanExpr(expectedAnswer);

  // Security check: Ensure only allowed characters are present
  // Allowed: digits, x, +, -, *, /, ^, (, ), ., and whitespace
  const allowedChars = /^[0-9x+\-*/^().\s]*$/;
  if (!allowedChars.test(exprUser)) {
    return { isCorrect: false, message: 'Invalid characters in your answer.' };
  }

  // Convert math syntax to JS syntax
  const toJS = (str) => {
    // Replace ^ with **
    let s = str.replace(/\^/g, '**');

    // Implicit multiplication
    // 1. Number followed by x or (
    s = s.replace(/(\d)([x(])/g, '$1*$2');
    // 2. x or ) followed by Number or x or (
    s = s.replace(/([x)])(\d)/g, '$1*$2');
    s = s.replace(/([x)])([x(])/g, '$1*$2');

    return s;
  };

  const jsUser = toJS(exprUser);
  const jsExpected = toJS(exprExpected);

  // 3. Numerical verification using random sampling
  try {
    // We assume the variable is 'x'
    const fUser = new Function('x', `return ${jsUser};`);
    const fExpected = new Function('x', `return ${jsExpected};`);

    // Test points: include negatives, decimals, avoid 0 just in case
    const testPoints = [-5, -2.5, -1, 0.5, 1, 3, 10];

    let allMatch = true;
    for (const x of testPoints) {
      const valUser = fUser(x);
      const valExpected = fExpected(x);

      if (!isFinite(valUser) || isNaN(valUser)) {
        return { isCorrect: false, message: 'Your answer is not a valid mathematical expression.' };
      }

      // Use a small epsilon for floating point comparison
      if (Math.abs(valUser - valExpected) > 0.0001) {
        allMatch = false;
        break;
      }
    }

    if (allMatch) {
      return { isCorrect: true, message: 'Correct! Great job.' };
    } else {
      return { isCorrect: false, message: 'Incorrect. Please check your math.' };
    }

  } catch (error) {
    // Syntax error in user input
    return { isCorrect: false, message: 'Check your syntax (e.g., use * for multiplication).' };
  }
}
