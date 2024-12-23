import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ReduxStore from "./components/Redux/ReduxStore.jsx";
import { Provider } from "react-redux";


createRoot(document.getElementById("root")).render(
    <Provider store={ReduxStore}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </Provider>
);
