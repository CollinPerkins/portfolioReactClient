import {
  APPEND_INPUT,
  APPEND_EQUATION,
  CLEAR_EQUATION,
  TOTAL
} from './types';

export function appendInput(char) {
  return {
    type: APPEND_INPUT,
    payload: char
  };
}

export function appendEquation(oper) {
  return {
    type: APPEND_EQUATION,
    payload: oper
  };
}

export function clearEquation() {
  return {
    type: CLEAR_EQUATION
  };
}

export function total(equ) {
  return {
    type: TOTAL,
    payload: equ
  };
}
