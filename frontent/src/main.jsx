import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import { JobProvider } from "./context/JobContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <JobProvider>
        <App />
      </JobProvider>
    </Provider>
  </StrictMode>
);
