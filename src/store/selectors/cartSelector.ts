import { RootState } from "store";

// ф-я селектор, ч избежать ререндера, т.к. ф-я useAppSelector в хомпэйдж
// анонимная, она б вызываться пост-но при запуске HomePage
export const selectorCart = (state: RootState) => state.cart;
