import { useState } from "react";

interface MutationOptions<T> {
  mutationFn: (args: T) => Promise<any>;
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

interface MutationState {
  isPending: boolean;
  isError: boolean;
  isSuccess: boolean;
}

const useServerActionMutation = <T>({
  mutationFn,
  onSuccess,
  onError,
}: MutationOptions<T>) => {
  const [mutationState, setMutationState] = useState<MutationState>({
    isPending: false,
    isError: false,
    isSuccess: false,
  });

  const mutate = async (args: T) => {
    setMutationState({ isPending: true, isError: false, isSuccess: false });

    try {
      await mutationFn(args);
      setMutationState({ isPending: false, isError: false, isSuccess: true });

      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      setMutationState({ isPending: false, isError: true, isSuccess: false });
      if (onError && error instanceof Error) {
        onError(error);
      }
    }
  };

  return { ...mutationState, mutate };
};

export default useServerActionMutation;
