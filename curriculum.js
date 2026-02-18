export const curriculum = [
  {
    id: "module-1",
    title: "Module 1: Fundamentals of Integration",
    topics: [
      {
        id: "antiderivatives",
        title: "Antiderivatives and Indefinite Integrals",
        practiceType: 'indefinite-integral',
        content: `
## Definition

An **antiderivative** of a function $f$ is a function $F$ such that $F'(x) = f(x)$ for all $x$ in the domain of $f$.

The set of all antiderivatives of $f$ is the **indefinite integral** of $f$ with respect to $x$, denoted by:

$$ \\int f(x) \\, dx $$

The symbol $\\int$ is an integral sign. The function $f(x)$ is called the integrand, and $x$ is the variable of integration.

If $F$ is an antiderivative of $f$, then:

$$ \\int f(x) \\, dx = F(x) + C $$

where $C$ is an arbitrary constant.

## Basic Integration Rules

Here are some fundamental integration formulas:

1.  **Power Rule**: $\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C$ (for $n \\neq -1$)
2.  **Constant Multiple**: $\\int cf(x) \\, dx = c \\int f(x) \\, dx$
3.  **Sum/Difference**: $\\int [f(x) \\pm g(x)] \\, dx = \\int f(x) \\, dx \\pm \\int g(x) \\, dx$
4.  **Exponential**: $\\int e^x \\, dx = e^x + C$
5.  **Logarithmic**: $\\int \\frac{1}{x} \\, dx = \\ln|x| + C$
6.  **Sine**: $\\int \\sin(x) \\, dx = -\\cos(x) + C$
7.  **Cosine**: $\\int \\cos(x) \\, dx = \\sin(x) + C$
8.  **Secant Squared**: $\\int \\sec^2(x) \\, dx = \\tan(x) + C$
9.  **Secant Tangent**: $\\int \\sec(x)\\tan(x) \\, dx = \\sec(x) + C$
10. **Inverse Tangent**: $\\int \\frac{1}{1+x^2} \\, dx = \\arctan(x) + C$
11. **Inverse Sine**: $\\int \\frac{1}{\\sqrt{1-x^2}} \\, dx = \\arcsin(x) + C$

## Procedural Pathway: Solving Indefinite Integrals

1.  **Identify the type of function:** Look for power functions $x^n$, exponentials, or trigonometric functions.
2.  **Separate terms:** Use the Sum/Difference Rule to break the integral into simpler parts: $\\int [f(x) + g(x)] dx = \\int f(x) dx + \\int g(x) dx$.
3.  **Pull out constants:** Use the Constant Multiple Rule: $\\int c f(x) dx = c \\int f(x) dx$.
4.  **Apply rules:** Apply the appropriate integration rule (e.g., Power Rule) to each part.
5.  **Add C:** Don't forget to add the constant of integration $+ C$ at the end.
6.  **Simplify:** Combine constants and simplify coefficients if needed.

## Example

Evaluate $\\int (3x^2 + 2x - 5) \\, dx$.

**Solution:**

We apply the Power Rule to each term:

$$
\\begin{aligned}
\\int (3x^2 + 2x - 5) \\, dx &= 3 \\int x^2 \\, dx + 2 \\int x \\, dx - 5 \\int 1 \\, dx \\\\
&= 3 \\left(\\frac{x^3}{3}\\right) + 2 \\left(\\frac{x^2}{2}\\right) - 5x + C \\\\
&= x^3 + x^2 - 5x + C
\\end{aligned}
$$

`
      },
      {
        id: "definite-integrals",
        title: "The Definite Integral",
        practiceType: 'definite-integral',
        content: `
## Definition

The **definite integral** of a function $f(x)$ from $a$ to $b$ represents the signed area under the curve $y=f(x)$ from $x=a$ to $x=b$. It is denoted by:

$$ \\int_a^b f(x) \\, dx $$

Usually defined as the limit of a Riemann Sum:

$$ \\int_a^b f(x) \\, dx = \\lim_{n \\to \\infty} \\sum_{i=1}^n f(x_i^*) \\Delta x $$

where $\\Delta x = \\frac{b-a}{n}$ and $x_i^*$ is a sample point in the $i$-th subinterval.

## Properties of Definite Integrals

1.  $\\int_a^b f(x) \\, dx = -\\int_b^a f(x) \\, dx$
2.  $\\int_a^a f(x) \\, dx = 0$
3.  $\\int_a^b c \\, dx = c(b-a)$
4.  $\\int_a^b [f(x) + g(x)] \\, dx = \\int_a^b f(x) \\, dx + \\int_a^b g(x) \\, dx$
5.  $\\int_a^c f(x) \\, dx + \\int_c^b f(x) \\, dx = \\int_a^b f(x) \\, dx$
6.  If $f(x) \\ge 0$ for $a \\le x \\le b$, then $\\int_a^b f(x) \\, dx \\ge 0$.

## Procedural Pathway: Evaluating Definite Integrals

1.  **Find the Antiderivative:** Determine the indefinite integral $F(x) = \\int f(x) dx$. You can omit the $+C$.
2.  **Apply the Fundamental Theorem of Calculus (Part 2):** Evaluate $F(x)$ at the upper limit $b$ and the lower limit $a$.
3.  **Calculate difference:** Compute $F(b) - F(a)$.
4.  **Simplify:** Perform the arithmetic to get the final numerical answer.

## Example

Evaluate $\\int_1^2 (2x + 1) \\, dx$.

**Solution:**
1.  **Antiderivative:** $\\int (2x + 1) dx = x^2 + x$.
2.  **Evaluate limits:**
    *   Upper limit ($x=2$): $2^2 + 2 = 6$.
    *   Lower limit ($x=1$): $1^2 + 1 = 2$.
3.  **Difference:** $6 - 2 = 4$.

So, $\\int_1^2 (2x + 1) \\, dx = 4$.

`
      },
      {
        id: "ftc",
        title: "The Fundamental Theorem of Calculus",
        content: `
The FTC connects differential calculus and integral calculus. It has two parts.

## Part 1 (FTC1)

If $f$ is continuous on $[a, b]$, then the function $g$ defined by

$$ g(x) = \\int_a^x f(t) \\, dt $$

is continuous on $[a, b]$, differentiable on $(a, b)$, and $g'(x) = f(x)$.

**Meaning:** Differentiation and integration are inverse processes.

## Part 2 (FTC2)

If $f$ is continuous on $[a, b]$, then

$$ \\int_a^b f(x) \\, dx = F(b) - F(a) $$

where $F$ is any antiderivative of $f$, that is, $F'(x) = f(x)$.

**Meaning:** We can evaluate a definite integral by finding an antiderivative and evaluating it at the endpoints.

## Example

Evaluate $\\int_1^3 x^2 \\, dx$.

**Solution:**
An antiderivative of $x^2$ is $\\frac{x^3}{3}$.

$$
\\begin{aligned}
\\int_1^3 x^2 \\, dx &= \\left[ \\frac{x^3}{3} \\right]_1^3 \\\\
&= \\frac{3^3}{3} - \\frac{1^3}{3} \\\\
&= \\frac{27}{3} - \\frac{1}{3} \\\\
&= 9 - \\frac{1}{3} \\\\
&= \\frac{26}{3}
\\end{aligned}
$$
`
      }
    ]
  },
  {
    id: "module-2",
    title: "Module 2: Integration Techniques",
    topics: [
      {
        id: "substitution",
        title: "The Substitution Rule",
        content: `
The Substitution Rule (u-substitution) is the reverse of the Chain Rule.

## Theorem

If $u = g(x)$ is a differentiable function whose range is an interval $I$ and $f$ is continuous on $I$, then:

$$ \\int f(g(x))g'(x) \\, dx = \\int f(u) \\, du $$

## Steps

1.  Choose a substitution $u = g(x)$.
2.  Find $du = g'(x) \\, dx$.
3.  Express the entire integral in terms of $u$.
4.  Evaluate the new integral with respect to $u$.
5.  Replace $u$ with $g(x)$ to get the final answer in terms of $x$.

## Example

Evaluate $\\int 2x e^{x^2} \\, dx$.

**Solution:**
Let $u = x^2$. Then $du = 2x \\, dx$.

$$
\\begin{aligned}
\\int 2x e^{x^2} \\, dx &= \\int e^u \\, du \\\\
&= e^u + C \\\\
&= e^{x^2} + C
\\end{aligned}
$$
`
      },
      {
        id: "by-parts",
        title: "Integration by Parts",
        content: `
Integration by Parts is the reverse of the Product Rule.

## Formula

$$ \\int u \\, dv = uv - \\int v \\, du $$

## Strategy for Choosing $u$ and $dv$

A common mnemonic is **LIATE**: choose $u$ to be the function that comes first in this list:
1.  **L**ogarithmic functions (e.g., $\\ln x$)
2.  **I**nverse trigonometric functions (e.g., $\\arctan x$)
3.  **A**lgebraic functions (e.g., $x^2$, $3x$)
4.  **T**rigonometric functions (e.g., $\\sin x$)
5.  **E**xponential functions (e.g., $e^x$)

Then $dv$ is the remaining part of the integrand (including $dx$).

## Example

Evaluate $\\int x \\cos x \\, dx$.

**Solution:**
Using LIATE, we choose $u = x$ (Algebraic) and $dv = \\cos x \\, dx$ (Trigonometric).
Then $du = dx$ and $v = \\int \\cos x \\, dx = \\sin x$.

$$
\\begin{aligned}
\\int x \\cos x \\, dx &= uv - \\int v \\, du \\\\
&= x \\sin x - \\int \\sin x \\, dx \\\\
&= x \\sin x - (-\\cos x) + C \\\\
&= x \\sin x + \\cos x + C
\\end{aligned}
$$
`
      },
      {
        id: "partial-fractions",
        title: "Partial Fractions",
        content: `
This technique is used to integrate rational functions $\\frac{P(x)}{Q(x)}$.

## Steps

1.  **Divide if Improper:** If degree($P$) $\\ge$ degree($Q$), perform polynomial long division.
2.  **Factor Denominator:** Factor $Q(x)$ completely into linear and irreducible quadratic factors.
3.  **Decompose:** Express $\\frac{P(x)}{Q(x)}$ as a sum of partial fractions.
    *   For each linear factor $(ax+b)^n$, include terms: $\\frac{A_1}{ax+b} + \\dots + \\frac{A_n}{(ax+b)^n}$.
    *   For each quadratic factor $(ax^2+bx+c)^m$, include terms: $\\frac{B_1 x + C_1}{ax^2+bx+c} + \\dots + \\frac{B_m x + C_m}{(ax^2+bx+c)^m}$.
4.  **Solve for Constants:** Multiply by the denominator and solve for the unknown coefficients.
5.  **Integrate:** Integrate each term separately.

## Example

Evaluate $\\int \\frac{1}{x^2 - 1} \\, dx$.

**Solution:**
Factor the denominator: $x^2 - 1 = (x-1)(x+1)$.
Decompose:
$$ \\frac{1}{(x-1)(x+1)} = \\frac{A}{x-1} + \\frac{B}{x+1} $$
$$ 1 = A(x+1) + B(x-1) $$

Let $x=1$: $1 = A(2) \\implies A = 1/2$.
Let $x=-1$: $1 = B(-2) \\implies B = -1/2$.

$$
\\begin{aligned}
\\int \\frac{1}{x^2 - 1} \\, dx &= \\int \\left( \\frac{1/2}{x-1} - \\frac{1/2}{x+1} \\right) \\, dx \\\\
&= \\frac{1}{2} \\ln|x-1| - \\frac{1}{2} \\ln|x+1| + C \\\\
&= \\frac{1}{2} \\ln\\left| \\frac{x-1}{x+1} \\right| + C
\\end{aligned}
$$
`
      }
    ]
  },
  {
    id: "module-3",
    title: "Module 3: Applications of Integration",
    topics: [
      {
        id: "area",
        title: "Area Between Curves",
        content: `
To find the area $A$ of the region bounded by the curves $y=f(x)$, $y=g(x)$, and the lines $x=a$, $x=b$, where $f$ and $g$ are continuous and $f(x) \\ge g(x)$ for all $x$ in $[a, b]$:

$$ A = \\int_a^b [f(x) - g(x)] \\, dx $$

If the curves intersect, you must split the integral at the intersection points and integrate $|f(x) - g(x)|$.

## Example

Find the area enclosed by $y=x^2$ and $y=x$.

**Solution:**
Intersection points: $x^2 = x \\implies x^2 - x = 0 \\implies x(x-1) = 0$.
So $x=0$ and $x=1$.
On $[0, 1]$, $x \\ge x^2$.

$$
\\begin{aligned}
A &= \\int_0^1 (x - x^2) \\, dx \\\\
&= \\left[ \\frac{x^2}{2} - \\frac{x^3}{3} \\right]_0^1 \\\\
&= \\left( \\frac{1}{2} - \\frac{1}{3} \\right) - 0 \\\\
&= \\frac{1}{6}
\\end{aligned}
$$
`
      },
      {
        id: "volume",
        title: "Volumes of Revolution",
        content: `
## Disk Method

If a region under $y=f(x)$ from $a$ to $b$ is rotated about the x-axis, the volume $V$ is:

$$ V = \\int_a^b \\pi [f(x)]^2 \\, dx $$

## Washer Method

If the region is bounded by an outer radius $R(x)$ and an inner radius $r(x)$, the volume is:

$$ V = \\int_a^b \\pi ([R(x)]^2 - [r(x)]^2) \\, dx $$

## Example

Find the volume of the solid obtained by rotating the region under $y=\\sqrt{x}$ from 0 to 1 about the x-axis.

**Solution:**
Using the Disk Method:

$$
\\begin{aligned}
V &= \\int_0^1 \\pi (\\sqrt{x})^2 \\, dx \\\\
&= \\pi \\int_0^1 x \\, dx \\\\
&= \\pi \\left[ \\frac{x^2}{2} \\right]_0^1 \\\\
&= \\frac{\\pi}{2}
\\end{aligned}
$$
`
      }
    ]
  },
  {
    id: "module-4",
    title: "Module 4: Differential Equations",
    topics: [
      {
        id: "separable",
        title: "Separable Differential Equations",
        content: `
A **separable equation** is a first-order differential equation that can be written in the form:

$$ \\frac{dy}{dx} = g(x)h(y) $$

## Method of Solution

1.  Separate the variables: Divide by $h(y)$ and multiply by $dx$ (conceptually) to get all $y$'s on one side and $x$'s on the other.
    $$ \\frac{1}{h(y)} \\, dy = g(x) \\, dx $$
2.  Integrate both sides:
    $$ \\int \\frac{1}{h(y)} \\, dy = \\int g(x) \\, dx $$
3.  Solve for $y$ explicitly if possible.

## Example

Solve $\\frac{dy}{dx} = xy^2$.

**Solution:**

$$
\\begin{aligned}
\\frac{dy}{y^2} &= x \\, dx \\\\
\\int y^{-2} \\, dy &= \\int x \\, dx \\\\
-\\frac{1}{y} &= \\frac{x^2}{2} + C \\\\
y &= -\\frac{1}{\\frac{x^2}{2} + C}
\\end{aligned}
$$
`
      },
      {
        id: "modeling",
        title: "Modeling with Differential Equations",
        content: `
Differential equations are used to model real-world phenomena where the rate of change of a quantity depends on the quantity itself or other variables.

## Exponential Growth and Decay

The Law of Natural Growth/Decay assumes that the rate of change of a population $P$ is proportional to the size of the population:

$$ \\frac{dP}{dt} = kP $$

The solution to this separable equation is:

$$ P(t) = P(0) e^{kt} $$

*   If $k > 0$, it is exponential growth.
*   If $k < 0$, it is exponential decay (e.g., radioactive decay).

## Example: Bacteria Growth

A bacteria culture starts with 1000 bacteria and the growth rate is proportional to the number of bacteria. After 2 hours, the population is 3000. Find the number of bacteria after 5 hours.

**Solution:**
Model: $P(t) = 1000 e^{kt}$.
Given $P(2) = 3000$:
$$ 3000 = 1000 e^{2k} \\implies 3 = e^{2k} \\implies 2k = \\ln 3 \\implies k = \\frac{\\ln 3}{2} $$
So $P(t) = 1000 e^{\\frac{t \\ln 3}{2}} = 1000 (e^{\\ln 3})^{t/2} = 1000 \\cdot 3^{t/2}$.
At $t=5$:
$$ P(5) = 1000 \\cdot 3^{5/2} = 1000 \\cdot \\sqrt{243} \\approx 15588 $$
`
      }
    ]
  }
];
