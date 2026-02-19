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
## Approximating Areas

The use of sigma (summation) notation of the form $\\sum_{i=1}^{n} a_i$ is useful for expressing long sums of values in compact form. For a continuous function defined over an interval $[a, b]$, the process of dividing the interval into $n$ equal parts, extending a rectangle to the graph of the function, calculating the areas of the series of rectangles, and then summing the areas yields an approximation of the area of that region.

## Riemann Sums

The width of each rectangle is $\\Delta x = \\frac{b-a}{n}$.

Riemann sums are expressions of the form $\\sum_{i=1}^{n} f(x_i^*) \\Delta x$, and can be used to estimate the area under the curve $y=f(x)$.

*   **Left-endpoint approximation:** $x_i^*$ are chosen to be the left endpoints of the subintervals.
*   **Right-endpoint approximation:** $x_i^*$ are chosen to be the right endpoints of the subintervals.
*   **Midpoint approximation:** $x_i^*$ are chosen to be the midpoints of the subintervals.

## Example

Estimate the area under $f(x) = x^2$ on $[0, 2]$ using $n=4$ rectangles and right endpoints.

$\\Delta x = \\frac{2-0}{4} = 0.5$.
Endpoints: $0, 0.5, 1, 1.5, 2$.
Right endpoints: $0.5, 1, 1.5, 2$.
Area $\\approx 0.5 [f(0.5) + f(1) + f(1.5) + f(2)]$
$= 0.5 [0.25 + 1 + 2.25 + 4] = 0.5 [7.5] = 3.75$.
`
      },
      {
        id: "definite-integral",
        title: "1.2 The Definite Integral",
        practiceType: 'definite-integral-properties',
        content: `
## Definition

The **definite integral** of a function $f(x)$ from $a$ to $b$ represents the net signed area under the curve $y=f(x)$ from $x=a$ to $x=b$. It is denoted by:

$$ \\int_a^b f(x) \\, dx $$

Usually defined as the limit of a Riemann Sum:

$$ \\int_a^b f(x) \\, dx = \\lim_{n \\to \\infty} \\sum_{i=1}^n f(x_i^*) \\Delta x $$

## Properties

1.  $\\int_a^b f(x) \\, dx = -\\int_b^a f(x) \\, dx$
2.  $\\int_a^a f(x) \\, dx = 0$
3.  $\\int_a^b c \\, dx = c(b-a)$
4.  $\\int_a^b [f(x) + g(x)] \\, dx = \\int_a^b f(x) \\, dx + \\int_a^b g(x) \\, dx$
5.  $\\int_a^c f(x) \\, dx + \\int_c^b f(x) \\, dx = \\int_a^b f(x) \\, dx$
6.  If $f(x) \\ge 0$ for $a \\le x \\le b$, then $\\int_a^b f(x) \\, dx \\ge 0$.

## Average Value

The average value of a function $f(x)$ on $[a, b]$ is given by:
$$ f_{ave} = \\frac{1}{b-a} \\int_a^b f(x) \\, dx $$
`
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

## Applications

*   **Displacement:** If $v(t)$ is velocity, then displacement is $\\int_{t_1}^{t_2} v(t) \\, dt$.
*   **Distance:** The total distance traveled is $\\int_{t_1}^{t_2} |v(t)| \\, dt$.

## Basic Integration Formulas

Recall the power rule: $\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C$ ($n \\neq -1$).
And trigonometric integrals like $\\int \\sin x \\, dx = -\\cos x + C$.
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
