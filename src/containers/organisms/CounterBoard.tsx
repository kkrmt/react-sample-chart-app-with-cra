import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { add, decrement, doubleIncrement, increment } from '../../actions';
import { CounterState } from '../../reducer';
import CounterBoard from '../../components/organisms/CounterBoard';

const EnhancedCounterBoard: FC = () => {
  
  // from redux おまじない?中身を見たい
  const count = useSelector<CounterState, number>((state) => state.count);
  // from redux
  // dispatcherはglobal state更新が必要なcomponent毎に都度都度このhooksで呼び出す
  const dispatch = useDispatch();

  return (
    <CounterBoard
      count={count}
      add={(amount: number) => dispatch(add(amount))}
      decrement={() => dispatch(decrement())}
      increment={() => dispatch(increment())}
      doubleIncrement={() => {
        console.log("2. container component", "doubleIncrement");
        dispatch(doubleIncrement())
      }}
    />
  );
};

export default EnhancedCounterBoard;
