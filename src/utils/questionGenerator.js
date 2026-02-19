/**
 * Generates random integers between min and max (inclusive)
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Formats a polynomial term for LaTeX.
 */
function formatTerm(coeff, exp, isFirstTerm, variable = 'x') {
  if (coeff === 0) return '';
  let sign = '';
  if (coeff < 0) {
    sign = '-';
  } else if (!isFirstTerm) {
    sign = '+';
  }
  const absCoeff = Math.abs(coeff);
  let coeffStr = absCoeff.toString();
  if (absCoeff === 1 && exp !== 0) {
    coeffStr = '';
  }
  let varStr = '';
  if (exp === 0) {
    varStr = '';
  } else if (exp === 1) {
    varStr = variable;
  } else {
    varStr = `${variable}^{${exp}}`;
  }
  if (exp === 0 && absCoeff === 1) {
    coeffStr = '1';
  }
  return `${sign}${coeffStr}${varStr}`;
}

function formatPolynomial(terms, variable = 'x') {
  if (terms.length === 0) return '0';
  return terms.map((term, index) => formatTerm(term.coeff, term.exp, index === 0, variable)).join('');
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

function generateDeltaXProblem() {
  const n = getRandomInt(4, 10);
  const a = getRandomInt(0, 5);
  const length = getRandomInt(1, 5) * n; // ensure integer division
  const b_val = a + length;
  const dx = length / n;

  return {
    question: `Given the interval $[${a}, ${b_val}]$ and $n=${n}$ subintervals, find the width of each subinterval, $\\Delta x$.`,
    answer: dx.toString(),
    type: 'number',
    hint: `$\\Delta x = \\frac{b-a}{n}$`
  };
}

function generateGridPointProblem() {
  const n = getRandomInt(4, 8);
  const a = getRandomInt(0, 3);
  const dx = getRandomInt(1, 3); // simple integer dx
  const b_val = a + n * dx;

  const i = getRandomInt(1, n - 1);
  const xi = a + i * dx;

  return {
    question: `For the interval $[${a}, ${b_val}]$ with $n=${n}$ subintervals, find the grid point $x_{${i}}$.`,
    answer: xi.toString(),
    type: 'number',
    hint: `$x_i = a + i \\Delta x$`
  };
}

function generateRiemannSumCalculation() {
  const isQuad = Math.random() > 0.4; // 60% chance of quadratic
  const n = getRandomInt(3, 5); // keep n small for calculation
  const a = getRandomInt(0, 2);
  const dx = isQuad ? 1 : getRandomInt(1, 2); // integer steps usually
  const b_val = a + n * dx;

  // Function coeffs
  let funcStr = '';
  let evaluate = null;

  if (isQuad) {
    // f(x) = x^2 + c or similar simple one
    // Let's do a*x^2 + k
    const A = getRandomInt(1, 2);
    const K = getRandomInt(0, 5);
    funcStr = `${A === 1 ? '' : A}x^2 + ${K}`;
    evaluate = (x) => A * x * x + K;
  } else {
    // f(x) = c*x + d
    const C = getRandomInt(1, 3);
    const D = getRandomInt(0, 5);
    funcStr = `${C}x + ${D}`;
    evaluate = (x) => C * x + D;
  }

  // Type: Left, Right, Midpoint
  const r = Math.random();
  let type = 'Left';
  if (r > 0.66) type = 'Midpoint';
  else if (r > 0.33) type = 'Right';

  let sum = 0;
  for (let i = 0; i < n; i++) {
    let x_star;
    if (type === 'Left') x_star = a + i * dx;
    else if (type === 'Right') x_star = a + (i + 1) * dx;
    else x_star = a + (i + 0.5) * dx;

    sum += evaluate(x_star) * dx;
  }

  return {
    question: `Estimate the area under $f(x) = ${funcStr}$ on $[${a}, ${b_val}]$ using $n=${n}$ rectangles and **${type}** endpoints.`,
    answer: sum.toString(),
    type: 'number',
    hint: `Calculate $\\Delta x = ${dx}$, find sample points for ${type} rule, evaluate $f$, sum and multiply by $\\Delta x$.`
  };
}

function generateRiemannSum() {
  const r = Math.random();
  if (r < 0.2) return generateDeltaXProblem();
  if (r < 0.4) return generateGridPointProblem();
  return generateRiemannSumCalculation();
}

function generateDefiniteIntegral() {
  const type = Math.random();

  if (type < 0.4) {
    // 1. Polynomial Evaluation (Standard)
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
  } else if (type < 0.7) {
    // 2. Integral Properties (Additivity)
    const a = getRandomInt(0, 2);
    const b = getRandomInt(3, 5);
    const c = getRandomInt(6, 9);

    const val1 = getRandomInt(2, 8); // Int_a^b
    const val2 = getRandomInt(3, 9); // Int_b^c
    const result = val1 + val2;      // Int_a^c

    return {
      question: `Given that $\\int_{${a}}^{${b}} f(x) \\, dx = ${val1}$ and $\\int_{${b}}^{${c}} f(x) \\, dx = ${val2}$, evaluate $\\int_{${a}}^{${c}} f(x) \\, dx$.`,
      answer: result.toString(),
      type: 'number',
      hint: `Use the property: $\\int_a^c f(x) \\, dx = \\int_a^b f(x) \\, dx + \\int_b^c f(x) \\, dx$.`
    };
  } else {
    // 3. Average Value
    // Use an even slope so the average value is an integer
    const m = 2 * getRandomInt(1, 3);
    const k = getRandomInt(0, 5);

    const a = getRandomInt(0, 2);
    const b = getRandomInt(a + 2, a + 6);

    // Average value of mx + k on [a, b] is m/2 * (b+a) + k
    const ave = (m / 2) * (b + a) + k;

    return {
      question: `Find the average value of the function $f(x) = ${m}x + ${k}$ on the interval $[${a}, ${b}]$.`,
      answer: ave.toString(),
      type: 'number',
      hint: `The average value is $f_{ave} = \\frac{1}{b-a} \\int_a^b f(x) \\, dx$.`
    };
  }
}

function generateFundamentalTheorem() {
  const type = Math.random();

  // 40% chance: FTC1 Simple (Upper limit x)
  // 30% chance: FTC1 Chain Rule (Upper limit u(x))
  // 30% chance: FTC2 Definite Integral

  if (type < 0.4) {
    // FTC1 Simple: d/dx Int_a^x f(t) dt = f(x)
    const { terms } = generateSimplePolynomial(getRandomInt(1, 3));
    const polyX = formatPolynomial(terms);
    const polyT = polyX.replace(/x/g, 't');
    const a = getRandomInt(1, 5);

    return {
      question: `Find the derivative of $g(x) = \\int_{${a}}^x (${polyT}) \\, dt$.`,
      answer: polyX,
      type: 'text',
      hint: `Use Part 1 of the Fundamental Theorem of Calculus: $\\frac{d}{dx} \\int_a^x f(t) dt = f(x)$.`
    };
  } else if (type < 0.7) {
    // FTC1 Chain Rule: d/dx Int_a^{u(x)} f(t) dt = f(u(x)) * u'(x)
    // u(x) = x^k
    const k = getRandomInt(2, 4);
    // f(t) = t^n or cos(t)

    const isTrig = Math.random() > 0.5;

    if (isTrig) {
        return {
            question: `Find $g'(x)$ where $g(x) = \\int_{1}^{x^${k}} \\cos(t) \\, dt$.`,
            answer: `${k}x^${k-1} * cos(x^${k})`,
            type: 'text',
            hint: `Use the Chain Rule: $\\frac{d}{dx} \\int_a^{u(x)} f(t) dt = f(u(x)) \\cdot u'(x)$.`
        };
    } else {
        const n = getRandomInt(1, 3);
        // Answer = k * x^{kn + k - 1}
        const finalExp = k * n + k - 1;
        const finalCoeff = k;
        return {
            question: `Find $g'(x)$ where $g(x) = \\int_{0}^{x^${k}} t^${n} \\, dt$.`,
            answer: `${finalCoeff}x^${finalExp}`,
            type: 'text',
            hint: `Use the Chain Rule: $\\frac{d}{dx} \\int_a^{u(x)} f(t) dt = f(u(x)) \\cdot u'(x)$.`
        };
    }

  } else {
    // FTC2: Definite Integral
    return generateDefiniteIntegral();
  }
}

function generateParticleDisplacement() {
  const { terms, antiderivTerms } = generateSimplePolynomial(1);
  const polyLatex = formatPolynomial(terms, 't');

  const a = getRandomInt(0, 2);
  const b = getRandomInt(a + 1, a + 3);

  const evaluate = (t, x) => t.coeff * Math.pow(x, t.exp);
  const valB = antiderivTerms.reduce((sum, t) => sum + evaluate(t, b), 0);
  const valA = antiderivTerms.reduce((sum, t) => sum + evaluate(t, a), 0);
  const result = valB - valA;

  return {
    question: `A particle's velocity is given by $v(t) = ${polyLatex}$. Find the displacement over the time interval $[${a}, ${b}]$.`,
    answer: result.toString(),
    type: 'number',
    hint: `Displacement is $\\int_{${a}}^{${b}} v(t) \\, dt$.`
  };
}

function generateParticleDistance() {
  // Linear velocity v(t) = m(t - c)
  const m = (getRandomInt(0, 1) === 0 ? 1 : -1) * getRandomInt(1, 4);
  const c = getRandomInt(1, 4); // Root

  // Interval [a, b] containing c
  const a = getRandomInt(0, c - 1);
  const b = getRandomInt(c + 1, c + 3);

  // v(t) = mt - mc
  const terms = [
    { coeff: m, exp: 1 },
    { coeff: -m * c, exp: 0 }
  ];
  const polyLatex = formatPolynomial(terms, 't');

  // Total distance = Area of two triangles
  // Integral from a to c of |m(t-c)| = 0.5 * |m| * (c-a)^2
  // Integral from c to b of |m(t-c)| = 0.5 * |m| * (b-c)^2
  const area1 = 0.5 * Math.abs(m) * Math.pow(c - a, 2);
  const area2 = 0.5 * Math.abs(m) * Math.pow(b - c, 2);
  const totalDistance = area1 + area2;

  return {
    question: `A particle's velocity is given by $v(t) = ${polyLatex}$. Find the **total distance traveled** over the time interval $[${a}, ${b}]$.`,
    answer: totalDistance.toString(),
    type: 'number',
    hint: `Find the root of $v(t)$ to see where the particle changes direction (at $t=${c}$). Split the integral: $\\int_{${a}}^{${c}} |v(t)| dt + \\int_{${c}}^{${b}} |v(t)| dt$.`
  };
}

function generateRateProblem() {
  const { terms, antiderivTerms } = generateSimplePolynomial(1);
  const polyLatex = formatPolynomial(terms, 't');

  const a = getRandomInt(0, 2);
  const b = getRandomInt(a + 1, a + 3);

  const evaluate = (t, x) => t.coeff * Math.pow(x, t.exp);
  const valB = antiderivTerms.reduce((sum, t) => sum + evaluate(t, b), 0);
  const valA = antiderivTerms.reduce((sum, t) => sum + evaluate(t, a), 0);
  const result = valB - valA;

  const scenarios = [
    {
      text: `Water flows into a tank at a rate of $r(t) = ${polyLatex}$ gallons per minute. Find the net change in the volume of water from $t=${a}$ to $t=${b}$ minutes.`,
      hint: `The net change is the integral of the rate: $\\int_{${a}}^{${b}} r(t) \\, dt$.`
    },
    {
      text: `A population of bacteria changes at a rate of $P'(t) = ${polyLatex}$ bacteria per hour. Find the net change in population from $t=${a}$ to $t=${b}$ hours.`,
      hint: `The net change is $\\int_{${a}}^{${b}} P'(t) \\, dt$.`
    },
    {
      text: `Snow accumulates on the ground at a rate of $r(t) = ${polyLatex}$ inches per hour. Find the net change in snow depth from $t=${a}$ to $t=${b}$ hours.`,
      hint: `Integrate the rate function over the interval $[${a}, ${b}]$.`
    }
  ];

  const scenario = scenarios[getRandomInt(0, scenarios.length - 1)];

  return {
    question: scenario.text,
    answer: result.toString(),
    type: 'number',
    hint: scenario.hint
  };
}

function generateNetChange() {
  const rand = Math.random();
  if (rand < 0.33) {
    return generateParticleDisplacement();
  } else if (rand < 0.66) {
    return generateParticleDistance();
  } else {
    return generateRateProblem();
  }
}

function generateSubstitution() {
  const n = getRandomInt(2, 5);
  const question = `Evaluate $\\int \\frac{(\\ln x)^{${n}}}{x} \\, dx$.`;
  const answer = `(1/${n+1}) * ln(x)^${n+1} + C`;
  const hint = `Let $u = \\ln(x)$. Recall $\\frac{d}{dx}\\ln(x) = \\frac{1}{x}$.`;
  return { question, answer, type: 'text', hint };
}

function generateSubstitution() {
  const type = Math.random();
  if (type < 0.4) {
    return generatePolynomialSubstitution();
  } else if (type < 0.7) {
    return generateTrigSubstitution();
  } else if (type < 0.85) {
    return generateExpSubstitution();
  } else {
    return generateLogSubstitution();
  }
}

function generateExpLog() {
  if (Math.random() > 0.5) {
    const k = getRandomInt(2, 5);
    return {
      question: `Evaluate $\\int e^{${k}x} \\, dx$.`,
      answer: `(1/${k})e^(${k}x) + C`,
      type: 'text',
      hint: `Recall $\\int e^{kx} dx = \\frac{1}{k}e^{kx}$.`
    };
  } else {
    return {
      question: `Evaluate $\\int \\frac{1}{x} \\, dx$.`,
      answer: `ln(abs(x)) + C`,
      type: 'text',
      hint: `The integral is the natural logarithm.`
    };
  }
}

function generateInverseTrig() {
  if (Math.random() > 0.5) {
     return {
      question: `Evaluate $\\int \\frac{1}{1+x^2} \\, dx$.`,
      answer: `arctan(x) + C`,
      type: 'text',
      hint: `This is a standard inverse trigonometric integral.`
    };
  } else {
    return {
      question: `Evaluate $\\int \\frac{1}{\\sqrt{1-x^2}} \\, dx$.`,
      answer: `arcsin(x) + C`,
      type: 'text',
      hint: `This is the derivative of $\\arcsin(x)$.`
    };
  }
}

function generateAreaBetweenCurves() {
  // Area between y=x and y=x^n on [0, 1]
  const n = getRandomInt(2, 4);
  // Area = Int(x - x^n) = 1/2 - 1/(n+1)
  const area = 0.5 - 1/(n+1);

  return {
    question: `Find the area of the region bounded by $y=x$ and $y=x^{${n}}$ between $x=0$ and $x=1$.`,
    answer: area.toString(),
    type: 'number',
    hint: `Compute $\\int_0^1 (x - x^{${n}}) \\, dx$.`
  };
}

function generateVolumeDisk() {
  // Rotate y=x^n about x-axis from 0 to 1
  const n = getRandomInt(1, 3);
  // V = pi * Int (x^n)^2 dx = pi * Int x^(2n) dx = pi/(2n+1)
  // Let's ask for V/pi to make it a number? Or accept pi in text.
  // Validator accepts expressions.
  // We can return "pi / (2n+1)"
  const denom = 2 * n + 1;

  return {
    question: `Find the volume of the solid obtained by rotating the region under $y=x^{${n}}$ from $x=0$ to $x=1$ about the x-axis.`,
    answer: `pi/${denom}`,
    type: 'text',
    hint: `Use the Disk Method: $V = \\int_0^1 \\pi (x^{${n}})^2 dx$.`
  };
}

function generateVolumeShells() {
  // Rotate y=x^n about y-axis from 0 to 1
  const n = getRandomInt(1, 3);
  // V = 2pi * Int x * x^n dx = 2pi * Int x^(n+1) dx = 2pi/(n+2)
  const denom = n + 2;

  return {
    question: `Use the Method of Cylindrical Shells to find the volume generated by rotating the region under $y=x^{${n}}$ from $x=0$ to $x=1$ about the **y-axis**.`,
    answer: `2pi/${denom}`,
    type: 'text',
    hint: `Formula: $V = \\int_a^b 2\\pi x f(x) \\, dx$.`
  };
}

function generateArcLength() {
  // Line segment y = mx from 0 to a
  const m = getRandomInt(1, 4);
  const a = getRandomInt(1, 5);
  // L = a * sqrt(1+m^2)
  const val = a * Math.sqrt(1 + m*m);

  return {
    question: `Find the arc length of the line $y = ${m}x$ from $x=0$ to $x=${a}$.`,
    answer: val.toString(),
    type: 'number',
    hint: `This is a line segment. Use the distance formula or arc length integral $\\int \\sqrt{1+(y')^2} dx$.`
  };
}

function generatePhysicalApp() {
  // Work done stretching spring
  const k = getRandomInt(2, 10) * 2;
  const dist = getRandomInt(1, 5);
  const work = 0.5 * k * dist * dist;

  return {
    question: `A spring requires a force of ${k} N to be held stretched 1 m beyond its natural length. How much work is done in stretching it from its natural length to ${dist} m beyond its natural length?`,
    answer: work.toString(),
    type: 'number',
    hint: `Use Hooke's Law $F(x) = kx$. Here $k=${k}$. Then $W = \\int_0^{${dist}} kx \\, dx$.`
  };
}

function generateMoments() {
  // Centroid of rectangle [0, a] x [0, b]
  const a = getRandomInt(2, 6);
  const b = getRandomInt(2, 6);
  const x_bar = a / 2;

  return {
    question: `Find the x-coordinate of the centroid of the rectangular region bounded by $x=0$, $x=${a}$, $y=0$, and $y=${b}$.`,
    answer: x_bar.toString(),
    type: 'number',
    hint: `For a rectangle, the centroid is in the center.`
  };
}

function generateGrowthDecay() {
  const A = getRandomInt(100, 500);
  const k = getRandomInt(1, 5);
  const t = getRandomInt(2, 4);

  return {
    question: `A population grows according to $P(t) = ${A}e^{${k}t}$. What is the population at $t=${t}$? (Round to nearest integer)`,
    answer: Math.round(A * Math.exp(k * t)).toString(),
    type: 'number',
    hint: `Evaluate the function at $t=${t}$.`
  };
}

function generateHyperbolic() {
  if (Math.random() > 0.5) {
    const k = getRandomInt(2, 5);
     return {
      question: `Evaluate $\\frac{d}{dx} \\sinh(${k}x)$.`,
      answer: `${k}cosh(${k}x)`,
      type: 'text',
      hint: `Chain rule: $\\frac{d}{dx} \\sinh(u) = \\cosh(u) u'$.`
    };
  } else {
    return {
      question: `Evaluate $\\int \\cosh(x) \\, dx$.`,
      answer: `sinh(x) + C`,
      type: 'text',
      hint: `The antiderivative of $\\cosh$ is $\\sinh$.`
    };
  }
}

function generateGeneric(topic) {
  return {
    question: `Practice problem for ${topic}. (Functionality coming soon)`,
    answer: `0`,
    type: 'text',
    hint: `Check back later.`
  };
}

export function generateProblem(type) {
  switch (type) {
    case 'approximating-areas':
      return generateRiemannSum();
    case 'definite-integral-properties':
      return generateDefiniteIntegral();
    case 'fundamental-theorem':
      return generateFundamentalTheorem();
    case 'net-change':
      return generateNetChange();
    case 'substitution-integral':
      return generateSubstitution();
    case 'exp-log-integrals':
      return generateExpLog();
    case 'inverse-trig-integrals':
      return generateInverseTrig();
    case 'area-between-curves':
      return generateAreaBetweenCurves();
    case 'volume-slicing':
      return generateVolumeDisk();
    case 'volume-shells':
      return generateVolumeShells();
    case 'arc-length':
      return generateArcLength();
    case 'physical-applications':
      return generatePhysicalApp();
    case 'moments-mass':
      return generateMoments();
    case 'exp-log-hard':
      return generateExpLog();
    case 'growth-decay':
      return generateGrowthDecay();
    case 'hyperbolic-functions':
      return generateHyperbolic();
    default:
      return generateGeneric(type);
  }
}
