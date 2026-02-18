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

  // If we have neither coeffStr (was 1) nor varStr (was x^0), we have 1 (covered above)

  return `${sign}${coeffStr}${varStr}`;
}

/**
 * Generates a simple polynomial where the antiderivative has integer coefficients.
 * Returns array of terms for the derivative: { coeff, exp }
 * and array of terms for the antiderivative: { coeff: multiplier, exp: exp+1 }
 */
function generateSimplePolynomial(numTerms = 2) {
  const terms = [];
  const antiderivTerms = [];
  const usedExps = new Set();

  for (let i = 0; i < numTerms; i++) {
    // Pick a random exponent for the antiderivative term (1 to 4)
    // So the derivative exponent will be 0 to 3
    let antiderivExp = getRandomInt(1, 4);
    // Ensure unique exponents
    let attempts = 0;
    while (usedExps.has(antiderivExp) && attempts < 10) {
      antiderivExp = getRandomInt(1, 4);
      attempts++;
    }
    usedExps.add(antiderivExp);

    // Pick a random integer coefficient for the antiderivative term (-5 to 5)
    let antiderivCoeff = getRandomInt(-5, 5);
    while (antiderivCoeff === 0) {
      antiderivCoeff = getRandomInt(-5, 5);
    }

    // The derivative term: d/dx (A * x^B) = (A * B) * x^(B-1)
    const derivExp = antiderivExp - 1;
    const derivCoeff = antiderivCoeff * antiderivExp;

    terms.push({ coeff: derivCoeff, exp: derivExp });
    antiderivTerms.push({ coeff: antiderivCoeff, exp: antiderivExp });
  }

  // Sort by exponent descending
  terms.sort((a, b) => b.exp - a.exp);
  antiderivTerms.sort((a, b) => b.exp - a.exp);

  return { terms, antiderivTerms };
}

function formatPolynomial(terms) {
  if (terms.length === 0) return '0';
  return terms.map((term, index) => formatTerm(term.coeff, term.exp, index === 0)).join('');
}

function generateIndefiniteIntegral() {
  const { terms, antiderivTerms } = generateSimplePolynomial(getRandomInt(1, 2));
  const polyLatex = formatPolynomial(terms);

  // Format the answer string (user input expectation)
  // We remove curly braces from LaTeX to make the expected answer simpler (e.g. x^2 instead of x^{2})
  const answerLatex = formatPolynomial(antiderivTerms).replace(/{/g, '').replace(/}/g, '') + '+C';

  return {
    question: `Evaluate $\\int (${polyLatex}) \\, dx$.`,
    answer: answerLatex,
    type: 'text',
    hint: 'Use the Power Rule: $\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C$. Don\'t forget +C.'
  };
}

function generateDefiniteIntegral() {
  const { terms, antiderivTerms } = generateSimplePolynomial(getRandomInt(1, 2));
  const polyLatex = formatPolynomial(terms);

  const a = getRandomInt(0, 2);
  const b = getRandomInt(a + 1, a + 3);

  // Calculate definite integral: F(b) - F(a)
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

export function generateProblem(type) {
  switch (type) {
    case 'indefinite-integral':
      return generateIndefiniteIntegral();
    case 'definite-integral':
      return generateDefiniteIntegral();
    default:
      return null;
  }
}
