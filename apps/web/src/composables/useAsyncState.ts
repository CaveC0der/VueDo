import { type Ref, ref, type ShallowRef, shallowRef } from 'vue';
import { promiseTimeout } from '@/common/utils';
import type { onErrorCb, onFulfilledCb } from '@/types/callbacks';

export interface AsyncState<T, Args extends any[] = []> {
  state: ShallowRef<T | undefined>;
  isPending: Ref<boolean>;
  error: ShallowRef<unknown | undefined>;
  run: (...args: Args) => Promise<void>;
}

const useAsyncState = <T, Args extends any[] = []>(
  promise: Promise<T> | ((...args: Args) => Promise<T>),
  onFulfilled: onFulfilledCb<T> = () => {},
  onError: onErrorCb = () => {},
): AsyncState<T, Args> => {
  const state = shallowRef<T>();
  const isPending = ref(false);
  const error = shallowRef<unknown>();

  const run = async (...args: Args) => {
    try {
      isPending.value = true;

      await promiseTimeout(3000); // TODO - delete

      if (typeof promise === 'function') {
        state.value = await promise(...args);
      } else {
        state.value = await promise;
      }

      onFulfilled(state.value);
    } catch (e) {
      error.value = e;
      onError(e);
    } finally {
      isPending.value = false;
    }
  };

  return { state, isPending, error, run };
};

export default useAsyncState;
