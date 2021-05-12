import { useState } from "react";
export const useInput = (initialState) => {
  const [state, setState] = useState(initialState);
  const stateBinder = {
    value: state,
    onChange: (e) => setState(e.target.value),
  };
  return [state, setState, stateBinder];
};
