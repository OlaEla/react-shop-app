import "./style.scss";
import { HelmetProvider } from "react-helmet-async";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HashRouter as Router, Route, Routes } from "react-router-dom"; // Так как GitHub Pages не работает через "чистые" маршруты, меняем BrowserRouter → HashRouter.

import MainPage from "./components/MainPage";
import CatalogPage from "./components/CatalogPage";
import CartPage from "./components/CartPage";
import RegistrationPage from "./components/RegistrationPage";


function App() {
  return (
    <>
      <HelmetProvider>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        />
      </HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} exact />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
