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
import "./styles.css";

export default function App() {
  const [fooValue, setFooValue] = useState("");
  const [barValue, setBarValue] = useState("");
  const [result, setResult] = useState({});

  useClearEffect(
    prev => {
      const resultObj = {
        current: {
          fooValue,
          barValue
        },
        previous: {
          fooValue: prev[0],
          barValue: prev[1]
        },
        changed: {
          fooValue: fooValue !== prev[0],
          barValue: barValue !== prev[1]
        }
      };
      setResult(resultObj);
    },
    [fooValue, barValue]
  );

  const handleFooValueChange = useCallback(
    e => setFooValue(e.target.value),
    []
  );
  const handleBarValueChange = useCallback(
    e => setBarValue(e.target.value),
    []
  );

  return (
    <div className="App">
      <h1>use-clear-effect demo</h1>
      <label class="label">
        Foo:
        <br />
        <input value={fooValue} onInput={handleFooValueChange} />
      </label>
      <br />
      <label class="label">
        Bar:
        <br />
        <input value={barValue} onInput={handleBarValueChange} />
      </label>
      <pre class="pre">{JSON.stringify(result, null, "\t")}</pre>
    </div>
  );
}

````

## Contributing

See [contributing](https://github.com/vyushin/use-clear-effect/blob/master/CONTRIBUTING.md) guideline.

## License
[MIT LICENSE](https://github.com/vyushin/use-clear-effect/blob/master/LICENSE)
