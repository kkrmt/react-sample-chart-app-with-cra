import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { counterSlice, CounterState } from '../../features/counter';
import CounterBoard from '../../components/organisms/CounterBoard';

const EnhancedCounterBoard: FC = () => {
  
  // from redux おまじない?中身を見たい
  const count = useSelector<CounterState, number>((state) => state.count);
  // from redux
  // dispatcherはglobal state更新が必要なcomponent毎に都度都度このhooksで呼び出す
  const dispatch = useDispatch();

  // counterSliceの場合必要になる
  const { added, decremented, incremented, doubleIncremented } = counterSlice.actions;

  return (
    <CounterBoard
      count={count}
      add={(amount: number) => dispatch(added(amount))}
      decrement={() => dispatch(decremented())}
      increment={() => dispatch(incremented())}
      doubleIncrement={() => {
        console.log("2. container component", "doubleIncrement");
        dispatch(doubleIncremented())
      }}
    />
  );
};

export default EnhancedCounterBoard;
