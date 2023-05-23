import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "routes";
import { Provider } from "react-redux";
import { store } from "store";
import { GlobalStyles } from "ui";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <GlobalStyles />
    <Provider store={store} >
      <RouterProvider
        router={router} />
    </Provider>
  </>
);

