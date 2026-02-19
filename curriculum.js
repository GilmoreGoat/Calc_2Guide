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
The FTC connects differential calculus and integral calculus.

## Part 1 (FTC1)

If $f$ is continuous on $[a, b]$, then the function $g$ defined by
$$ g(x) = \\int_a^x f(t) \\, dt $$
is continuous on $[a, b]$, differentiable on $(a, b)$, and $g'(x) = f(x)$.

**Example:**
If $g(x) = \\int_1^x t^2 dt$, then $g'(x) = x^2$.

## Part 2 (FTC2)

If $f$ is continuous on $[a, b]$, then
$$ \\int_a^b f(x) \\, dx = F(b) - F(a) $$
where $F$ is any antiderivative of $f$, that is, $F'(x) = f(x)$.

## Example

Evaluate $\\int_1^3 x^2 \\, dx$.

$$ \\left[ \\frac{x^3}{3} \\right]_1^3 = \\frac{27}{3} - \\frac{1}{3} = \\frac{26}{3} $$
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

## Step-by-Step Walkthroughs

### Example 1: Polynomial Power

**Evaluate** $\\int x^2 (x^3 + 5)^9 \\, dx$.

1.  **Choose $u$**: The inner function is $x^3 + 5$. Let $u = x^3 + 5$.
2.  **Find $du$**: Differentiate $u$ with respect to $x$: $du = 3x^2 \\, dx$.
3.  **Adjust for constants**: We have $x^2 \\, dx$ in the integral, but $du$ has $3x^2 \\, dx$.
    $$ \\frac{1}{3} du = x^2 \\, dx $$
4.  **Substitute**:
    $$ \\int (x^3+5)^9 \\cdot (x^2 \\, dx) = \\int u^9 \\cdot \\frac{1}{3} du = \\frac{1}{3} \\int u^9 \\, du $$
5.  **Integrate**:
    $$ \\frac{1}{3} \\cdot \\frac{u^{10}}{10} + C = \\frac{u^{10}}{30} + C $$
6.  **Back-substitute**: Replace $u$ with $x^3 + 5$.
    $$ \\frac{(x^3+5)^{10}}{30} + C $$

### Example 2: Trigonometric Function

**Evaluate** $\\int \\sqrt{\\cos x} \\sin x \\, dx$.

1.  **Choose $u$**: Inside the root is $\\cos x$. Let $u = \\cos x$.
2.  **Find $du$**: $du = -\\sin x \\, dx$.
3.  **Adjust**: $-du = \\sin x \\, dx$.
4.  **Substitute**:
    $$ \\int \\sqrt{u} \\cdot (-du) = -\\int u^{1/2} \\, du $$
5.  **Integrate**:
    $$ -\\frac{u^{3/2}}{3/2} + C = -\\frac{2}{3} u^{3/2} + C $$
6.  **Back-substitute**:
    $$ -\\frac{2}{3} (\\cos x)^{3/2} + C $$

### Example 3: Exponential Function

**Evaluate** $\\int \\frac{e^{\\sqrt{x}}}{\\sqrt{x}} \\, dx$.

1.  **Choose $u$**: The exponent is $\\sqrt{x} = x^{1/2}$. Let $u = \\sqrt{x}$.
2.  **Find $du$**: $du = \\frac{1}{2} x^{-1/2} \\, dx = \\frac{1}{2\\sqrt{x}} \\, dx$.
3.  **Adjust**: $2 du = \\frac{1}{\\sqrt{x}} \\, dx$.
4.  **Substitute**:
    $$ \\int e^u \\cdot 2 du = 2 \\int e^u \\, du $$
5.  **Integrate**: $2e^u + C$.
6.  **Back-substitute**: $2e^{\\sqrt{x}} + C$.

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
