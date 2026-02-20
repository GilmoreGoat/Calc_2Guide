export const curriculum = [
  {
    id: "module-1",
    title: "Module 1: Integrals",
    topics: [
      {
        id: "approximating-areas",
        title: "1.1 Approximating Areas",
        practiceType: 'approximating-areas',
        content: [
          {
            type: 'text',
            content: `
## The Area Problem

We begin with the problem of finding the area of the region $S$ that lies under the curve $y=f(x)$ from $a$ to $b$. This means that $S$, illustrated in the figure below, is bounded by the graph of a continuous function $f$ (where $f(x) \\ge 0$), the vertical lines $x=a$ and $x=b$, and the x-axis.

## Sigma Notation

Sigma notation is a convenient way to express large sums.
$$ \\sum_{i=1}^{n} a_i = a_1 + a_2 + \\dots + a_n $$

**Properties:**
1. $\\sum_{i=1}^{n} c = nc$
2. $\\sum_{i=1}^{n} c a_i = c \\sum_{i=1}^{n} a_i$
3. $\\sum_{i=1}^{n} (a_i + b_i) = \\sum_{i=1}^{n} a_i + \\sum_{i=1}^{n} b_i$
4. $\\sum_{i=1}^{n} (a_i - b_i) = \\sum_{i=1}^{n} a_i - \\sum_{i=1}^{n} b_i$

**Formulas:**
*   $\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}$
*   $\\sum_{i=1}^{n} i^2 = \\frac{n(n+1)(2n+1)}{6}$
*   $\\sum_{i=1}^{n} i^3 = \\left[\\frac{n(n+1)}{2}\\right]^2$
`
          },
          {
            type: 'stepped-example',
            title: 'Walkthrough: Evaluating a Sum',
            problem: 'Evaluate the sum $\\sum_{i=1}^{10} (i^2 - 4i + 3)$.',
            steps: [
              {
                text: 'Use the linearity properties to split the sum.',
                math: '$\\sum_{i=1}^{10} i^2 - 4\\sum_{i=1}^{10} i + \\sum_{i=1}^{10} 3$'
              },
              {
                text: 'Apply the summation formulas with $n=10$.',
                math: '$\\sum i^2 = \\frac{10(11)(21)}{6} = 385$ \\\\ $\\sum i = \\frac{10(11)}{2} = 55$ \\\\ $\\sum 3 = 10(3) = 30$'
              },
              {
                text: 'Substitute and calculate.',
                math: '$385 - 4(55) + 30 = 385 - 220 + 30 = 195$'
              }
            ]
          },
          {
            type: 'text',
            content: `
## Riemann Sums

To estimate the area under $y=f(x)$ on $[a, b]$, we divide the interval into $n$ subintervals of equal width:
$$ \\Delta x = \\frac{b-a}{n} $$

The endpoints of the subintervals are:
$$ x_0 = a, \\quad x_1 = a + \\Delta x, \\quad x_2 = a + 2\\Delta x, \\quad \\dots, \\quad x_n = b $$
Generally, $x_i = a + i\\Delta x$.

A **Riemann Sum** is an approximation of the area given by:
$$ A \\approx \\sum_{i=1}^{n} f(x_i^*) \\Delta x $$
where $x_i^*$ is any sample point in the $i$-th subinterval $[x_{i-1}, x_i]$.

### Common Sample Points

1.  **Left-Endpoint Approximation ($L_n$):** Choose $x_i^* = x_{i-1}$ (the left end).
    $$ L_n = \\sum_{i=1}^{n} f(x_{i-1}) \\Delta x $$

2.  **Right-Endpoint Approximation ($R_n$):** Choose $x_i^* = x_i$ (the right end).
    $$ R_n = \\sum_{i=1}^{n} f(x_i) \\Delta x $$

3.  **Midpoint Approximation ($M_n$):** Choose $x_i^* = \\bar{x}_i = \\frac{x_{i-1} + x_i}{2}$.
    $$ M_n = \\sum_{i=1}^{n} f(\\bar{x}_i) \\Delta x $$

### Upper and Lower Sums

For a continuous function on $[a, b]$:
*   The **Upper Sum ($U_n$)** uses the maximum value of $f(x)$ in each subinterval.
*   The **Lower Sum ($L_n$)** uses the minimum value of $f(x)$ in each subinterval.

If $f(x)$ is **increasing**, $L_n$ (Left sum) is the Lower Sum and $R_n$ (Right sum) is the Upper Sum.
If $f(x)$ is **decreasing**, $R_n$ is the Lower Sum and $L_n$ is the Upper Sum.
`
          },
          {
            type: 'stepped-example',
            title: 'Walkthrough: Approximating Area with Right-Endpoint Rule',
            problem: 'Estimate the area under $f(x) = x^2$ on the interval $[0, 2]$ using $n=4$ rectangles and the **Right-Endpoint Rule**.',
            steps: [
              {
                text: 'Calculate $\\Delta x$.',
                math: '$\\Delta x = \\frac{b-a}{n} = \\frac{2-0}{4} = 0.5$'
              },
              {
                text: 'Find the Grid Points ($x_i$). Start at $a=0$ and add $\\Delta x$ repeatedly.',
                math: '$x_0 = 0, x_1 = 0.5, x_2 = 1.0, x_3 = 1.5, x_4 = 2.0$'
              },
              {
                text: 'Choose Sample Points ($x_i^*$). For Right endpoints, we use $x_1, x_2, x_3, x_4$.',
                math: '$x_1^* = 0.5, x_2^* = 1.0, x_3^* = 1.5, x_4^* = 2.0$'
              },
              {
                text: 'Evaluate the Function at sample points.',
                math: '$f(0.5) = 0.25, f(1.0) = 1.00, f(1.5) = 2.25, f(2.0) = 4.00$'
              },
              {
                text: 'Sum and Multiply to find $R_4$.',
                math: '$R_4 = 0.5 [ 0.25 + 1.00 + 2.25 + 4.00 ] = 0.5 [ 7.5 ] = 3.75$'
              }
            ]
          },
          {
            type: 'stepped-example',
            title: 'Walkthrough: Approximating Area with Midpoint Rule',
            problem: 'Estimate the area under $f(x) = x^2 + 1$ on the interval $[0, 2]$ using $n=2$ rectangles and the **Midpoint Rule**.',
            steps: [
              {
                text: 'Calculate $\\Delta x$.',
                math: '$\\Delta x = \\frac{2-0}{2} = 1$'
              },
              {
                text: 'Find the Grid Points.',
                math: '$x_0 = 0, x_1 = 1, x_2 = 2$'
              },
              {
                text: 'Find the Midpoints ($x_i^*$).',
                math: 'Midpoint of $[0, 1]$ is $0.5$. Midpoint of $[1, 2]$ is $1.5$.'
              },
              {
                text: 'Evaluate the Function at midpoints.',
                math: '$f(0.5) = (0.5)^2 + 1 = 1.25$ \\\\ $f(1.5) = (1.5)^2 + 1 = 3.25$'
              },
              {
                text: 'Sum and Multiply to find $M_2$.',
                math: '$M_2 = 1 [ 1.25 + 3.25 ] = 4.5$'
              }
            ]
          },
          {
            type: 'text',
            content: `
## The Limit of Riemann Sums

As we increase the number of subintervals $n$ (so $\\Delta x \\to 0$), the approximation becomes more accurate. The exact area $A$ is defined as the limit of the Riemann sums:

$$ A = \\lim_{n \\to \\infty} R_n = \\lim_{n \\to \\infty} \\sum_{i=1}^{n} f(x_i) \\Delta x $$
(This limit is the same for Left, Right, or Midpoint sums).

This limit definition allows us to calculate areas exactly, even for curved regions.
`
          },
          {
            type: 'stepped-example',
            title: 'Walkthrough: Finding Exact Area using Limits',
            problem: 'Find the exact area under the curve $f(x) = 3x$ on the interval $[0, 2]$ using the limit of Right-Endpoint sums.',
            steps: [
              {
                text: 'Set up $\\Delta x$ and $x_i$ for general $n$.',
                math: '$\\Delta x = \\frac{2-0}{n} = \\frac{2}{n}$. \\\\ $x_i = 0 + i\\Delta x = \\frac{2i}{n}$.'
              },
              {
                text: 'Evaluate $f(x_i)$.',
                math: '$f(x_i) = 3\\left(\\frac{2i}{n}\\right) = \\frac{6i}{n}$.'
              },
              {
                text: 'Form the Riemann Sum $R_n = \\sum_{i=1}^n f(x_i) \\Delta x$.',
                math: '$R_n = \\sum_{i=1}^n \\left(\\frac{6i}{n}\\right) \\left(\\frac{2}{n}\\right) = \\sum_{i=1}^n \\frac{12i}{n^2}$.'
              },
              {
                text: 'Pull out constants and use the sum formula for $i$.',
                math: '$R_n = \\frac{12}{n^2} \\sum_{i=1}^n i = \\frac{12}{n^2} \\cdot \\frac{n(n+1)}{2} = \\frac{6(n^2+n)}{n^2} = 6\\left(1 + \\frac{1}{n}\\right)$.'
              },
              {
                text: 'Take the limit as $n \\to \\infty$.',
                math: '$A = \\lim_{n \\to \\infty} 6\\left(1 + \\frac{1}{n}\\right) = 6(1 + 0) = 6$.'
              }
            ]
          },
          {
            type: 'text',
            content: `
## The Distance Problem

The area under a velocity-time curve $v(t)$ represents the distance traveled.
If velocity is constant, $d = v \\times t$, which is the area of a rectangle.
If velocity varies, we approximate the distance by summing small rectangles (small time intervals where velocity is roughly constant).

$$ \\text{Distance} \\approx \\sum_{i=1}^{n} v(t_i^*) \\Delta t $$

As $n \\to \\infty$, this sum approaches the exact distance (the definite integral).
`
          }
        ]
      },
      {
        id: "definite-integral",
        title: "1.2 The Definite Integral",
        practiceType: 'definite-integral-properties',
        content: [
          {
            type: 'text',
            content: `
## Definition

The **definite integral** of a function $f(x)$ from $a$ to $b$ is the limit of Riemann sums as the number of subintervals approaches infinity:

$$ \\int_a^b f(x) \\, dx = \\lim_{n \\to \\infty} \\sum_{i=1}^n f(x_i^*) \\Delta x $$

*   **Integrand:** The function $f(x)$.
*   **Limits of Integration:** The numbers $a$ (lower limit) and $b$ (upper limit).

## Geometric Interpretation

The definite integral represents the **net signed area** between the curve $y=f(x)$ and the x-axis on the interval $[a, b]$.

*   Area above the x-axis is counted as **positive**.
*   Area below the x-axis is counted as **negative**.

$$ \\int_a^b f(x) \\, dx = A_{up} - A_{down} $$

## Integrability

**Theorem:** If $f$ is continuous on $[a, b]$, or if $f$ has only a finite number of jump discontinuities, then $f$ is integrable on $[a, b]$; that is, the definite integral $\\int_a^b f(x) \\, dx$ exists.
`
          },
          {
            type: 'stepped-example',
            title: 'Walkthrough: Using Geometry to Evaluate an Integral',
            problem: 'Evaluate $\\int_{-3}^3 \\sqrt{9-x^2} \\, dx$ by interpreting it in terms of areas.',
            steps: [
              {
                text: 'Identify the shape of the graph of the integrand.',
                math: 'Let $y = \\sqrt{9-x^2}$. Squaring both sides gives $y^2 = 9-x^2$, or $x^2 + y^2 = 9$. This is the equation of a circle with radius $r=3$, centered at the origin.'
              },
              {
                text: 'Since $y = \\sqrt{9-x^2} \\ge 0$, the graph is the upper semicircle.',
                math: 'The integral represents the area of this semicircle.'
              },
              {
                text: 'Calculate the area using the formula for a semicircle: $A = \\frac{1}{2}\\pi r^2$.',
                math: 'A = \\frac{1}{2}\\pi (3)^2 = \\frac{9\\pi}{2}'
              },
              {
                text: 'State the final answer.',
                math: '\\int_{-3}^3 \\sqrt{9-x^2} \\, dx = \\frac{9\\pi}{2}'
              }
            ]
          },
          {
            type: 'text',
            content: `
## Properties of the Definite Integral

Assuming $f$ and $g$ are integrable functions:

1.  **Reversing Limits:** $\\int_b^a f(x) \\, dx = -\\int_a^b f(x) \\, dx$
2.  **Zero Width:** $\\int_a^a f(x) \\, dx = 0$
3.  **Constant Multiple:** $\\int_a^b c f(x) \\, dx = c \\int_a^b f(x) \\, dx$
4.  **Sum/Difference:** $\\int_a^b [f(x) \\pm g(x)] \\, dx = \\int_a^b f(x) \\, dx \\pm \\int_a^b g(x) \\, dx$
5.  **Additivity:** $\\int_a^c f(x) \\, dx + \\int_c^b f(x) \\, dx = \\int_a^b f(x) \\, dx$
6.  **Comparison:** If $f(x) \\ge g(x)$ for $a \\le x \\le b$, then $\\int_a^b f(x) \\, dx \\ge \\int_a^b g(x) \\, dx$.
`
          },
          {
            type: 'stepped-example',
            title: 'Walkthrough: Using Properties of Integrals',
            problem: 'Given that $\\int_0^{10} f(x) \\, dx = 17$ and $\\int_0^8 f(x) \\, dx = 12$, find $\\int_8^{10} f(x) \\, dx$.',
            steps: [
              {
                text: 'Use the Additivity Property.',
                math: '\\int_0^{10} f(x) \\, dx = \\int_0^8 f(x) \\, dx + \\int_8^{10} f(x) \\, dx'
              },
              {
                text: 'Substitute the known values into the equation.',
                math: '17 = 12 + \\int_8^{10} f(x) \\, dx'
              },
              {
                text: 'Solve for the unknown integral.',
                math: '\\int_8^{10} f(x) \\, dx = 17 - 12 = 5'
              }
            ]
          },
          {
            type: 'text',
            content: `
## Average Value of a Function

The average value of a function $f(x)$ on the interval $[a, b]$ is defined as:

$$ f_{ave} = \\frac{1}{b-a} \\int_a^b f(x) \\, dx $$

**Mean Value Theorem for Integrals:**
If $f$ is continuous on $[a, b]$, then there exists a number $c$ in $[a, b]$ such that:
$$ f(c) = f_{ave} = \\frac{1}{b-a} \\int_a^b f(x) \\, dx $$
or equivalently,
$$ \\int_a^b f(x) \\, dx = f(c)(b-a) $$
`
          },
          {
            type: 'stepped-example',
            title: 'Walkthrough: Calculating Average Value',
            problem: 'Find the average value of $f(x) = 1 + x^2$ on the interval $[-1, 2]$.',
            steps: [
              {
                text: 'Set up the formula for average value.',
                math: 'f_{ave} = \\frac{1}{b-a} \\int_a^b f(x) \\, dx = \\frac{1}{2 - (-1)} \\int_{-1}^2 (1 + x^2) \\, dx'
              },
              {
                text: 'Simplify the coefficient outside the integral.',
                math: 'f_{ave} = \\frac{1}{3} \\int_{-1}^2 (1 + x^2) \\, dx'
              },
              {
                text: 'Evaluate the definite integral.',
                math: '\\int_{-1}^2 (1 + x^2) \\, dx = \\left[ x + \\frac{x^3}{3} \\right]_{-1}^2'
              },
              {
                text: 'Calculate the value at the upper limit ($x=2$) and lower limit ($x=-1$).',
                math: 'F(2) = 2 + \\frac{8}{3} = \\frac{14}{3} \\\\\nF(-1) = -1 + \\frac{-1}{3} = -\\frac{4}{3}'
              },
              {
                text: 'Subtract and multiply by the coefficient.',
                math: 'f_{ave} = \\frac{1}{3} \\left( \\frac{14}{3} - (-\\frac{4}{3}) \\right) = \\frac{1}{3} \\left( \\frac{18}{3} \\right) = \\frac{1}{3} (6) = 2'
              }
            ]
          },
          {
            type: 'text',
            content: `
## Practice Problems

Test your understanding with the generated problems below.
`
          }
        ]
      },
      {
        id: "fundamental-theorem",
        title: "1.3 The Fundamental Theorem of Calculus",
        practiceType: 'fundamental-theorem',
        content: [
          {
            type: 'text',
            content: `
The Fundamental Theorem of Calculus (FTC) is the bridge between differential calculus (rates of change) and integral calculus (accumulation of quantities). It shows that differentiation and integration are inverse processes.

## Part 1: The Area Accumulation Function

The first part of the theorem deals with the derivative of an integral. It states that if we define a function $g(x)$ as the definite integral of a continuous function $f$ from a fixed point $a$ to a variable point $x$, then $g(x)$ is an antiderivative of $f(x)$.

### Theorem (FTC 1)

If $f$ is continuous on $[a, b]$, then the function $g$ defined by
$$ g(x) = \\int_a^x f(t) \\, dt \\quad \\text{for } a \\le x \\le b $$
is continuous on $[a, b]$, differentiable on $(a, b)$, and
$$ g'(x) = f(x) $$

### Intuition

Imagine $g(x)$ represents the area under the curve $y=f(t)$ from $a$ to $x$. If we increase $x$ by a small amount $h$, the change in area is approximately the area of a rectangle with height $f(x)$ and width $h$.
$$ g(x+h) - g(x) \\approx f(x) \\cdot h $$
Dividing by $h$ gives:
$$ \\frac{g(x+h) - g(x)}{h} \\approx f(x) $$
Taking the limit as $h \\to 0$ gives the definition of the derivative: $g'(x) = f(x)$.
`
          },
          {
            type: 'stepped-example',
            title: 'Walkthrough: FTC Part 1',
            problem: 'Find $\\frac{d}{dx} \\int_1^x t^3 \\, dt$.',
            steps: [
              {
                text: 'Identify $f(t)$ and apply FTC 1.',
                math: 'Here $f(t) = t^3$. By FTC 1, $\\frac{d}{dx} \\int_a^x f(t) \\, dt = f(x)$.'
              },
              {
                text: 'Substitute $x$ into the function.',
                math: '\\frac{d}{dx} \\int_1^x t^3 \\, dt = x^3'
              }
            ]
          },
          {
            type: 'stepped-example',
            title: 'Walkthrough: Chain Rule with FTC',
            problem: 'Find $\\frac{d}{dx} \\int_1^{x^4} \\sec t \\, dt$.',
            steps: [
              {
                text: 'Identify the upper limit as a function $u(x)$.',
                math: 'Let $u(x) = x^4$. Then $u\'(x) = 4x^3$.'
              },
              {
                text: 'Apply the Chain Rule: $\\frac{d}{dx} \\int_a^{u(x)} f(t) \\, dt = f(u(x)) \\cdot u\'(x)$.',
                math: '$f(t) = \\sec t$.'
              },
              {
                text: 'Substitute $u(x)$ and multiply by $u\'(x)$.',
                math: '\\frac{d}{dx} = \\sec(x^4) \\cdot 4x^3'
              }
            ]
          },
          {
            type: 'text',
            content: `
## Part 2: Evaluating Definite Integrals

The second part of the theorem gives us a powerful method to evaluate definite integrals without using Riemann sums. It links the definite integral to antiderivatives.

### Theorem (FTC 2)

If $f$ is continuous on $[a, b]$, then
$$ \\int_a^b f(x) \\, dx = F(b) - F(a) $$
where $F$ is any antiderivative of $f$, that is, a function such that $F'(x) = f(x)$.

**Notation:** We often use the bracket notation:
$$ F(b) - F(a) = \\left[ F(x) \\right]_a^b $$
`
          },
          {
            type: 'stepped-example',
            title: 'Walkthrough: Evaluating with FTC 2',
            problem: 'Evaluate $\\int_1^3 e^x \\, dx$.',
            steps: [
              {
                text: 'Find an antiderivative $F(x)$.',
                math: 'An antiderivative of $e^x$ is $e^x$.'
              },
              {
                text: 'Apply FTC 2: $F(3) - F(1)$.',
                math: '\\left[ e^x \\right]_1^3 = e^3 - e^1 = e^3 - e'
              }
            ]
          },
          {
            type: 'stepped-example',
            title: 'Walkthrough: Evaluating Trig Integral',
            problem: 'Evaluate $\\int_0^{\\pi} \\cos x \\, dx$.',
            steps: [
              {
                text: 'Find an antiderivative $F(x)$.',
                math: 'An antiderivative of $\\cos x$ is $\\sin x$.'
              },
              {
                text: 'Apply FTC 2: $F(\\pi) - F(0)$.',
                math: '\\left[ \\sin x \\right]_0^{\\pi} = \\sin \\pi - \\sin 0'
              },
              {
                text: 'Calculate values.',
                math: '0 - 0 = 0'
              }
            ]
          },
          {
            type: 'text',
            content: `
## Summary

*   **Differentiation** and **Integration** are inverse operations.
*   **FTC1** tells how to differentiate an integral: $\\frac{d}{dx} \\int_a^x f(t) dt = f(x)$.
*   **FTC2** tells how to evaluate an integral using an antiderivative: $\\int_a^b f(x) dx = F(b) - F(a)$.
`
          }
        ]
      },
      {
        id: "net-change",
        title: "1.4 Integration Formulas and the Net Change Theorem",
        practiceType: 'net-change',
        content: [
          {
            type: 'text',
            content: `
## Net Change Theorem

The Net Change Theorem states that the integral of a rate of change is the net change:

$$ \\int_a^b F'(x) \\, dx = F(b) - F(a) $$

This principle applies to many physical situations where a quantity changes at a known rate.

## Applications

### 1. Particle Motion: Displacement vs. Distance

If $v(t)$ is the velocity of a particle moving along a line, then:

*   **Displacement:** The net change in position is $\\int_{t_1}^{t_2} v(t) \\, dt = s(t_2) - s(t_1)$.
*   **Total Distance Traveled:** The total distance is the integral of the speed $|v(t)|$:
    $$ \\int_{t_1}^{t_2} |v(t)| \\, dt $$
`
          },
          {
            type: 'stepped-example',
            title: 'Walkthrough: Particle Motion (Displacement & Distance)',
            problem: 'Consider a particle with velocity $v(t) = t^2 - 3t + 2$ m/s over the time interval $[0, 3]$. Find the displacement and total distance traveled.',
            steps: [
              {
                text: 'Calculate Displacement using the integral of velocity.',
                math: '$\\int_0^3 (t^2 - 3t + 2) \\, dt = \\left[ \\frac{t^3}{3} - \\frac{3t^2}{2} + 2t \\right]_0^3 = \\left(\\frac{27}{3} - \\frac{27}{2} + 6\\right) - 0 = 9 - 13.5 + 6 = 1.5 \\text{ m}$'
              },
              {
                text: 'For Total Distance, find where $v(t)$ changes sign.',
                math: 'Factor $v(t) = (t-1)(t-2)$. Roots are at $t=1$ and $t=2$. Both are in $[0, 3]$.'
              },
              {
                text: 'Split the integral at the roots and integrate absolute value.',
                math: 'Distance = $\\int_0^1 |v(t)| dt + \\int_1^2 |v(t)| dt + \\int_2^3 |v(t)| dt$'
              },
              {
                text: 'Evaluate each part.',
                math: 'On $[0, 1]$, $v>0$: $\\int_0^1 v(t) dt = 5/6$. \nOn $[1, 2]$, $v<0$: $\\int_1^2 -v(t) dt = 1/6$. \nOn $[2, 3]$, $v>0$: $\\int_2^3 v(t) dt = 5/6$.'
              },
              {
                text: 'Sum the parts.',
                math: 'Total Distance = $\\frac{5}{6} + \\frac{1}{6} + \\frac{5}{6} = \\frac{11}{6} \\approx 1.83 \\text{ m}$'
              }
            ]
          },
          {
            type: 'text',
            content: `
### 2. Fluid Flow

If water flows into a tank at a rate of $r(t)$ gallons per minute, the total amount of water that entered the tank between $t=a$ and $t=b$ is $\\int_a^b r(t) \\, dt$.
`
          },
          {
            type: 'stepped-example',
            title: 'Walkthrough: Fluid Flow',
            problem: 'Water leaks from a tank at a rate of $r(t) = 2t$ gallons/min. How much water leaks out between $t=1$ and $t=4$?',
            steps: [
              {
                text: 'Setup the integral for total volume.',
                math: 'Total Volume = $\\int_1^4 2t \\, dt$'
              },
              {
                text: 'Evaluate the integral.',
                math: '$[t^2]_1^4 = 4^2 - 1^2 = 16 - 1 = 15$'
              },
              {
                text: 'State the final answer.',
                math: '15 \\text{ gallons}'
              }
            ]
          },
          {
            type: 'text',
            content: `
### 3. Population Growth

If a population grows at a rate of $P'(t)$ individuals per year, the net increase in population from year $a$ to year $b$ is $\\int_a^b P'(t) \\, dt$.
`
          },
          {
            type: 'stepped-example',
            title: 'Walkthrough: Population Growth',
            problem: 'A bacteria culture grows at a rate of $P\'(t) = 100e^{0.5t}$. Find the increase in population over the first 2 hours.',
            steps: [
              {
                text: 'Setup the integral.',
                math: '$\\int_0^2 100e^{0.5t} \\, dt$'
              },
              {
                text: 'Find the antiderivative.',
                math: '$100 \\left[ \\frac{e^{0.5t}}{0.5} \\right]_0^2 = 200 [e^{0.5t}]_0^2$'
              },
              {
                text: 'Evaluate.',
                math: '$200 (e^1 - e^0) = 200(e - 1) \\approx 343.6$'
              }
            ]
          },
          {
            type: 'text',
            content: `
## Basic Integration Formulas

Recall the following standard integrals ($C$ is the constant of integration):

*   $\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C$ ($n \\neq -1$)
*   $\\int \\frac{1}{x} \\, dx = \\ln|x| + C$
*   $\\int e^x \\, dx = e^x + C$
*   $\\int \\sin x \\, dx = -\\cos x + C$
*   $\\int \\cos x \\, dx = \\sin x + C$
*   $\\int \\sec^2 x \\, dx = \\tan x + C$
*   $\\int \\sec x \\tan x \\, dx = \\sec x + C$
*   $\\int \\frac{1}{1+x^2} \\, dx = \\arctan x + C$
*   $\\int \\frac{1}{\\sqrt{1-x^2}} \\, dx = \\arcsin x + C$

**Examples:**
*   $\\int (3x^2 + 4x) \\, dx = x^3 + 2x^2 + C$
*   $\\int (e^x + \\cos x) \\, dx = e^x + \\sin x + C$
`
          }
        ]
      },
      {
        id: "substitution",
        title: "1.5 Substitution",
        practiceType: 'substitution-integral',
        content: [
          {
            type: 'text',
            content: `
## The Substitution Rule

The Substitution Rule, often called **u-substitution**, is the integral calculus counterpart to the Chain Rule for differentiation. It allows us to integrate composite functions.

### Theorem

If $u = g(x)$ is a differentiable function whose range is an interval $I$ and $f$ is continuous on $I$, then:

$$ \\int f(g(x))g'(x) \\, dx = \\int f(u) \\, du $$

The core idea is to introduce a new variable $u$ to simplify the integrand.

## Strategy: How to Choose $u$

The success of substitution depends on choosing the right $u$. Look for a function $g(x)$ inside another function, such that its derivative $g'(x)$ (or a constant multiple of it) is present as a factor in the integrand.

**Common choices for $u$:**
1.  **Powers:** Inside $( ... )^n$, let $u = \\dots$
2.  **Roots:** Inside $\\sqrt{ \\dots }$, let $u = \\dots$
3.  **Trigonometry:** The argument of a trig function, e.g., $\\cos(\\dots)$.
4.  **Exponentials:** The exponent, e.g., $e^{\\dots}$.
5.  **Denominators:** The entire denominator (if the numerator is its derivative).
`
          },
          {
            type: 'stepped-example',
            title: 'Walkthrough: Polynomial Substitution',
            problem: 'Evaluate $\\int x^2 (x^3 + 5)^9 \\, dx$.',
            steps: [
              {
                text: 'Choose $u$. The inner function is $x^3 + 5$.',
                math: 'Let $u = x^3 + 5$.'
              },
              {
                text: 'Find $du$ and adjust for constants.',
                math: '$du = 3x^2 \\, dx$. We have $x^2 \\, dx$, so substitute $\\frac{1}{3} du = x^2 \\, dx$.'
              },
              {
                text: 'Substitute into the integral.',
                math: '$\\int (x^3+5)^9 \\cdot (x^2 \\, dx) = \\int u^9 \\cdot \\frac{1}{3} du = \\frac{1}{3} \\int u^9 \\, du$'
              },
              {
                text: 'Integrate.',
                math: '$\\frac{1}{3} \\cdot \\frac{u^{10}}{10} + C = \\frac{u^{10}}{30} + C$'
              },
              {
                text: 'Back-substitute.',
                math: '$\\frac{(x^3+5)^{10}}{30} + C$'
              }
            ]
          },
          {
            type: 'stepped-example',
            title: 'Walkthrough: Trig Substitution',
            problem: 'Evaluate $\\int \\sqrt{\\cos x} \\sin x \\, dx$.',
            steps: [
              {
                text: 'Choose $u$. Inside the root is $\\cos x$.',
                math: 'Let $u = \\cos x$.'
              },
              {
                text: 'Find $du$ and adjust.',
                math: '$du = -\\sin x \\, dx \\implies -du = \\sin x \\, dx$.'
              },
              {
                text: 'Substitute.',
                math: '$\\int \\sqrt{u} \\cdot (-du) = -\\int u^{1/2} \\, du$'
              },
              {
                text: 'Integrate and back-substitute.',
                math: '$-\\frac{u^{3/2}}{3/2} + C = -\\frac{2}{3} (\\cos x)^{3/2} + C$'
              }
            ]
          },
          {
            type: 'stepped-example',
            title: 'Walkthrough: Exponential Substitution',
            problem: 'Evaluate $\\int \\frac{e^{\\sqrt{x}}}{\\sqrt{x}} \\, dx$.',
            steps: [
              {
                text: 'Choose $u$. The exponent is $\\sqrt{x}$.',
                math: 'Let $u = \\sqrt{x}$.'
              },
              {
                text: 'Find $du$.',
                math: '$du = \\frac{1}{2} x^{-1/2} \\, dx = \\frac{1}{2\\sqrt{x}} \\, dx$.'
              },
              {
                text: 'Adjust to match the integrand.',
                math: '$2 du = \\frac{1}{\\sqrt{x}} \\, dx$.'
              },
              {
                text: 'Substitute and integrate.',
                math: '$\\int e^u \\cdot 2 du = 2e^u + C = 2e^{\\sqrt{x}} + C$'
              }
            ]
          },
          {
            type: 'text',
            content: `
## Definite Integrals

For definite integrals $\\int_a^b f(g(x))g'(x) \\, dx$, you have two methods:

**Method 1: Change Limits (Recommended)**
Change the limits of integration from $x$-values to $u$-values using $u=g(x)$.
*   Lower limit: $x=a \\Rightarrow u=g(a)$.
*   Upper limit: $x=b \\Rightarrow u=g(b)$.

$$ \\int_a^b f(g(x))g'(x) \\, dx = \\int_{g(a)}^{g(b)} f(u) \\, du $$

**Example**: $\\int_0^1 2x (x^2+1)^3 \\, dx$.
*   $u = x^2+1$, $du = 2x \\, dx$.
*   Limits: If $x=0$, $u=1$. If $x=1$, $u=2$.
    $$ \\int_1^2 u^3 \\, du = \\left[ \\frac{u^4}{4} \\right]_1^2 = \\frac{16}{4} - \\frac{1}{4} = \\frac{15}{4} = 3.75 $$

**Method 2: Indefinite First**
Find the indefinite integral in terms of $x$, then evaluate at original limits $a$ and $b$.

## Common Pitfalls

*   **Forgetting $dx$**: Always write $du = \\dots dx$. It helps you match terms in the integrand.
*   **Constant Factors**: Don't forget to adjust for constants (like the factor of $1/3$ in Example 1).
*   **Mixing Variables**: Never write an integral that contains both $x$ and $u$. Convert everything to $u$.
*   **Definite Integrals**: If you change limits to $u$, do **not** back-substitute to $x$. Evaluate using the $u$ limits.
`
          }
        ]
      },
      {
        id: "exp-log-integrals",
        title: "1.6 Integrals Involving Exponential and Logarithmic Functions",
        practiceType: 'exp-log-integrals',
        content: [
          {
            type: 'text',
            content: `
## Exponential Functions

The exponential function $f(x) = e^x$ is unique because it is its own derivative.
$$ \\frac{d}{dx} e^x = e^x $$
Consequently, its integral is also itself:
$$ \\int e^x \\, dx = e^x + C $$

### General Exponential Functions
For a base $a > 0, a \\neq 1$:
$$ \\frac{d}{dx} a^x = a^x \\ln a $$
$$ \\int a^x \\, dx = \\frac{a^x}{\\ln a} + C $$

### Chain Rule with Exponentials
If $u = g(x)$, then $\\int e^{g(x)} g'(x) \\, dx = e^{g(x)} + C$.

**Example:**
Evaluate $\\int x e^{x^2} \\, dx$.
Let $u = x^2$, then $du = 2x \\, dx$ or $\\frac{1}{2} du = x \\, dx$.
$$ \\int x e^{x^2} \\, dx = \\int e^u \\cdot \\frac{1}{2} du = \\frac{1}{2} e^u + C = \\frac{1}{2} e^{x^2} + C $$

## Logarithmic Functions

Recall the Power Rule for integration: $\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C$, which is valid for all $n \\neq -1$.
When $n = -1$, we have $\\int x^{-1} \\, dx = \\int \\frac{1}{x} \\, dx$.
The antiderivative of $1/x$ is $\\ln|x|$.
$$ \\int \\frac{1}{x} \\, dx = \\ln|x| + C $$

### Logarithms and Substitution
Many integrals result in a natural logarithm. The general form is:
$$ \\int \\frac{g'(x)}{g(x)} \\, dx = \\ln|g(x)| + C $$

**Example:**
Evaluate $\\int \\tan x \\, dx$.
$$ \\int \\tan x \\, dx = \\int \\frac{\\sin x}{\\cos x} \\, dx $$
Let $u = \\cos x$, then $du = -\\sin x \\, dx$.
$$ \\int \\frac{-du}{u} = -\\ln|u| + C = -\\ln|\\cos x| + C = \\ln|\\sec x| + C $$
`
          },
          {
            type: 'stepped-example',
            title: 'Walkthrough: Definite Integral with Exponentials',
            problem: 'Evaluate $\\int_0^1 \\frac{e^x}{1+e^x} \\, dx$.',
            steps: [
              {
                text: 'Identify Substitution.',
                math: 'Let $u = 1 + e^x$. Then $du = e^x \\, dx$.'
              },
              {
                text: 'Change Limits.',
                math: 'When $x=0$, $u = 1 + e^0 = 2$. \nWhen $x=1$, $u = 1 + e^1 = 1 + e$.'
              },
              {
                text: 'Substitute and Integrate.',
                math: '$\\int_0^1 \\frac{e^x}{1+e^x} \\, dx = \\int_2^{1+e} \\frac{1}{u} \\, du = [\\ln|u|]_2^{1+e}$'
              },
              {
                text: 'Evaluate.',
                math: '$\\ln(1+e) - \\ln(2) = \\ln\\left(\\frac{1+e}{2}\\right)$'
              }
            ]
          },
          {
            type: 'stepped-example',
            title: 'Walkthrough: Integral of $a^x$',
            problem: 'Evaluate $\\int 2^{3x} \\, dx$.',
            steps: [
              {
                text: 'Method 1: Direct Formula. Let $u=3x$.',
                math: '$du = 3 \\, dx \\Rightarrow dx = \\frac{1}{3} du$.'
              },
              {
                text: 'Substitute and integrate.',
                math: '$\\int 2^u \\cdot \\frac{1}{3} du = \\frac{1}{3} \\frac{2^u}{\\ln 2} + C = \\frac{2^{3x}}{3 \\ln 2} + C$'
              }
            ]
          }
        ]
      },
      {
        id: "inverse-trig-integrals",
        title: "1.7 Integrals Resulting in Inverse Trigonometric Functions",
        practiceType: 'inverse-trig-integrals',
        content: [
          {
            type: 'text',
            content: `
## Overview

In this section, we study integrals whose antiderivatives involve inverse trigonometric functions. These integrals are crucial because they appear frequently when solving problems involving areas, volumes, and physical applications, often arising after algebraic manipulation or substitution.

## Key Formulas

The three essential integration formulas you must memorize are:

1.  **Inverse Sine:**
    $$ \\int \\frac{du}{\\sqrt{a^2 - u^2}} = \\arcsin\\left(\\frac{u}{a}\\right) + C $$
    *(valid for $u^2 < a^2$)*

2.  **Inverse Tangent:**
    $$ \\int \\frac{du}{a^2 + u^2} = \\frac{1}{a} \\arctan\\left(\\frac{u}{a}\\right) + C $$

3.  **Inverse Secant:**
    $$ \\int \\frac{du}{u\\sqrt{u^2 - a^2}} = \\frac{1}{a} \\text{arcsec}\\left(\\frac{|u|}{a}\\right) + C $$
    *(valid for $|u| > a > 0$)*

**Note:** The constants $a$ are assumed to be positive. If $a=1$, these simplify to the standard derivatives of $\\arcsin u$, $\\arctan u$, and $\\text{arcsec } u$.
`
          },
          {
            type: 'stepped-example',
            title: 'Walkthrough: Using Substitution',
            problem: 'Evaluate $\\int \\frac{e^x}{1 + e^{2x}} \\, dx$.',
            steps: [
              {
                text: 'Identify the form. Denominator is $1 + (e^x)^2$.',
                math: 'This suggests arctangent.'
              },
              {
                text: 'Choose substitution.',
                math: 'Let $u = e^x$. Then $du = e^x \\, dx$. Here $a=1$.'
              },
              {
                text: 'Substitute and integrate.',
                math: '$\\int \\frac{du}{1 + u^2} = \\arctan(u) + C$'
              },
              {
                text: 'Back-substitute.',
                math: '$\\arctan(e^x) + C$'
              }
            ]
          },
          {
            type: 'stepped-example',
            title: 'Walkthrough: Completing the Square',
            problem: 'Evaluate $\\int \\frac{dx}{x^2 + 4x + 13}$.',
            steps: [
              {
                text: 'Analyze denominator.',
                math: '$x^2 + 4x + 13$. Complete the square.'
              },
              {
                text: 'Complete the square.',
                math: '$(x^2 + 4x + 4) - 4 + 13 = (x+2)^2 + 9$.'
              },
              {
                text: 'Rewrite integral.',
                math: '$\\int \\frac{dx}{(x+2)^2 + 3^2}$'
              },
              {
                text: 'Integrate using arctan formula ($u=x+2, a=3$).',
                math: '$\\frac{1}{3} \\arctan\\left(\\frac{x+2}{3}\\right) + C$'
              }
            ]
          },
          {
            type: 'stepped-example',
            title: 'Walkthrough: Inverse Sine Form',
            problem: 'Evaluate $\\int \\frac{dx}{\\sqrt{4 - 9x^2}}$.',
            steps: [
              {
                text: 'Identify form $\\sqrt{a^2-u^2}$.',
                math: '$a^2=4 \\Rightarrow a=2$. $u^2=9x^2 \\Rightarrow u=3x$.'
              },
              {
                text: 'Substitution.',
                math: 'Let $u=3x, du=3dx$. $dx = du/3$.'
              },
              {
                text: 'Integrate.',
                math: '$\\int \\frac{1}{\\sqrt{4-u^2}} \\frac{du}{3} = \\frac{1}{3} \\arcsin\\left(\\frac{u}{2}\\right) + C$'
              },
              {
                text: 'Back-substitute.',
                math: '$\\frac{1}{3} \\arcsin\\left(\\frac{3x}{2}\\right) + C$'
              }
            ]
          },
          {
            type: 'text',
            content: `
## Common Pitfalls

1.  **Forgetting the $1/a$ factor:**
    The formula for arctangent and arcsecant has a $1/a$ coefficient.
    $\\int \\frac{dx}{x^2 + 9} = \\frac{1}{3}\\arctan(\\frac{x}{3}) + C$, NOT $\\arctan(\\frac{x}{3}) + C$.
    *Exception:* Inverse sine does **not** have the $1/a$ factor in front.

2.  **Confusing forms:**
    $\\int \\frac{dx}{\\sqrt{1-x^2}} = \\arcsin x + C$ (No logarithm)
    $\\int \\frac{dx}{1-x^2} = \\frac{1}{2} \\ln|\\frac{1+x}{1-x}| + C$ (Using partial fractions, not inverse trig)

3.  **Variable coefficients:**
    If you have $\\int \\frac{dx}{1 + 4x^2}$, remember $u = 2x$, so you divide by the derivative of $u$ (which is 2).
    Result: $\\frac{1}{2} \\arctan(2x) + C$.
`
          }
        ]
      }
    ]
  },
  {
    id: "module-2",
    title: "Module 2: Applications of Integration",
    topics: [
      {
        id: "area-between-curves",
        title: "2.1 Areas between Curves",
        practiceType: 'area-between-curves',
        content: [
          {
            type: 'text',
            content: `
## Area Formula

To find the area $A$ of the region bounded by the curves $y=f(x)$, $y=g(x)$, and the lines $x=a$, $x=b$, where $f$ and $g$ are continuous and $f(x) \\ge g(x)$ for all $x$ in $[a, b]$:

$$ A = \\int_a^b [f(x) - g(x)] \\, dx $$

If the curves intersect, split the integral at intersection points and integrate $|f(x) - g(x)|$.

## Horizontal Slicing

Sometimes it is easier to integrate with respect to $y$.
$$ A = \\int_c^d [u(y) - v(y)] \\, dy $$
where $u(y)$ is the right curve and $v(y)$ is the left curve.
`
          },
          {
            type: 'stepped-example',
            title: 'Walkthrough: Area Between Two Curves',
            problem: 'Find the area of the region bounded by the curves $y = x^2$ and $y = x$.',
            steps: [
              {
                text: 'Find the intersection points by setting $f(x) = g(x)$.',
                math: '$x^2 = x \\implies x^2 - x = 0 \\implies x(x-1) = 0$. Roots are $x=0, x=1$.'
              },
              {
                text: 'Determine which curve is on top in $[0, 1]$.',
                math: 'Test $x=0.5$. $y = 0.5$ vs $y = 0.25$. So $y=x$ is on top.'
              },
              {
                text: 'Set up the integral.',
                math: '$A = \\int_0^1 (x - x^2) \\, dx$'
              },
              {
                text: 'Evaluate.',
                math: '$\\left[ \\frac{x^2}{2} - \\frac{x^3}{3} \\right]_0^1 = \\left( \\frac{1}{2} - \\frac{1}{3} \\right) - 0 = \\frac{1}{6}$'
              }
            ]
          }
        ]
      },
      {
        id: "volume-slicing",
        title: "2.2 Determining Volumes by Slicing",
        practiceType: 'volume-slicing',
        content: [
          {
            type: 'text',
            content: `
## General Slicing Method

Volume $V = \\int_a^b A(x) \\, dx$, where $A(x)$ is the area of a cross-section at $x$.

## Disk Method

If a region under $y=f(x)$ is rotated about the x-axis:
$$ V = \\int_a^b \\pi [f(x)]^2 \\, dx $$

## Washer Method

If the region is bounded by outer radius $R(x)$ and inner radius $r(x)$:
$$ V = \\int_a^b \\pi ([R(x)]^2 - [r(x)]^2) \\, dx $$
`
          },
          {
            type: 'stepped-example',
            title: 'Walkthrough: Volume by Disk Method',
            problem: 'Find the volume of the solid obtained by rotating the region under $y = \\sqrt{x}$ from $0$ to $1$ about the x-axis.',
            steps: [
              {
                text: 'Identify the radius $R(x)$.',
                math: '$R(x) = f(x) = \\sqrt{x}$'
              },
              {
                text: 'Set up the integral using the Disk Method formula.',
                math: '$V = \\int_0^1 \\pi (\\sqrt{x})^2 \\, dx = \\int_0^1 \\pi x \\, dx$'
              },
              {
                text: 'Evaluate.',
                math: '$\\pi \\left[ \\frac{x^2}{2} \\right]_0^1 = \\frac{\\pi}{2}$'
              }
            ]
          }
        ]
      },
      {
        id: "volume-shells",
        title: "2.3 Volumes of Revolution: Cylindrical Shells",
        practiceType: 'volume-shells',
        content: [
          {
            type: 'text',
            content: `
## Method of Cylindrical Shells

Useful when rotating a region about the y-axis (or vertical line) and integrating with respect to $x$.

$$ V = \\int_a^b 2\\pi x f(x) \\, dx $$

Here, $2\\pi x$ is the circumference, $f(x)$ is the height, and $dx$ is the thickness.
More generally: $V = \\int_a^b 2\\pi (\\text{radius})(\\text{height}) \\, dx$.
`
          },
          {
            type: 'stepped-example',
            title: 'Walkthrough: Volume by Shells',
            problem: 'Use cylindrical shells to find the volume generated by rotating the region bounded by $y = x^2$, $y = 0$, and $x = 1$ about the y-axis.',
            steps: [
              {
                text: 'Identify radius and height for a shell at $x$.',
                math: 'Radius $= x$. Height $= f(x) = x^2$.'
              },
              {
                text: 'Set up the integral.',
                math: '$V = \\int_0^1 2\\pi x (x^2) \\, dx = 2\\pi \\int_0^1 x^3 \\, dx$'
              },
              {
                text: 'Evaluate.',
                math: '$2\\pi \\left[ \\frac{x^4}{4} \\right]_0^1 = 2\\pi \\left( \\frac{1}{4} \\right) = \\frac{\\pi}{2}$'
              }
            ]
          }
        ]
      },
      {
        id: "arc-length",
        title: "2.4 Arc Length of a Curve and Surface Area",
        practiceType: 'arc-length',
        content: [
          {
            type: 'text',
            content: `
## Arc Length

The length of a curve $y=f(x)$ from $a$ to $b$ is:
$$ L = \\int_a^b \\sqrt{1 + [f'(x)]^2} \\, dx $$

## Surface Area of Revolution

If $y=f(x)$ is rotated about the x-axis:
$$ S = \\int_a^b 2\\pi f(x) \\sqrt{1 + [f'(x)]^2} \\, dx $$
`
          },
          {
            type: 'stepped-example',
            title: 'Walkthrough: Arc Length Calculation',
            problem: 'Find the length of the curve $y = \\frac{2}{3}x^{3/2}$ on the interval $[0, 1]$.',
            steps: [
              {
                text: 'Find the derivative $y\'$.',
                math: '$y\' = \\frac{2}{3} \\cdot \\frac{3}{2} x^{1/2} = x^{1/2} = \\sqrt{x}$'
              },
              {
                text: 'Square the derivative and add 1.',
                math: '$1 + (y\')^2 = 1 + (\\sqrt{x})^2 = 1 + x$'
              },
              {
                text: 'Set up the integral.',
                math: '$L = \\int_0^1 \\sqrt{1+x} \\, dx$'
              },
              {
                text: 'Evaluate using substitution ($u=1+x$).',
                math: '$\\int_1^2 u^{1/2} du = [\\frac{2}{3}u^{3/2}]_1^2 = \\frac{2}{3}(2\\sqrt{2} - 1)$'
              }
            ]
          }
        ]
      },
      {
        id: "physical-applications",
        title: "2.5 Physical Applications",
        practiceType: 'physical-applications',
        content: [
          {
            type: 'text',
            content: `
## Work

Work done by a variable force $F(x)$ moving an object from $a$ to $b$:
$$ W = \\int_a^b F(x) \\, dx $$

Common examples:
*   **Hooke's Law (Springs):** $F(x) = kx$.
*   **Lifting cables/buckets:** Force depends on weight of cable/water remaining.

## Hydrostatic Force

Force exerted by a fluid on a submerged surface:
$$ F = \\int_a^b \\rho g \\cdot \\text{depth}(y) \\cdot \\text{width}(y) \\, dy $$
`
          },
          {
            type: 'stepped-example',
            title: 'Walkthrough: Work Done Stretching a Spring',
            problem: 'A force of 10 N is required to hold a spring that has been stretched from its natural length of 10 cm to a length of 15 cm. How much work is done in stretching the spring from 15 cm to 20 cm?',
            steps: [
              {
                text: 'Find the spring constant $k$ using Hooke\'s Law $F(x) = kx$.',
                math: 'Extension $x = 15 - 10 = 5$ cm $= 0.05$ m. \n$10 = k(0.05) \\implies k = 200$ N/m.'
              },
              {
                text: 'Set up the work integral limits.',
                math: 'Start: $15$ cm (0.05 m extension). End: $20$ cm (0.10 m extension).'
              },
              {
                text: 'Integrate.',
                math: '$W = \\int_{0.05}^{0.10} 200x \\, dx = [100x^2]_{0.05}^{0.10}$'
              },
              {
                text: 'Evaluate.',
                math: '$100(0.10^2 - 0.05^2) = 100(0.01 - 0.0025) = 100(0.0075) = 0.75$ J'
              }
            ]
          }
        ]
      },
      {
        id: "moments-mass",
        title: "2.6 Moments and Centers of Mass",
        practiceType: 'moments-mass',
        content: [
          {
            type: 'text',
            content: `
## Center of Mass

The center of mass (centroid) $(\\bar{x}, \\bar{y})$ of a region bounded by $y=f(x)$, $x=a$, $x=b$, and the x-axis ($y=0$).

1.  **Mass (Area if density=1):** $M = \\int_a^b f(x) \\, dx$
2.  **Moment about y-axis:** $M_y = \\int_a^b x f(x) \\, dx$
3.  **Moment about x-axis:** $M_x = \\int_a^b \\frac{1}{2} [f(x)]^2 \\, dx$

Then $\\bar{x} = \\frac{M_y}{M}$ and $\\bar{y} = \\frac{M_x}{M}$.
`
          },
          {
            type: 'stepped-example',
            title: 'Walkthrough: Finding the Centroid',
            problem: 'Find the centroid of the region bounded by $y = x$, $y = 0$, and $x = 1$.',
            steps: [
              {
                text: 'Find the Area (Mass).',
                math: '$M = \\int_0^1 x \\, dx = [\\frac{x^2}{2}]_0^1 = \\frac{1}{2}$'
              },
              {
                text: 'Find the Moment about the y-axis.',
                math: '$M_y = \\int_0^1 x(x) \\, dx = \\int_0^1 x^2 \\, dx = [\\frac{x^3}{3}]_0^1 = \\frac{1}{3}$'
              },
              {
                text: 'Find the Moment about the x-axis.',
                math: '$M_x = \\int_0^1 \\frac{1}{2}(x)^2 \\, dx = \\frac{1}{2}[\\frac{x^3}{3}]_0^1 = \\frac{1}{6}$'
              },
              {
                text: 'Calculate $\\bar{x}$ and $\\bar{y}$.',
                math: '$\\bar{x} = \\frac{1/3}{1/2} = \\frac{2}{3}, \\quad \\bar{y} = \\frac{1/6}{1/2} = \\frac{1}{3}$'
              }
            ]
          }
        ]
      },
      {
        id: "exp-log-hard",
        title: "2.7 Integrals, Exponential Functions, and Logarithms",
        practiceType: 'exp-log-hard',
        content: [
          {
            type: 'text',
            content: `
## Rigorous Definitions

*   $\\ln x = \\int_1^x \\frac{1}{t} \\, dt$ for $x > 0$.
*   $e$ is the number such that $\\ln e = 1$.
*   $e^x$ is the inverse function of $\\ln x$.

## General Bases

*   $a^x = e^{x \\ln a}$
*   $\\log_a x = \\frac{\\ln x}{\\ln a}$

## Derivatives and Integrals

*   $\\frac{d}{dx} a^x = a^x \\ln a$
*   $\\int a^x \\, dx = \\frac{a^x}{\\ln a} + C$
*   $\\frac{d}{dx} \\log_a x = \\frac{1}{x \\ln a}$
`
          },
          {
            type: 'stepped-example',
            title: 'Walkthrough: Derivative of General Exponential',
            problem: 'Find the derivative of $y = 5^{x^2}$.',
            steps: [
              {
                text: 'Use the Chain Rule.',
                math: '$\\frac{d}{dx} a^{g(x)} = a^{g(x)} \\ln a \\cdot g\'(x)$'
              },
              {
                text: 'Identify parts.',
                math: '$a = 5, g(x) = x^2, g\'(x) = 2x$'
              },
              {
                text: 'Apply formula.',
                math: '$y\' = 5^{x^2} (\\ln 5) (2x)$'
              }
            ]
          }
        ]
      },
      {
        id: "growth-decay",
        title: "2.8 Exponential Growth and Decay",
        practiceType: 'growth-decay',
        content: [
          {
            type: 'text',
            content: `
## Differential Equation

The rate of change is proportional to the amount present:
$$ \\frac{dy}{dt} = ky $$

## Solution

$$ y(t) = y(0) e^{kt} $$

*   $k > 0$: Growth (Population, Compound Interest)
*   $k < 0$: Decay (Radioactive Decay, Newton's Law of Cooling)

## Half-Life and Doubling Time

*   **Doubling Time:** $T_d = \\frac{\\ln 2}{k}$
*   **Half-Life:** $T_{1/2} = -\\frac{\\ln 2}{k}$ (where $k < 0$)
`
          },
          {
            type: 'stepped-example',
            title: 'Walkthrough: Radioactive Decay',
            problem: 'A radioactive substance has a half-life of 100 years. If 10 grams are present initially, how much remains after 50 years?',
            steps: [
              {
                text: 'Find the decay constant $k$.',
                math: '$k = -\\frac{\ln 2}{100} \\approx -0.00693$'
              },
              {
                text: 'Write the decay equation.',
                math: '$y(t) = 10 e^{-\\frac{\\ln 2}{100}t}$'
              },
              {
                text: 'Substitute $t=50$.',
                math: '$y(50) = 10 e^{-\\frac{\\ln 2}{100}(50)} = 10 e^{-\\frac{\\ln 2}{2}} = 10 (e^{\\ln 2})^{-1/2}$'
              },
              {
                text: 'Simplify.',
                math: '$10 (2)^{-1/2} = \\frac{10}{\\sqrt{2}} = 5\\sqrt{2} \\approx 7.07 \\text{ g}$'
              }
            ]
          }
        ]
      },
      {
        id: "hyperbolic-functions",
        title: "2.9 Calculus of the Hyperbolic Functions",
        practiceType: 'hyperbolic-functions',
        content: [
          {
            type: 'text',
            content: `
## Definitions

*   $\\sinh x = \\frac{e^x - e^{-x}}{2}$
*   $\\cosh x = \\frac{e^x + e^{-x}}{2}$
*   $\\tanh x = \\frac{\\sinh x}{\\cosh x}$

## Identities

*   $\\cosh^2 x - \\sinh^2 x = 1$
*   $1 - \\tanh^2 x = \\text{sech}^2 x$

## Derivatives

*   $\\frac{d}{dx} \\sinh x = \\cosh x$
*   $\\frac{d}{dx} \\cosh x = \\sinh x$
*   $\\frac{d}{dx} \\tanh x = \\text{sech}^2 x$

## Integrals

*   $\\int \\sinh x \\, dx = \\cosh x + C$
*   $\\int \\cosh x \\, dx = \\sinh x + C$
`
          },
          {
            type: 'stepped-example',
            title: 'Walkthrough: Proving a Hyperbolic Identity',
            problem: 'Verify that $\\cosh^2 x - \\sinh^2 x = 1$.',
            steps: [
              {
                text: 'Substitute definitions.',
                math: '$\\left(\\frac{e^x + e^{-x}}{2}\\right)^2 - \\left(\\frac{e^x - e^{-x}}{2}\\right)^2$'
              },
              {
                text: 'Expand squares.',
                math: '$\\frac{e^{2x} + 2 + e^{-2x}}{4} - \\frac{e^{2x} - 2 + e^{-2x}}{4}$'
              },
              {
                text: 'Combine fractions and simplify.',
                math: '$\\frac{(e^{2x} + 2 + e^{-2x}) - (e^{2x} - 2 + e^{-2x})}{4} = \\frac{4}{4} = 1$'
              }
            ]
          }
        ]
      }
    ]
  }
];
