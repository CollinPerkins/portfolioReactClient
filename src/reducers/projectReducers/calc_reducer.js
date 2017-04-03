export default function(state = {
  equation: "",
  input: "",
  total: "",
  currentInput: ""
}, action) {
  switch(action.type) {
  case 'APPEND_INPUT':
    return Object.assign({}, state, {
      input: state.input + action.payload,
      currentInput: state.input + action.payload
    })
  case 'APPEND_EQUATION':
    console.log(state.equation[state.equation.length - 1]);
    if(state.equation[state.equation.length - 1] === '-' || state.equation[state.equation.length - 1] === '+' || state.equation[state.equation.length - 1] === '/' || state.equation[state.equation.length - 1] === '*') {
      return Object.assign({}, state, {
        input: "",
        equation: state.equation + state.input,
        currentInput: action.payload
      })
    } else {
      return Object.assign({}, state, {
        input: "",
        equation: state.equation + state.input + action.payload,
        currentInput: action.payload
      })
    }
  case 'CLEAR_EQUATION':
    return Object.assign({}, state, {
      equation: "",
      input: "",
      total: "",
      currentInput: ""
    })
  case 'TOTAL':
    return Object.assign({}, state, {
      input: "",
      equation: state.equation + state.input,
      total: eval(state.equation + state.input),
      currentInput: eval(state.equation + state.input)
    })
  default:
    return state
  }
}
