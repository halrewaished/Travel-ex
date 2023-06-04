import React from "react";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { appRoutesObj } from "./app.paths";

const ExamplePage = React.lazy(() => import('./pages/user/example-page'));
const NotFoundPage = React.lazy(() => import('./pages/404'));
const DiscoverPage = React.lazy(() => import('./pages/user/discover-page'));
const PhotoPage = React.lazy(() => import('./pages/user/photo-page'));
const ContactPage = React.lazy(() => import('./pages/user/contact-page'));


const withSuspense = (WrappedComponent: JSX.Element) => {
  return (
    <Suspense
      fallback={
        <div className="text-primary-200 pt-10">
          Loading...
        </div>
      }
    >
      {WrappedComponent}
    </Suspense>
  );
};

export function AppRouting() {
  return (
    <Suspense
      fallback={
        <div className="text-primary-200 pt-10">
          Loading...
        </div>
      }
    >
      <BrowserRouter>
        <Routes>
          <Route
            key="homepage"
            path={appRoutesObj.getBasePath()}
            element={withSuspense(<App />)}
          />

          <Route
            key="examplePage"
            path={appRoutesObj.getExamplePagePath()}
            element={withSuspense(<ExamplePage />)}
          />


          <Route
            key="notDefined"
            path="*"
            element={withSuspense(<NotFoundPage />)}
          />

          <Route
            key="DiscoverPage"
            path={appRoutesObj.getDiscoverPagePath()}
            element={withSuspense(<DiscoverPage />)}
          />

          <Route
            key="PhotoPage"
            path={appRoutesObj.getPhotoPagePath()}
            element={withSuspense(<PhotoPage />)}
          />

          <Route
            key="ContactPage"
            path={appRoutesObj.getContactPagePath()}
            element={withSuspense(<ContactPage />)}
          />

        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
