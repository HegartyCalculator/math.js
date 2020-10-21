*This library is a work-in-progess and is not currently functional*

# Contents

- [Get Started](#gettingstarted)
    - [Setup](#setup)
    - [In the Browser](#browser)
    - [In node](#node)
- [Usage](#usage)

# <a name="gettingstarted"></a> Get Started
## <a name="setup"></a> Setup

```
$ git clone https://github.com/HegartyCalculator/math.js.git math
or
$ gh repo clone HegartyCalculator/math.js math
```

```
$ cd math
```

```
$ npm install
```

## <a name="browser"></a> In the Browser
```
$ make build
or
$ make minify
```

```html
<script src="math-x.y.z.min.js"></script>
```

## <a name="node"></a> In Node
*Currently not available in node*

# <a name="usage"></a> Usage
## <a name="solve"></a> Solve
```javascript
math.solve(variable, equation);

// e.g.
math.solve('x', '4x=360') // 90
math.solve('all', '2x=90') // {'x': 45}
```
## <a name="simplify"></a> Simplify
```javascript
math.simplify(expression);

// e.g.
math.simplify('-2x+5y+7x-y') // 5x + 4y
```