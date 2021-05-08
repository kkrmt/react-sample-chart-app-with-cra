import { Reducer } from 'redux';
import { CounterAction, CounterActionType as Type } from './actions';

// Appで参照されるglobalなStateってことでOK?
// CounterStateって名前がよくない気がする
// stateが増えたらファイル分けた方が良かろう
export type CounterState = {
  count: number;
};

// stateが増えたらinitialだけ別ファイルに分けた方が見通しがよかろう
export const initialState: CounterState = { count: 0 };

// globalに参照されるstoreをcreateする
// StateとActionからReducerは作られる。なぜ? => reducerはactionの内容に応じてstateを更新するものだから
export const counterReducer: Reducer<CounterState, CounterAction> = (
  state: CounterState = initialState,
  action: CounterAction,
): CounterState => {
  console.log("3-a. reducer counterReducer, action:", {action});
  console.log("3-b. reducer counterReducer, state:", {state});
  switch (action.type) {
    case Type.ADD:
      return {
        ...state,
        count: state.count + (action.amount || 0),
      };
    case Type.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case Type.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case Type.DOUBLEINCREMENT:
      return {
        ...state,
        count: state.count + 2,
      };
    default: {
      // eslint-disable-next-line
      const _: string = action.type;

      return state;
    }
  }
};
