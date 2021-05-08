export const CounterActionType = {
  ADD: 'ADD',
  DECREMENT: 'DECREMENT',
  INCREMENT: 'INCREMENT',
  DOUBLEINCREMENT: 'DOUBLEINCREMENT',
};
  
type ValueOf<T> = T;
// type ValueOf<T> = T[keyof T];
  
export type CounterAction = {
  type: string;
  amount?: number;
};
  
export const add = (amount: number): CounterAction => ({
  type: CounterActionType.ADD,
  amount,
});
  
export const decrement = (): CounterAction => ({
  type: CounterActionType.DECREMENT,
});
  
export const increment = (): CounterAction => ({
  type: CounterActionType.INCREMENT,
});

export const doubleIncrement = (): CounterAction => ({
  type: CounterActionType.DOUBLEINCREMENT,
});