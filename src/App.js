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

function App() {
  return (
    <>
      <BrowserRouter>
        <div class="container-fluid p-0  bg-info">
          <nav class="navbar navbar-dark bg-secondary ">
            <div class="container-fluid">
              <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="offcanvas offcanvas-start bg-secondary" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title text-white" id="offcanvasNavbarLabel">Menú</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                  <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item">
                      <Link to="/" class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover nav-link active" aria-current="page">
                        Inicio
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
            </div>
          </nav>
          
          <div class="container-fluid">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/productos' element={<Products />} />
              <Route path='/contacts' element={<Contacts />} />
            </Routes>
          </div>

          <div class="container-fluid">
            <div class="row p-5 bg-dark text-white">
              <div class="col-xs-12">
                <p class="h3 text-center">Agustin Gonzalez</p>
              </div>
              <div class="col-xs-12">
                <p class="text-white text-center">Copyright - Todos los derechos reservados © 2023 </p>
              </div>
            </div>
          </div>

        </div>
      </BrowserRouter>
    </>
  );
}

export default App;