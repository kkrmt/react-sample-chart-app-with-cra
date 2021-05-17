import React, { FC, useReducer } from 'react';
import CounterWidget from '../../components/templates/CounterWidget';

// Actiontype
const CounterActionType = {
  added: 'counter/added',
  decremented: 'counter/decremented',
  incremented: 'counter/incremented',
  doubleIncremented: 'counter/doubleIncremented',
};
// as const
// const アサーションで定数化する感じ

// Actionの雛形オブジェクト
// type ValueOf<T> = T[keyof T];
type CounterAction = {
  // type: ValueOf<typeof CounterActionType>, // => 'counter/decremented' | 'counter/decremented' | 'counter/incremented' | 'counter/doubleIncremented' を最終的に作りたい
  type: 'counter/added' | 'counter/decremented' | 'counter/incremented' | 'counter/doubleIncremented',
  payload?: number,
};

// State
type CounterState = { count: number };

// Reducer
const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
  switch (action.type) {
    case CounterActionType.added:
      return {
        ...state,
        count: state.count + (action.payload ?? 0),
      };
    case CounterActionType.decremented:
      return {
        ...state,
        count: state.count - 1,
      };
    case CounterActionType.incremented:
      return {
        ...state,
        count: state.count + 1,
      };
    case CounterActionType.doubleIncremented:
      return {
        ...state,
        count: state.count + 2,
      };
    default: return state;
  }
};

// 個別のAction
const add = (payload: number): CounterAction => {
  return {
    type: 'counter/added',
    payload: payload,
  }
};
const decrement = (): CounterAction => ({ type: 'counter/decremented' });
const increment = (): CounterAction => ({ type: 'counter/incremented' });
const doubleIncrement = (): CounterAction => ({ type: 'counter/doubleIncremented' });

// 本体のコンポーネント
const EnhancedCounterWidget: FC = () => {
  // TODO useReducer
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <CounterWidget 
      count={state.count}
      add={(amount: number) => dispatch(add(amount))} 
      decrement={() => dispatch(decrement())}
      increment={() => dispatch(increment())}
      doubleIncrement={() => dispatch(doubleIncrement())}
    />
  );
};

export default EnhancedCounterWidget;
