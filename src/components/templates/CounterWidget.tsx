import React, { FC, Fragment } from 'react';
import '../organisms/CounterBoard.css';
import 'semantic-ui-css/semantic.min.css';
import '../../index.css';
import CounterBoard, { CounterBoardProps } from '../organisms/CounterBoard';
import ColorfulBeads from '../molecules/ColorfulBeads';

const CounterWidget: FC<Required<CounterBoardProps>> = ({
  count = 0,
  add = () => undefined,
  decrement = () => undefined,
  increment = () => undefined,
  doubleIncrement = () => undefined,
}) => (
  <Fragment>
    <CounterBoard {...{count, add, decrement, increment, doubleIncrement}} />
    <ColorfulBeads count={count}/>
  </Fragment>
);

export default CounterWidget;
