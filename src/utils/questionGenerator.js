/**
 * Generates random integers between min and max (inclusive)
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Formats a polynomial term for LaTeX.
 * Handles cases like 1x^2, -1x, x^0, etc.
 */
function formatTerm(coeff, exp, isFirstTerm) {
  if (coeff === 0) return '';

  let sign = '';
  if (coeff < 0) {
    sign = '-';
  } else if (!isFirstTerm) {
    sign = '+';
  }

  const absCoeff = Math.abs(coeff);
  let coeffStr = absCoeff.toString();
  // If coeff is 1 or -1 and we have a variable part, omit the 1
  if (absCoeff === 1 && exp !== 0) {
    coeffStr = '';
  }

  let varStr = '';
  if (exp === 0) {
    varStr = '';
  } else if (exp === 1) {
    varStr = 'x';
  } else {
    varStr = `x^{${exp}}`;
  }

  // Special case: constant term needs coeff even if 1 (e.g. "+ 1" or "- 1")
  if (exp === 0 && absCoeff === 1) {
    coeffStr = '1';
  }

  return `${sign}${coeffStr}${varStr}`;
}

/**
 * Generates a simple polynomial where the antiderivative has integer coefficients.
 */
function generateSimplePolynomial(numTerms = 2) {
  const terms = [];
  const antiderivTerms = [];
  const usedExps = new Set();

  for (let i = 0; i < numTerms; i++) {
    let antiderivExp = getRandomInt(1, 4);
    let attempts = 0;
    while (usedExps.has(antiderivExp) && attempts < 10) {
      antiderivExp = getRandomInt(1, 4);
      attempts++;
    }
    usedExps.add(antiderivExp);

    let antiderivCoeff = getRandomInt(-5, 5);
    while (antiderivCoeff === 0) {
      antiderivCoeff = getRandomInt(-5, 5);
    }

    const derivExp = antiderivExp - 1;
    const derivCoeff = antiderivCoeff * antiderivExp;

    terms.push({ coeff: derivCoeff, exp: derivExp });
    antiderivTerms.push({ coeff: antiderivCoeff, exp: antiderivExp });
  }

  terms.sort((a, b) => b.exp - a.exp);
  antiderivTerms.sort((a, b) => b.exp - a.exp);

  return { terms, antiderivTerms };
}

function formatPolynomial(terms) {
  if (terms.length === 0) return '0';
  return terms.map((term, index) => formatTerm(term.coeff, term.exp, index === 0)).join('');
}

function generateIndefinitePolynomial() {
  const { terms, antiderivTerms } = generateSimplePolynomial(getRandomInt(1, 2));
  const polyLatex = formatPolynomial(terms);
  const answerLatex = formatPolynomial(antiderivTerms).replace(/{/g, '').replace(/}/g, '') + ' + C';

  return {
    question: `Evaluate $\\int (${polyLatex}) \\, dx$.`,
    answer: answerLatex,
    type: 'text',
    hint: 'Use the Power Rule: $\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C$.'
  };
}

