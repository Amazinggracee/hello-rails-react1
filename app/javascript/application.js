// Entry point for the build script in your package.json
// import "@hotwired/turbo-rails"
// import "./controllers"

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import store from "./app/store";
import Greeting from "./components/Greeting";

function App() {
  return (
    <div>
      <h2>Welcome to React + Rails</h2>
      <small>Navigate to '/greeting' endpoint to see random message...</small>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/greeting",
    element: <Greeting />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
