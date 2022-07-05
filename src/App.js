import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthRoutesComponent from "./components/AuthRoutes/AuthRoutes.component.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import ROUTES from "./helpers/Routes.js";
import LandingPage from "./pages/LandingPage.js";

function App() {
  const queryClient = new QueryClient();
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <Routes>
          <Route path={ROUTES.LOGIN} element={<LandingPage />} />
          <Route path="*" element={<AuthRoutesComponent />} />
        </Routes>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
