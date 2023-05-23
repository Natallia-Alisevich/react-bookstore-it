import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "store/store";

// 1.типизируем useSelector:
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// созд перем-ю useAppSe-r, протип-ли RootState и в эту перем-ю поместили ссылку на ф-ю useSelector

// useAppSelector-это кастом хук, ч! вместо useSelector использовать useAppSelector
// сразу с типизацией стора чтоб в хоумпэйдж писать сразу вот так:

// const { products } = useAppSelector((state) => state.cart);
//  вместо:

// const { products } = useSelector((state: RootState) => state.cart);

// т.е. state не надо пост-но тип-ть

//2. тип-ем dispatch:
const useAppDispatch: () => AppDispatch = useDispatch;
// здесь происходит: перем-я useAppDispatch б содержать тип в виде ф-ции, а эта ф-я б возвращать
// AppDispatch,AD -это в сторе мы создали (он типизирует наш диспатч (наши экшины))

export { useAppSelector, useAppDispatch };

// Пробовать :https://scrollex-docs.vercel.app/examples?page=2
