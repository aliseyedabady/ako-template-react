import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// import NotFound from "../../Pages/NotFound";

const Routing = ({ routes = [], redirect }) => {
  return (
    <Routes>
      {routes.map((route, i) => {
        return (
          <Route
            key={i}
            path={route.path}
            element={
              <route.layout>
                <route.component props={route} />
              </route.layout>
            }
          />
        );
      })}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default Routing;
