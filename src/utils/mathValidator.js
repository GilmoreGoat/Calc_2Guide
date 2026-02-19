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
  // Allowed: digits, a-z, +, -, *, /, ^, (, ), ., and whitespace
  const allowedChars = /^[0-9a-z+\-*/^().\s]*$/;
  if (!allowedChars.test(exprUser)) {
    return { isCorrect: false, message: 'Invalid characters in your answer.' };
  }

  // Convert math syntax to JS syntax
  const toJS = (str) => {
    // 1. Protect known functions/constants
    const functions = [
      'arcsin', 'arccos', 'arctan', 'arcsec', 'arccsc', 'arccot',
      'asin', 'acos', 'atan',
      'sin', 'cos', 'tan', 'sec', 'csc', 'cot',
      'sqrt', 'exp', 'abs', 'log', 'ln',
      'pi' // treat pi as a function/constant unit
    ];
    // Sort by length descending
    functions.sort((a, b) => b.length - a.length);

    // Implicit multiplication
    // 1. Number followed by x, letter, or (
    s = s.replace(/(\d)([a-z(])/g, '$1*$2');
    // 2. x or ) followed by Number or x or (
    // Be careful with functions like sin(x). s followed by i is not multiplication.
    // We strictly handle implicit mult for 'x' variable.
    // For other vars/functions, it's safer to require * or handle carefully.
    // Let's assume variable is 'x'.
    s = s.replace(/([x)])(\d)/g, '$1*$2');
    s = s.replace(/([x)])([a-z(])/g, '$1*$2');

    // Convert powers using pow() function (to be defined in context)
    // We repeatedly find the last ^ to handle right-associativity
    while (s.includes('^')) {
      const idx = s.lastIndexOf('^');

      // Find base (left of ^)
      let baseStart = idx - 1;
      let depth = 0;
      while (baseStart >= 0) {
        const char = s[baseStart];
        if (char === ')') depth++;
        else if (char === '(') {
          depth--;
          if (depth < 0) break;
        }

        if (depth < 0) break;
        if (depth === 0 && /[+\-*/]/.test(char)) {
          break;
        }
        baseStart--;
      }

      const start = baseStart + 1;

      // Find exponent (right of ^)
      let expEnd = idx + 1;
      depth = 0;
      while (expEnd < s.length) {
        const char = s[expEnd];
        if (char === '(') depth++;
        else if (char === ')') {
          depth--;
          if (depth < 0) break;
        }

        if (depth < 0) break;
        if (depth === 0 && /[+\-*/]/.test(char)) {
          break;
        }
        expEnd++;
      }

      const base = s.substring(start, idx);
      const exp = s.substring(idx + 1, expEnd);

      const replacement = `pow(${base},${exp})`;
      s = s.substring(0, start) + replacement + s.substring(expEnd);
    }

    return s;
  };

  const jsUser = toJS(exprUser);
  const jsExpected = toJS(exprExpected);

  // 3. Numerical verification using random sampling
  try {
    // We assume the variable is 'x'
    // We also provide constants e and pi
    // Define all supported math functions in the scope
    const context = `
      const e = Math.E;
      const pi = Math.PI;

      const sin = Math.sin;
      const cos = Math.cos;
      const tan = Math.tan;
      const asin = Math.asin;
      const acos = Math.acos;
      const atan = Math.atan;
      const sinh = Math.sinh;
      const cosh = Math.cosh;
      const tanh = Math.tanh;
      const exp = Math.exp;
      const sqrt = Math.sqrt;
      const abs = Math.abs;
      const log = Math.log;
      const pow = Math.pow;

      // Aliases
      const ln = Math.log;
      const arcsin = Math.asin;
      const arccos = Math.acos;
      const arctan = Math.atan;

      // Reciprocal Trig Functions
      const sec = (t) => 1 / Math.cos(t);
      const csc = (t) => 1 / Math.sin(t);
      const cot = (t) => 1 / Math.tan(t);

      // Inverse Reciprocal Trig Functions (optional, but good for completeness)
      const arcsec = (t) => Math.acos(1/t);
      const arccsc = (t) => Math.asin(1/t);
      const arccot = (t) => Math.atan(1/t);
    `;

    const fUser = new Function('x', `${context} return ${jsUser};`);
    const fExpected = new Function('x', `${context} return ${jsExpected};`);

    // Test points: include negatives, decimals, avoid 0 just in case
    // Avoid range issues for log/sqrt
    // If expected answer involves log/sqrt, we should test positive numbers.
    // We can try-catch individual evaluations.
    const testPoints = [-5, -2.5, -1, 0.5, 1, 3, 10];
    // Add some fractions for inverse trig like 0.1, 0.9 (for arcsin domain [-1, 1])
    testPoints.push(0.1, 0.9, -0.9);

    let allMatch = true;
    let validPoints = 0;

    for (const x of testPoints) {
      let valUser, valExpected;
      try {
        valUser = fUser(x);
        valExpected = fExpected(x);
      } catch (e) {
        // Domain error
        continue;
      }

      if (!isFinite(valUser) || !isFinite(valExpected) || isNaN(valUser) || isNaN(valExpected)) {
        continue;
      }

      validPoints++;

      if (Math.abs(valUser - valExpected) > 0.0001) {
        allMatch = false;
        break;
      }
    }

    if (validPoints === 0) {
        return { isCorrect: false, message: 'Could not evaluate your answer. Please check syntax.' };
    }

    if (allMatch) {
      return { isCorrect: true, message: 'Correct! Great job.' };
    } else {
      return { isCorrect: false, message: 'Incorrect. Please check your math.' };
    }

  } catch (error) {
    // console.error('Validation error:', error, 'JS:', jsUser);
    return { isCorrect: false, message: 'Check your syntax (e.g., use * for multiplication).' };
  }
}
