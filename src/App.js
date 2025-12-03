import "./style.scss";
import { HelmetProvider } from "react-helmet-async";

import {
  BrowserRouter,
  HashRouter,
  Routes,
  Route
} from "react-router-dom";

import MainPage from "./components/MainPage";
import CatalogPage from "./components/CatalogPage";
import CartPage from "./components/CartPage";
import RegistrationPage from "./components/RegistrationPage";

// ================================
//  Переключатель Router’а
// ================================
//  • локально (npm start) → BrowserRouter без basename
//  • GitHub Pages → HashRouter
// ================================

const isProd = process.env.NODE_ENV === "production";

const Router = isProd ? HashRouter : BrowserRouter;

function App() {
  return (
    <HelmetProvider>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap"
        rel="stylesheet"
      />

      <Router basename={isProd ? undefined : "/"}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;