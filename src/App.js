import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home';
import About from "./pages/About";
import Products from "./pages/Products";
import Contacts from "./pages/contact";
import logo from "./img/logo.png"

function App() {
  return (
    <>
      <BrowserRouter>
        <div class= "container-fluid">
          <main>
            <nav class="navbar navbar-expand-lg bg-body-tertiary navbar text-bg-warning p-3" data-bs-theme="dark">
              <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <Link to="/" class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover nav-link active" aria-current="page">
                      <img src={logo} alt="Bootstrap" width="30" height="24" />
                      </Link>
                    </li>
                    <li class="nav-item">
                  <Link to="/productos" class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover nav-link">
                    Productos
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/about" class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover nav-link">
                    Acerca de
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/contacts" class="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover nav-link">
                    Contactos
                  </Link>
                </li>
                  </ul>
                </div>
              </div>
            </nav>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/productos' element={<Products />} />
              <Route path='/contacts' element={<Contacts />} />
            </Routes>
          </main>
          <footer>
            <ul>
              <li>Agustin Gonzalez</li>
            </ul>
          </footer>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;