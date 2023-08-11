import { INCREMENT, DECREMENT, NUMBER_TO_ADD, ADD_FORM_INPUT } from "./actions";

const reducer = (state, action) => {
  // If Else Logic for Reducer

  // if (action.type === INCREMENT) {
  //   return { ...state, count: state.count + 1 };
  // }
  // if (action.type === DECREMENT) {
  //   return { ...state, count: state.count - 1 };
  // }
  // if (action.type === NUMBER_TO_ADD) {
  //   return { ...state, count: state.count + state.numberToAdd };
  // }
  // if (action.type === ADD_FORM_INPUT) {
  //   return { ...state, numberToAdd: action.payload };
  // }

  // return state;

  // Switch/Case Logic for Reducer
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case NUMBER_TO_ADD:
      return {
        ...state,
        count: state.count + state.numberToAdd,
      };
    case ADD_FORM_INPUT:
      return {
        ...state,
        numberToAdd: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
