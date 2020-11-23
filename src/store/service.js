import { store, state } from "../store/store";
import { hintTimer } from "../store/const";
import { hintCardShow } from "../store/action";

/* 카드 한장씩 뒤집기 */
// export const showHint = () => {
//   const cards = store.getState().cards;

//   cards.forEach((card, index) => {
//     setTimeout(() => {
//       state.dispatch(hintCardShow(index));
//       const currentHintCard = index;
//       if (currentHintCard === cards.length - 1) {
//         setTimeout(() => {
//           state.dispatch(hintCardShow(null));
//         }, hintTimer);
//       }
//     }, index * hintTimer);
//   });
// };
