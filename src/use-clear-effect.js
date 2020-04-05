import { useEffect, useState } from 'react';

const useClearEffect = (effect, deps) => {
  const [previousDeps, setPreviousDeps] = useState([]);
  return useEffect(() => { setPreviousDeps(deps); effect(previousDeps); }, deps);
};

export {
  useClearEffect as default,
  useClearEffect,
}
