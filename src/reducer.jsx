import { INCREMENT, DECREMENT, NUMBER_TO_ADD, ADD_FORM_INPUT } from "./actions";

const reducer = (state, action) => {
  if (action.type === INCREMENT) {
    return { ...state, count: state.count + 1 };
  }
  if (action.type === DECREMENT) {
    return { ...state, count: state.count - 1 };
  }
  if (action.type === NUMBER_TO_ADD) {
    return { ...state, count: state.count + state.numberToAdd };
  }
  if (action.type === ADD_FORM_INPUT) {
    return { ...state, numberToAdd: action.payload };
  }

  return { ...state };
};

export default reducer;
