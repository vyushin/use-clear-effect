# use-clear-effect
[![version](https://img.shields.io/npm/v/use-clear-effect.svg?style=flat-square)](https://www.npmjs.com/package/use-clear-effect)
[![license](https://img.shields.io/github/license/vyushin/use-clear-effect.svg?style=flat-square)](https://github.com/vyushin/use-clear-effect/blob/master/LICENSE)

**use-clear-effect** is [react hook](https://reactjs.org/docs/hooks-intro.html) allowing get previous dependency values from effect.

## Installation

###### NPM
`npm install --save use-clear-effect`

###### Yarn
`yarn add use-clear-effect`

## Example

[![Edit axios-hooks Quick Start](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/use-clear-effect-67u5v)

```jsx
import { default as React, useState, useCallback } from "react";
import useClearEffect from "use-clear-effect";

export default function App() {
  const [fooValue, setFooValue] = useState("");
  const [barValue, setBarValue] = useState("");
  const [result, setResult] = useState({});

  useClearEffect(
    prev => {
      const resultObj = {
        current: {
          description: "Current state values",
          fooValue,
          barValue
        },
        previous: {
          description: "Previous state values",
          fooValue: prev[0],
          barValue: prev[1]
        },
        changed: {
          description: "True if previous value is not equal current value",
          fooValue: fooValue !== prev[0],
          barValue: barValue !== prev[1]
        }
      };
      setResult(resultObj);
    },
    [fooValue, barValue]
  );

  return (
    <div></div>
  );
}
````

## Contributing

See [contributing](https://github.com/vyushin/use-clear-effect/blob/master/CONTRIBUTING.md) guideline.

## License
[MIT LICENSE](https://github.com/vyushin/use-clear-effect/blob/master/LICENSE)
