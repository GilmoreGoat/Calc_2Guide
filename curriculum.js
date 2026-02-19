export const curriculum = [
  {
    id: "module-1",
    title: "Module 1: Integrals",
    topics: [
      {
        id: "approximating-areas",
        title: "1.1 Approximating Areas",
        practiceType: 'approximating-areas',
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

## Walkthrough Example

**Problem:** Estimate the area under $f(x) = x^2$ on the interval $[0, 2]$ using $n=4$ rectangles and the **Right-Endpoint Rule**.

**Step 1: Calculate $\\Delta x$.**
$$ \\Delta x = \\frac{b-a}{n} = \\frac{2-0}{4} = 0.5 $$

**Step 2: Find the Grid Points ($x_i$).**
Start at $a=0$ and add $\\Delta x$ repeatedly:
*   $x_0 = 0$
*   $x_1 = 0.5$
*   $x_2 = 1.0$
*   $x_3 = 1.5$
*   $x_4 = 2.0$

**Step 3: Choose Sample Points ($x_i^*$).**
For Right endpoints, we use $x_1, x_2, x_3, x_4$:
*   $x_1^* = 0.5$
*   $x_2^* = 1.0$
*   $x_3^* = 1.5$
*   $x_4^* = 2.0$

**Step 4: Evaluate the Function.**
*   $f(0.5) = (0.5)^2 = 0.25$
*   $f(1.0) = (1.0)^2 = 1.00$
*   $f(1.5) = (1.5)^2 = 2.25$
*   $f(2.0) = (2.0)^2 = 4.00$

**Step 5: Sum and Multiply.**
$$ R_4 = \\Delta x [ f(0.5) + f(1.0) + f(1.5) + f(2.0) ] $$
$$ R_4 = 0.5 [ 0.25 + 1.00 + 2.25 + 4.00 ] $$
$$ R_4 = 0.5 [ 7.5 ] = 3.75 $$

So, the estimated area is **3.75**.

## The Distance Problem

The area under a velocity-time curve $v(t)$ represents the distance traveled.
If velocity is constant, $d = v \\times t$, which is the area of a rectangle.
If velocity varies, we approximate the distance by summing small rectangles (small time intervals where velocity is roughly constant).

$$ \\text{Distance} \\approx \\sum_{i=1}^{n} v(t_i^*) \\Delta t $$

As $n \\to \\infty$, this sum approaches the exact distance (the definite integral).
`
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

### Examples

**Example 1:**
Find $\\frac{d}{dx} \\int_1^x t^3 \\, dt$.
By FTC1, this is simply $x^3$.

**Example 2 (The Chain Rule):**
What if the upper limit is a function of $x$? Let $y = \\int_a^{u(x)} f(t) \\, dt$.
Let $U = u(x)$. Then $y = \\int_a^U f(t) \\, dt$.
By the Chain Rule:
$$ \\frac{dy}{dx} = \\frac{dy}{dU} \\cdot \\frac{dU}{dx} $$
$$ \\frac{dy}{dx} = f(U) \\cdot u'(x) = f(u(x)) \\cdot u'(x) $$

**Problem:** Find $\\frac{d}{dx} \\int_1^{x^4} \\sec t \\, dt$.
Here $u(x) = x^4$, so $u'(x) = 4x^3$.
$$ \\frac{d}{dx} = \\sec(x^4) \\cdot 4x^3 $$

## Part 2: Evaluating Definite Integrals

The second part of the theorem gives us a powerful method to evaluate definite integrals without using Riemann sums. It links the definite integral to antiderivatives.

### Theorem (FTC 2)

If $f$ is continuous on $[a, b]$, then
$$ \\int_a^b f(x) \\, dx = F(b) - F(a) $$
where $F$ is any antiderivative of $f$, that is, a function such that $F'(x) = f(x)$.

**Notation:** We often use the bracket notation:
$$ F(b) - F(a) = \\left[ F(x) \\right]_a^b $$

### Proof Idea

Let $g(x) = \\int_a^x f(t) \\, dt$. By FTC1, $g'(x) = f(x)$.
Since $F$ is also an antiderivative of $f$, we know that $F(x)$ and $g(x)$ differ by a constant $C$:
$$ F(x) = g(x) + C $$
$$ F(x) = \\int_a^x f(t) \\, dt + C $$
Let's find $C$. Set $x=a$:
$$ F(a) = \\int_a^a f(t) \\, dt + C = 0 + C \\implies C = F(a) $$
So $F(x) = \\int_a^x f(t) \\, dt + F(a)$.
Now let $x=b$:
$$ F(b) = \\int_a^b f(t) \\, dt + F(a) $$
Rearranging gives FTC2:
$$ \\int_a^b f(t) \\, dt = F(b) - F(a) $$

### Examples

**Example 1:**
Evaluate $\\int_1^3 e^x \\, dx$.
An antiderivative of $e^x$ is $e^x$.
$$ \\left[ e^x \\right]_1^3 = e^3 - e^1 = e^3 - e $$

**Example 2:**
Evaluate $\\int_0^{\\pi} \\cos x \\, dx$.
An antiderivative of $\\cos x$ is $\\sin x$.
$$ \\left[ \\sin x \\right]_0^{\\pi} = \\sin \\pi - \\sin 0 = 0 - 0 = 0 $$
Note: The net signed area is zero because the positive area from $0$ to $\\pi/2$ cancels the negative area from $\\pi/2$ to $\\pi$.

## Summary

*   **Differentiation** and **Integration** are inverse operations.
*   **FTC1** tells how to differentiate an integral: $\\frac{d}{dx} \\int_a^x f(t) dt = f(x)$.
*   **FTC2** tells how to evaluate an integral using an antiderivative: $\\int_a^b f(x) dx = F(b) - F(a)$.
`
      },
      {
        id: "net-change",
        title: "1.4 Integration Formulas and the Net Change Theorem",
        practiceType: 'net-change',
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

**Walkthrough: Particle Motion**

Consider a particle with velocity $v(t) = t^2 - 3t + 2$ m/s over the time interval $[0, 3]$.

1.  **Displacement:**
    $$ \\int_0^3 (t^2 - 3t + 2) \\, dt = \\left[ \\frac{t^3}{3} - \\frac{3t^2}{2} + 2t \\right]_0^3 $$
    $$ = \\left(\\frac{27}{3} - \\frac{27}{2} + 6\\right) - 0 = 9 - 13.5 + 6 = 1.5 \\text{ m} $$

2.  **Total Distance Traveled:**
    We need to find where $v(t)$ changes sign. Factor $v(t) = (t-1)(t-2)$. Roots are at $t=1$ and $t=2$.
    Since the interval $[0, 3]$ includes both roots, we split the integral:
    $$ \\int_0^1 |v(t)| dt + \\int_1^2 |v(t)| dt + \\int_2^3 |v(t)| dt $$

    *   On $[0, 1]$, $v(t) > 0$, so $\\int_0^1 (t^2 - 3t + 2) dt = [\\frac{t^3}{3} - \\frac{3t^2}{2} + 2t]_0^1 = \\frac{1}{3} - \\frac{3}{2} + 2 = \\frac{5}{6}$.
    *   On $[1, 2]$, $v(t) < 0$, so $\\int_1^2 -(t^2 - 3t + 2) dt = -[\\frac{t^3}{3} - \\frac{3t^2}{2} + 2t]_1^2 = -(-\\frac{1}{6}) = \\frac{1}{6}$.
    *   On $[2, 3]$, $v(t) > 0$, so $\\int_2^3 (t^2 - 3t + 2) dt = [\\frac{t^3}{3} - \\frac{3t^2}{2} + 2t]_2^3 - [\\dots]_2 = 1.5 - (-\\frac{2}{3} + 3) = \\frac{5}{6}$.

    Total Distance = $\\frac{5}{6} + \\frac{1}{6} + \\frac{5}{6} = \\frac{11}{6} \\approx 1.83 \\text{ m}$.

### 2. Fluid Flow

If water flows into a tank at a rate of $r(t)$ gallons per minute, the total amount of water that entered the tank between $t=a$ and $t=b$ is $\\int_a^b r(t) \\, dt$.

**Walkthrough:**
Water leaks from a tank at a rate of $r(t) = 2t$ gallons/min. How much water leaks out between $t=1$ and $t=4$?
$$ \\text{Total Volume} = \\int_1^4 2t \\, dt = [t^2]_1^4 = 16 - 1 = 15 \\text{ gallons}. $$

### 3. Population Growth

If a population grows at a rate of $P'(t)$ individuals per year, the net increase in population from year $a$ to year $b$ is $\\int_a^b P'(t) \\, dt$.

**Walkthrough:**
A bacteria culture grows at a rate of $P'(t) = 100e^{0.5t}$. The increase in population over the first 2 hours is:
$$ \\int_0^2 100e^{0.5t} \\, dt = 100 \\left[ \\frac{e^{0.5t}}{0.5} \\right]_0^2 = 200 (e^1 - e^0) = 200(e - 1) \\approx 343.6 $$

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
      },
      {
        id: "substitution",
        title: "1.5 Substitution",
        practiceType: 'substitution-integral',
        content: `
## The Substitution Rule

Also known as u-substitution, this method reverses the Chain Rule.

If $u = g(x)$ is a differentiable function whose range is an interval $I$ and $f$ is continuous on $I$, then:

$$ \\int f(g(x))g'(x) \\, dx = \\int f(u) \\, du $$

## Steps

1.  Choose $u = g(x)$.
2.  Find $du = g'(x) \\, dx$.
3.  Substitute $u$ and $du$ into the integral.
4.  Integrate with respect to $u$.
5.  Replace $u$ with $g(x)$ (for indefinite integrals).

## Definite Integrals

For definite integrals, you must also change the limits of integration:
$$ \\int_a^b f(g(x))g'(x) \\, dx = \\int_{g(a)}^{g(b)} f(u) \\, du $$
`
      },
      {
        id: "exp-log-integrals",
        title: "1.6 Integrals Involving Exponential and Logarithmic Functions",
        practiceType: 'exp-log-integrals',
        content: `
## Exponential Functions

$$ \\int e^x \\, dx = e^x + C $$
$$ \\int a^x \\, dx = \\frac{a^x}{\\ln a} + C $$

## Logarithmic Functions

The Power Rule $\\int x^n dx$ fails when $n=-1$.
Instead, we have:
$$ \\int \\frac{1}{x} \\, dx = \\ln |x| + C $$

## Example

Evaluate $\\int \\frac{2x}{x^2+1} \\, dx$.
Let $u = x^2+1$, then $du = 2x \\, dx$.
$\\int \\frac{1}{u} \\, du = \\ln|u| + C = \\ln(x^2+1) + C$.
`
      },
      {
        id: "inverse-trig-integrals",
        title: "1.7 Integrals Resulting in Inverse Trigonometric Functions",
        practiceType: 'inverse-trig-integrals',
        content: `
## Formulas

1.  $$ \\int \\frac{du}{\\sqrt{a^2 - u^2}} = \\arcsin\\left(\\frac{u}{a}\\right) + C $$
2.  $$ \\int \\frac{du}{a^2 + u^2} = \\frac{1}{a} \\arctan\\left(\\frac{u}{a}\\right) + C $$
3.  $$ \\int \\frac{du}{u\\sqrt{u^2 - a^2}} = \\frac{1}{a} \\text{arcsec}\\left(\\frac{|u|}{a}\\right) + C $$

## Completing the Square

Sometimes you need to complete the square in the denominator to make the integral fit one of these forms.

## Example

Evaluate $\\int \\frac{1}{1+x^2} \\, dx = \\arctan x + C$.
`
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
        id: "volume-slicing",
        title: "2.2 Determining Volumes by Slicing",
        practiceType: 'volume-slicing',
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
        id: "volume-shells",
        title: "2.3 Volumes of Revolution: Cylindrical Shells",
        practiceType: 'volume-shells',
        content: `
## Method of Cylindrical Shells

Useful when rotating a region about the y-axis (or vertical line) and integrating with respect to $x$.

$$ V = \\int_a^b 2\\pi x f(x) \\, dx $$

Here, $2\\pi x$ is the circumference, $f(x)$ is the height, and $dx$ is the thickness.
More generally: $V = \\int_a^b 2\\pi (\\text{radius})(\\text{height}) \\, dx$.
`
      },
      {
        id: "arc-length",
        title: "2.4 Arc Length of a Curve and Surface Area",
        practiceType: 'arc-length',
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
        id: "physical-applications",
        title: "2.5 Physical Applications",
        practiceType: 'physical-applications',
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
        id: "moments-mass",
        title: "2.6 Moments and Centers of Mass",
        practiceType: 'moments-mass',
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
        id: "exp-log-hard",
        title: "2.7 Integrals, Exponential Functions, and Logarithms",
        practiceType: 'exp-log-hard',
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
        id: "growth-decay",
        title: "2.8 Exponential Growth and Decay",
        practiceType: 'growth-decay',
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
        id: "hyperbolic-functions",
        title: "2.9 Calculus of the Hyperbolic Functions",
        practiceType: 'hyperbolic-functions',
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
      }
    ]
  }
];