function generateIndefiniteTrig() {
  // Integ(a * cos(bx)) or sin(bx)
  // To keep it simple, let b=1 or b=-1 often, or simple integer.
  // We want nice answers.
  // Int(cos(kx)) = (1/k)sin(kx)
  // Let a be a multiple of k.

  const k = getRandomInt(1, 3) * (Math.random() > 0.5 ? 1 : -1);
  const multiplier = getRandomInt(1, 3) * (Math.random() > 0.5 ? 1 : -1);
  const a = multiplier * k; // So a/k is integer 'multiplier'

  const isCos = Math.random() > 0.5;

  const func = isCos ? 'cos' : 'sin';
  const antiFunc = isCos ? 'sin' : '-cos'; // Int(cos)=sin, Int(sin)=-cos

  // Question: Int(a * func(kx))
  // Answer: (a/k) * antiFunc(kx) -> multiplier * antiFunc(kx)

  // Formatting
  const kStr = Math.abs(k) === 1 ? (k === -1 ? '-' : '') : k;
  const kx = `${kStr}x`;

  // Question string
  // a might be negative.
  const aStr = a === 1 ? '' : (a === -1 ? '-' : a);
  const questionLatex = `${aStr}\\${func}(${kx})`;

  // Answer string
  // multiplier * antiFunc
  // if antiFunc is -cos, combine signs.
  let ansCoeff = multiplier;
  if (antiFunc === '-cos') {
    ansCoeff = -multiplier;
  }

  const ansFunc = antiFunc.replace('-', ''); // strip - for now

  let ansStr = '';
  if (ansCoeff === 0) ansStr = '0';
  else {
      if (ansCoeff === -1) ansStr = '-';
      else if (ansCoeff === 1) ansStr = '';
      else ansStr = ansCoeff.toString();

      ansStr += `${ansFunc}(${kx})`;
  }

  if (ansStr === '') ansStr = `${ansFunc}(${kx})`; // fallback if coeff 1

  return {
    question: `Evaluate $\\int ${questionLatex} \\, dx$.`,
    answer: `${ansStr} + C`,
    type: 'text',
    hint: `Remember that $\\int \\cos(kx) dx = \\frac{1}{k}\\sin(kx)$ and $\\int \\sin(kx) dx = -\\frac{1}{k}\\cos(kx)$.`
  };
}

function generateIndefiniteExp() {
  // Int(a * e^(kx))
  const k = getRandomInt(1, 3) * (Math.random() > 0.5 ? 1 : -1);
  const multiplier = getRandomInt(1, 3) * (Math.random() > 0.5 ? 1 : -1);
  const a = multiplier * k;

  const kStr = Math.abs(k) === 1 ? (k === -1 ? '-' : '') : k;
  const kx = `${kStr}x`;

  const aStr = a === 1 ? '' : (a === -1 ? '-' : a);

  const questionLatex = `${aStr}e^{${kx}}`;

  // Answer: multiplier * e^(kx)
  let ansStr = '';
  if (multiplier === -1) ansStr = '-';
  else if (multiplier === 1) ansStr = '';
  else ansStr = multiplier.toString();

  ansStr += `e^(${kx})`; // Use parens for exponent in answer text to be safe or standard format

  return {
    question: `Evaluate $\\int ${questionLatex} \\, dx$.`,
    answer: `${ansStr} + C`,
    type: 'text',
    hint: `$\\int e^{kx} dx = \\frac{1}{k}e^{kx} + C$.`
  };
}


export function generateProblem(type) {
  if (type === 'indefinite-integral') {
    const r = Math.random();
    if (r < 0.5) return generateIndefinitePolynomial();
    if (r < 0.75) return generateIndefiniteTrig();
    return generateIndefiniteExp();
  }

  if (type === 'definite-integral') {
      // Keep it simple for now, polynomials only
      // Definite integrals of trig/exp require numerical evaluation which is fine
      // but exact answers might be messy (e.g. e^2 - e).
      // The validator compares numbers, so we can return the number.
      // Let's stick to polynomials for definite integrals for this iteration.

      const { terms, antiderivTerms } = generateSimplePolynomial(getRandomInt(1, 2));
      const polyLatex = formatPolynomial(terms);

      const a = getRandomInt(0, 2);
      const b = getRandomInt(a + 1, a + 3);

      const evaluate = (t, x) => t.coeff * Math.pow(x, t.exp);
      const valB = antiderivTerms.reduce((sum, t) => sum + evaluate(t, b), 0);
      const valA = antiderivTerms.reduce((sum, t) => sum + evaluate(t, a), 0);
      const result = valB - valA;

      return {
        question: `Evaluate $\\int_{${a}}^{${b}} (${polyLatex}) \\, dx$.`,
        answer: result.toString(),
        type: 'number',
        hint: `Find the antiderivative $F(x)$, then calculate $F(${b}) - F(${a})$.`
      };
  }

  return null;
}
