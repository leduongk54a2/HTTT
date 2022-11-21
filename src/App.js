import React, { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Routers from "./router";
import "antd/dist/reset.css";
import ROUTES from "./router/router";
/**
 * @class Router
 * @extends {React.Component}
 */
class App extends React.Component {
  /**
   * render
   * @returns {HTML}
   */
  render() {
    return (
      <Suspense>
        <BrowserRouter>
          <Routes>
            {Routers.map((router, idx) => {
              return (
                <Route
                  key={idx}
                  path={router.path}
                  exact
                  element={<router.component />}
                ></Route>
              );
            })}
            <Route
              path="/"
              exact
              element={<Navigate to={ROUTES.MANAGEMENT} replace />}
            />
          </Routes>
        </BrowserRouter>
      </Suspense>
    );
  }
}

export default App;
