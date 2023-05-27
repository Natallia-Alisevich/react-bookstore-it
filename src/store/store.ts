import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import newBooksReducer from "./features/new/newBooksSlice";
import searchBooksReducer from "./features/search/searchSlice";
import favoriteBooksReducer from "./features/favorite/favoriteBooksSlice";

//configureStore()-это ф-я обстракция над стандартной
// ф-ей createStore(), эта ф-я есть у редакса, которая создает store, но
// внутри редакстулкита она опущена и обернута в ф-ю configureStore(),
// т.е configureStore() сгенерирует нам store
//  ожидает 1 аргумент-опции, а опции-это какой-то объект:

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    newBooks: newBooksReducer,
    search: searchBooksReducer,
    favoriteBooks: favoriteBooksReducer,
  }, // каждый reducer:-это ключ к объекту нашего редакса
});

export type RootState = ReturnType<typeof store.getState>; //д типизации нашего стора автом-ки
// getState-это ф-я, т.к ReturnType возвращает тип возвращаемого значения. Здесь мы
// обращ к нашему стору (store.getState)- это объект, у этого объекта есть ключи (ключ getState),
// getState-это ф-я,кот позвол получить все данные, кот нах тут.
// =>  ReturnType верни еип возвращаемого значения ф-ции getState
export type AppDispatch = typeof store.dispatch; // дай тип диспатча кот есть в сторе,
//  т.е. это автом-я тип-ция диспатча (всех actions, кот нах-ся в store).
// дальше переходим в hooks.ts для юзселектор

// reducer-это ф-ии, которые имеют доступ к данным стора и изм-ют
// данные стора. Стор-это хранилище, где хранятся все наши данные
// он хранит сост-е, кот нужно отрисовать, а в State- это состояние,
//  которое отрисовывается.Это сост-е идет в наш UI в реакт (UI ловит все клики,
// а на любой клик дб ф-я Handler, т.е. происх событие), потом мы
// нажимаем на клавишу=> событие Event. Ф-я Handler содержит внутри
//  себя ф-ю dispatch-это ф-я,позволяющая генерировать какие-то actions,
// направлять эти экшины в стор. Т.е.эта ф-я,  запускающая изм-я в сторе, эта ф-я говорит нам
// что делать. Ф-я dispatch в кач арг-в пинимает экшины. А экшины- это объекты,
// у кот есть type(тип/имя экшина) и payload(полез нагрузка, которую он м
// содержать или нет ).
// На основе экшинов запускается к-то из редусеров (принимает в себя полез нагрузку)
// изм-ет стор, стор меняется и мен-ся стэйт (State) и отправляет все на ui
//  и так по кругу
