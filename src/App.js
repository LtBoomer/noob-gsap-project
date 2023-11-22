import { useEffect } from "react";
import "./App.scss";
import { gsap } from "gsap";
import Layout from "./components/layout/Layout";
import HomePage from "./components/homePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/ProductsPage/Products";
import Gallery from "./components/GalleryPage/GalleryPage";
import Contact from "./components/ContactPage/ContactPage";

const App = () => {
  const openingAnimation = (definitiveValue) => {
    gsap.to(`.opening-animation-${definitiveValue}`, {
      x: "100%",
      duration: 1,
      delay: 0.9 + definitiveValue / 10,
    });
  };

  useEffect(() => {
    if (window.location.pathname === "/") {
      for (let i = 1; i <= 3; i++) {
        openingAnimation(i);
      }
      setTimeout(() => {
        document.querySelector(".opening-animation-wrapper").style.display =
          "none";
      }, 2000);
    }
  }, []);

  return (
    <>
      {window.location.pathname === "/" && (
        <div className="opening-animation-wrapper">
          <div className="opening-animation opening-animation-1" />
          <div className="opening-animation opening-animation-2" />
          <div className="opening-animation opening-animation-3" />
        </div>
      )}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
          <Route
            path="/product"
            element={
              <Layout>
                <Products />
              </Layout>
            }
          />
          <Route
            path="/gallery"
            element={
              <Layout>
                <Gallery />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />
          <Route
            path="*"
            element={
              <Layout>
                <div>SALUT NU AICI</div>
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
