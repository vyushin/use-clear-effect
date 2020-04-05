declare module "use-clear-effect" {
  import { DependencyList, useEffect } from 'react';
  type EffectCallback = (prev?: DependencyList) => (void | (() => void | undefined));
  function useClearEffect(effect: EffectCallback, deps?: DependencyList): ReturnType<typeof useEffect>;

  export { useClearEffect };
  export default useClearEffect;
}
