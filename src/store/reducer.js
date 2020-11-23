import { initialState } from "../store/state";
import { combineReducers } from "redux";
import { __shuffle } from "../utils";
import { GAME_START } from "./action";

/* 게임을 시작할경우 */
// const is_started = (state = initialState.is_started, action) => {
//   switch (action.type) {
//     case GAME_START: {
//       return true;
//     }
//   }

//   return state;
// };

export const reducer = combineReducers({
  // is_started,
});
