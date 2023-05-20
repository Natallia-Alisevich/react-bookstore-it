import React from "react"
import { Navigate, Outlet } from "react-router-dom";
import { ROUTE } from "routes";

export const RequareAuth = () => {
    const isAuth = false;// здесь на сам деле б делаться запрос, сравниваться токены,
    // ч понимать вы авторизировались или нет
    return isAuth ? <Outlet /> : <Navigate to={ROUTE.HOME} />
    //   е польз-ль зарег-н, то показывай нам Outlet, в противн случае
    // воспользуйся компонентом Navigate, кот отправит нас на стр-цу домой
}


// это приватный роут, кот не разрешает переходить на стр-цу,
// и перекидывает нас на другую с просьбой зарегистрироваться
// RequareAuth-требования авторизации
